const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }

  async pegaRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const listaDeRegistroAtualizado = dataSource[this.model].update(
      dadosAtualizados,
      {
        where: { id: id },
      }
    );

    if (listaDeRegistroAtualizado === 0) {
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
