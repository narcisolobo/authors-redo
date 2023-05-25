import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/db-connect.js';
import authorRouter from './routes/author-routes.js';

const app = express();

app.use(express.json(), cors());
app.use('/api/authors', authorRouter);

dotenv.config();
const PORT = process.env.PORT;

async function start() {
  try {
    await dbConnect();
    const server = app.listen(PORT, () =>
      console.log(`Listening on port: ${PORT}`)
    );
    server.on('error', (err) => {
      throw err;
    });
  } catch (error) {
    console.log(error);
  }
}

start();
