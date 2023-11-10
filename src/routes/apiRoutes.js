import express from "express";
const router = express.Router();
import { createURLShorter, getShortURL } from "../controllers/apiController.js";

router
.get('/shorturl/:short_url', getShortURL)
.post('/shorturl', createURLShorter);

export default router;
