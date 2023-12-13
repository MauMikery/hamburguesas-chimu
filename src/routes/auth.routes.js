//Rutas para autenticacion
import { Router } from 'express';
import { register, login, logout, profile } from '../controllers/auth.controller.js';
import { authRequiered } from '../middlewares/validateToken.js';
//Objeto para crear rutas
const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post("/logout", logout); 
router.get("/profile", authRequiered, profile); 

export default router; 