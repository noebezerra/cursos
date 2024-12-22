const dataSource = require('../database/models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros(where = {}) {
    return dataSource[this.model].findAll({ where: { ...where } });
  }

  async pegaRegistroPorEscopo(escopo) {
    return dataSource[this.model].scope(escopo).findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async pegaUmRegistro(where) {
    return dataSource[this.model].findOne({ where: { ...where } });
  }

  async pegaEContaRegistros(options) {
    return dataSource[this.model].findAndCountAll({ ...options });
  }

  async atualizaRegistro(dadosAtualizados, where, transacao = {}) {
    const listaDeRegistroAtualizado = await dataSource[this.model].update(
      dadosAtualizados,
      { where: { ...where }, transaction: transacao }
    );
    if (listaDeRegistroAtualizado[0] === 0) {
      return false;
    }
    return true;
  }

  async cria(dados) {
    return dataSource[this.model].create(dados);
  }

  async apaga(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
