import express from 'express';
import livros from './livros.js';
import autores from './autores.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send('Hello!');
  });

  app.use(express.json(), livros, autores);
};

export default routes;
