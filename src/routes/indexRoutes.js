import express from "express";
const router = express.Router();
import {indexController} from '../controllers/indexController.js';

router.get('/', indexController);


export default router;