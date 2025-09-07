import { Request, Response } from "express";
import { fileURLToPath } from "url";
import path from "path";
import { promises as fs } from "fs";
import { nanoid } from "nanoid";
import axios from "axios"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFilePath = path.join(__dirname, "../", "data.json");

export default async function urlController(req: Request, res: Response) {
  try {
    const { url } = req.body;
    console.log("urlController called with URL:", url);

    if (!url) {
      return res.status(400).json({ success: false, message: "URL is required" });
    }

    console.log("📥 Received URL:", url);

    let data: Array<{ id: string; url: string }> = [];
    try {
      const raw = await fs.readFile(dataFilePath, "utf-8");
      data = JSON.parse(raw);
    } catch (err) {
      data = [];
    }

    // Generate UUID and push new entry
    const id: string = nanoid(8);
    data.push({ id, url });

    // Write back to file
    await fs.writeFile(dataFilePath,
       JSON.stringify(data, null, 2), "utf-8");

 const response = await axios.post(
      "http://extractor-service:3000/api/v1/url",
      { urls:{repoUrl:url,backend:`${url}/backend`, frontend:`${url}/frontend`}, id }
    );

    res.json({
      success: true,
      id,
      url,
      message: "URL accepted by submission-service",
    });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
}
