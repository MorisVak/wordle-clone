import express from 'express';
import { config } from 'dotenv-safe';
config();

const app = express();

app.use(express.static('dist'));
app.use(express.json());

export default app;
