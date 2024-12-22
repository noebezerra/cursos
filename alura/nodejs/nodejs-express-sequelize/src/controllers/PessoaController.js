const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaControler extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(
        Number(estudante_id)
      );
      return res.status(200).json(listaMatriculas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async pegaTodasAsMatriculas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas =
        await pessoaServices.pegaTodasAsMatriculasPorEstudante(
          Number(estudante_id)
        );
      res.status(200).json(listaMatriculas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async pegaTodosOsRegistros(req, res) {
    try {
      const estudantes = await pessoaServices.pegaRegistroPorEscopo(
        'todosOsRegistros'
      );
      return res.status(200).json(estudantes);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async cancelaRegistroEstudante(req, res) {
    const { estudante_id } = req.params;
    try {
      await pessoaServices.cancelaPessoaEMatriculas(Number(estudante_id));
      return res.status(200).json({
        messagem: `Matriculas ref. estudante ${estudante_id} canceladas`,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PessoaControler;
