import mongoose from 'mongoose';
import '../db.js';
import dns from 'node:dns';
import {URL} from 'node:url';

const urlSchema = mongoose.Schema({
  original_url: String,
  short_url: Number
});

const urlDoc = mongoose.model('urlDoc', urlSchema);

export async function createURLShorter(req, res) {
  const stringUrl = req.body.url;
  try {
    const myURL = new URL(stringUrl);
    const urlParsed = myURL.host;
    dns.lookup(urlParsed, async (err, address, family)=>{
      if(!address){
        res.json({ error: "Invalid url" });
      }else{
        const count = await urlDoc.countDocuments({}).exec();
        const urlShort = new urlDoc({ original_url: urlParsed, short_url: count + 1 });
        const newUrl = await urlShort.save();
    
        res.status(200).json(newUrl)
      }
    });
  } catch (error) {
    console.error(error)
  }
};

export function getShortURL(req, res) {
  const { short_url } = req.params;

  res.json({
    short_url: short_url,
    original_url: 'wwww.freecodecamp.org'
  })
};
