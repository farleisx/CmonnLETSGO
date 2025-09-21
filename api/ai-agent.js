export default async function handler(req,res){
  const prompt = req.body.prompt;
  const API_KEY = process.env.GOOGLE_API_KEY;

  const response = await fetch('https://gemini.api.google.com/v1/completions', {
    method:'POST',
    headers:{
      'Authorization':`Bearer ${API_KEY}`,
      'Content-Type':'application/json'
    },
    body: JSON.stringify({prompt})
  });
  
  const data = await response.json();
  res.json(data);
}
