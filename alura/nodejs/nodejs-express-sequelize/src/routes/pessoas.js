const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.pegaPorId(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res));
router.post('/pessoas', (req, res) => pessoaController.cria(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.apaga(req, res));
router.get('/pessoas/:estudanteId/matriculas', (req, res) =>
  pessoaController.pegaMatriculas(req, res)
);
router.post('/pessoas/:estudanteId/matriculas', (req, res) =>
  matriculaController.cria(req, res)
);

module.exports = router;
