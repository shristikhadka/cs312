import express from 'express';
import { hello, APINames } from './routes.js';

const server = express();
const port = 3000;


server.get('/hello', hello);


server.get('/api/names', async (req, res) => {
    await APINames(req, res);
});

server.listen(port, function () {
    console.log('Listening on ' + port);
});
