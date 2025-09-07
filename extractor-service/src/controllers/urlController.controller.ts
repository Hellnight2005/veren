
import { Request, Response } from "express";
import simpleGit from "simple-git";
import axios from "axios"
import {exec} from "child_process"
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { cloneRepo } from "../services/gitHandler.js";

export default async function urlController(req: Request, res: Response) {
  const {id, urls:{repoUrl,frontend, backend}} = req.body;
  if(!id || !frontend || !backend){
    return res.status(400).json({ success: false, message: "id and urls are required" });
  }
  console.log("TIME FOR FORK:", repoUrl);

  try {
    const {projectId, baseDir, backendDir, frontendDir} = await cloneRepo(repoUrl, frontend, backend);
    console.log("CLONED:", projectId, baseDir, backendDir, frontendDir);
    return res.json({
      success: true,
      id: projectId,
      repoUrl,
      dir:{baseDir, backendDir, frontendDir},
      services: {
        backend: `${process.env.BASEURI}/backend/${projectId}`,
        frontend: `${process.env.BASEURI}/frontend/${projectId}`,
      },
      message: `Repo cloned successfully into ${baseDir}`
    });
  } catch (error) {
    
  }

  return res.json({ success: true, id, frontend, backend, message: "URL accepted by extractor-service" });
}
