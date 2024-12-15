const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursoController = new CursoController();

const router = Router();

router.get('/cursos', (req, res) => cursoController.pegaTodos(req, res));
router.get('/cursos/:id', (req, res) => cursoController.pegaPorId(req, res));
router.put('/cursos/:id', (req, res) => cursoController.atualiza(req, res));
router.post('/cursos', (req, res) => cursoController.cria(req, res));
router.delete('/cursos/:id', (req, res) => cursoController.apaga(req, res));

module.exports = router;
