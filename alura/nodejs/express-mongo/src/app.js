import express from 'express';
import db from './config/db.js';
import routes from './routes/index.js';
import errors from './middlewares/errors.js';
import error404 from './middlewares/error404.js';

const conn = await db();
conn.on('error', (erro) => {
  console.log('🔴 Erro de conexão', erro);
});
conn.once('open', () => {
  console.log('🟢 Conexão realizada com sucesso!');
});

const app = express();
routes(app);

app.use(error404);

app.use(errors);

export default app;
