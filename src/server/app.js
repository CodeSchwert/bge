import express from 'express';
import path from 'path';

const app = express();

app.use('/client', express.static(path.join(__dirname, 'client')));
app.use('/static', express.static(path.join(__dirname, 'static')));

export default app;
