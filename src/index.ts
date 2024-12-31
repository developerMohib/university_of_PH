import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// all route error handle
app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'This is not a valid route',
  });
});
export default app;
