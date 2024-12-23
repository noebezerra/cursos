import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';
import './dbconnect.js';

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

//usa um diretorio como pasta/arquivo estatico
const dir = url.fileURLToPath(import.meta.url);
const dirPublic = path.join(dir, '../..', 'public');
app.use(express.static(dirPublic));

server.listen(port, () => console.log(`Servidor on localhost:${port}`));

export default io;
