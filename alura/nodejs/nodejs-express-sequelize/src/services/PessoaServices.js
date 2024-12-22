const dataSource = require('../database/models');
const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
    this.matriculaServices = new Services('Matricula');
  }

  async pegaMatriculasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async pegaTodasAsMatriculasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = await estudante.getTodasAsMatriculas();
    return listaMatriculas;
  }

  async pegaTodosOsRegistrosEscopo(escopo) {
    const estudantes = await super.pegaRegistroPorEscopo(escopo);
    return estudantes;
  }

  async cancelaPessoaEMatriculas(estudanteId) {
    const transacao = await dataSource.sequelize.transaction();
    try {
      await super.atualizaRegistro(
        { ativo: false },
        { id: estudanteId },
        transacao
      );
      await this.matriculaServices.atualizaRegistro(
        { status: 'cancelado' },
        { estudante_id: estudanteId },
        transacao
      );
      await transacao.commit();
    } catch (error) {
      await transacao.rollback();
      throw new Error(error);
    }
  }
}

module.exports = PessoaServices;
