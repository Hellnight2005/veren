import { Router, Request, Response } from "express";
import {handleUrl} from "../controllers/url.controller.js";
import axios from "axios";
const router = Router();

router.post("/", handleUrl);

export default router;
