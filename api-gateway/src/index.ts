import { env } from "./config/env.js";
import app from "./app.js";
import logger from "./logger/logger.js";
import { connectDB } from "./db/index.js";
import { pollQueue } from "./consumer.js";

const PORT = env.PORT;

async function init() {
    await connectDB();

    app.listen(PORT, "0.0.0.0", () => {
        logger.info(`Server is running on port ${PORT}`);
    });

    // Start SQS polling concurrently
    (async function pollLoop() {
        console.log("Polling SQS...");
        while (true) {
            try {
                await pollQueue();
            } catch (err) {
                console.error("Polling error:", err);
            }
        }
    })();
}

init();
