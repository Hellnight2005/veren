import {simpleGit} from "simple-git";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function cloneRepo(repoUrl: string, frontend : string, backend: string) {
    const projectId = crypto.randomBytes(6).toString('hex');
    const baseDir = path.join(__dirname, '../../clones', projectId);
    
    try {
        console.log("Cloning", repoUrl, "into", baseDir);
        fs.mkdirSync(baseDir, { recursive: true });
        const git = simpleGit();
        await git.clone(repoUrl, baseDir, ["--depth=1"]);
        // MAKING BACKEND AND FRONTEND DIRECTORIES
        const backendDir = path.join(baseDir, 'backend');
        const frontendDir = path.join(baseDir, 'frontend');
        fs.mkdirSync(backendDir, { recursive: true });
        fs.mkdirSync(frontendDir, { recursive: true });
        console.log("Created backend and frontend directories");
        return { projectId, baseDir, backendDir, frontendDir};

    } catch (error) {
        console.error(`Error cloning ${repoUrl} into ${baseDir}:`, error);
        throw error;
    }

}
