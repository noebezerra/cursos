import express from 'express';
import AutorController from '../controllers/autorController.js';
import paginacao from '../middlewares/paginacao.js';

const routes = express.Router();

routes.get('/autores', AutorController.listaAutores, paginacao);
routes.get('/autores/:id', AutorController.listaAutoresPorId);
routes.post('/autores', AutorController.criarAutor);
routes.put('/autores/:id', AutorController.atualizarAutor);
routes.delete('/autores/:id', AutorController.deletarAutor);

export default routes;
