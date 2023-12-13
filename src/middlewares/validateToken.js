import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from '../config.js'; 

//Funciones que se ejecutaran antes de que lleguen a una ruta
export const authRequiered = (req, res, next) => {
  const { token } = req.cookies;
  
  if(!token) res.status(401).json({message:"Token no autorizado"});

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if(err) return res.status(401).json({message:"Token invalido"}); 
    console.log(user); 
    next(); 
  });
}
