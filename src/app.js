import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

//Creamos el servidor express
const app = express();

//Usamos middleware
app.use(cors()); 
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json()); 

app.use('/api', authRoutes);

export default app;
