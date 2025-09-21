import fs from 'fs';
import path from 'path';

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'});

  const {username, password} = req.body;
  const filePath = path.join(process.cwd(), 'api', 'users.json');
  const users = JSON.parse(fs.readFileSync(filePath,'utf8'));

  if(users.find(u=>u.username===username)) return res.json({success:false, error:'User exists'});
  
  users.push({username, password});
  fs.writeFileSync(filePath, JSON.stringify(users,null,2));
  res.json({success:true});
}
