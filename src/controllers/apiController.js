export function createURLShorter(req, res)
{
  const {url} = req.body;
  
  res.json({
    url: url,
    short_url: 1
  })
};
export function getShortURL(req, res){
  const {short_url} = req.params;

  res.json({
    short_url: short_url,
    original_url: 'wwww.freecodecamp.org'
  })
}
