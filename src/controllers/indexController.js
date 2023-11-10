import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function indexController(req, res){
  res.sendFile(join(__dirname, '../../public/index.html'));
};