import express from 'express';
import db from './config/db.js';
import routes from './routes/index.js';

const conn = await db();
conn.on('error', (erro) => {
  console.log('🔴 Erro de conexão', erro);
});
conn.once('open', () => {
  console.log('🟢 Conexão realizada com sucesso!');
});

const app = express();
routes(app);

export default app;
