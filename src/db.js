import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URI);