import express, { NextFunction } from 'express';
import todoRoutes from './routes/todosRoutes';
import { json } from 'body-parser';

const app = express();
const port = 3000;
app.use(json());

app.use('/todos',todoRoutes);

app.use((err: Error,req: express.Request,res: express.Response,next: NextFunction)=>{
    res.status(500).json({message:err.message});
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

