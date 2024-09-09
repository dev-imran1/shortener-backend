import express from 'express';
import { getUrls } from '../controllers/urlControllers.js';
const router = express.Router();

router.get("/", getUrls)


export default router;

