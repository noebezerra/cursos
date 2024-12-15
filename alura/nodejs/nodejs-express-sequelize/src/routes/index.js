const express = require('express');
const pessoas = require('./pessoas.js');
const categorias = require('./categorias.js');
const cursos = require('./cursos.js');

module.exports = (app) => {
  app.use(express.json(), pessoas, categorias, cursos);
};
