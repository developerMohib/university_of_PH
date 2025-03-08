import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import { globalErrorHandler } from './utils/errorHandler';
import { router } from './route/route';

// Create an instance of the Express application
const app: Application = express();

// To parse incoming JSON requests
app.use(express.json());

// To enable Cross-Origin Resource Sharing (CORS)
app.use(cors());


// Here is my routes
app.use('/api/v1',router)


// server static files
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});

app.get('/status', (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    message: 'University Management server is ready!✌',
  });
});

// all route error handle
app.all('*', (req: Request, res: Response): void => {
  res.status(404).json({
    success: false,
    message: 'This is not a valid route 🤦‍♀️🤷‍♂️',
  });
});

app.use(globalErrorHandler)

export default app;
