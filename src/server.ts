import dotenv from 'dotenv';
import 'reflect-metadata';
import './config/database';
import './container';
import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';

import cors from 'cors';
import routes from './routes';
import swaggerFile from './swagger.json';

import AppError from './errors/AppError';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', '*');
  next();
});

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT} ✅`));
