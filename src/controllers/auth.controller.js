import { findUser, saveUser } from "../models/auth.models.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

//Promesa para realizar el guardado del usuario 
const saveUserAsync = (username, email, phone, address, passwordHash) => {
  return new Promise((resolve, reject) => {
    saveUser(username, email, phone, address, passwordHash, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

//Promesa para realizar la busqueda del usuario
const findUserAsync = (email, password) => {
  return new Promise((resolve, reject) => {
    findUser(email, password, (err, data) => {
      if(err){
        reject(err);
      } else {
        resolve(data); 
      }
    })
  })
}

export const register = async (req, res) => {
  try {
    const { username, email, phone, address, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const id_user = await saveUserAsync(username, email, phone, address, passwordHash);

    //Creando token 
    const token = await createAccessToken({id: id_user}); 
    
    //Devolviendo datos al front-end
    res.cookie("token", token); 
    res.json({
      id_user,
      username,
      email
    });

  } catch (err) {
    console.log(err); 
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await findUserAsync(email, password); 
    if(!userFound) return res.status(400).json({message: "Usuario no encontrado"}); 

    const isMatch = await bcrypt.compare(password, userFound.password); 
    if(!isMatch) return res.status(400).json({message: "Contraseña incorrecta"});
    
    const token = await(createAccessToken({id:userFound.id}));
    res.cookie("token", token); 
    res.json({
      id_user: userFound.id,
      username: userFound.username,
      email: userFound.email
    }); 
  } catch (err) {
    res.status(500).json({ message: 'Algo salio mal' });
  }
};

export const logout = (req, res) => {
  res.cookie('token', "", {
    expires: new Date(0)
  });
  return res.sendStatus(200); 
}

export const profile = (req, res) => {
  res.send("Profile");
}