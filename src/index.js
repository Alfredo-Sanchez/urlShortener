import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from "cors";
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



// middlewares
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
// app.use()

// default page for anywhere address
app.use((req, res)=>{
  res
  .status(404)
  .sendFile(join(__dirname, '../public/404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`)
})
