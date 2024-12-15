class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (error) {}
  }

  async pegaPorId(req, res) {
    try {
      const { id } = req.params;
      const resgistro = await this.entidadeService.pegaRegistroPorId(id);
      if (resgistro === null) {
        return res.status(404).json({ mensagem: `Nenhum registro encontrado` });
      }
      return res.status(200).json(resgistro);
    } catch (error) {}
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(
        dadosAtualizados,
        Number(id)
      );
      if (!foiAtualizado) {
        return res
          .status(400)
          .json({ mensagem: `Registro não foi atualizado` });
      }
      return res.status(200).json({ mensagem: `Atualizado com sucesso` });
    } catch (error) {}
  }

  async cria(req, res) {
    try {
      if (Object.keys(req.body).length === 0) {
        return res
          .status(400)
          .json({ mesagem: `Um ou mais dados estão faltando` });
      }
      const criado = await this.entidadeService.cria(req.body);
      return res
        .status(201)
        .json({ mensagem: 'Criado com sucesso!', dado: criado });
    } catch (error) {}
  }

  async apaga(req, res) {
    try {
      const { id } = req.params;
      const foiApagado = await this.entidadeService.apaga(id);
      if (!foiApagado) {
        res.status(404).json({ mesagem: `Registro não encontrado` });
      }
      res.status(200).json({ mesagem: `Registro apagado` });
    } catch (error) {}
  }
}

module.exports = Controller;
