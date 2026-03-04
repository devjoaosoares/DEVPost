import express from 'express';
import userRoutes from './app/controllers/userRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
//Para entender JSON no corpo das requisições

