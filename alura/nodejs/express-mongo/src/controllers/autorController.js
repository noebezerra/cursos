import { autor } from '../models/Autor.js';

class AutorController {
  static async listaAutores(req, res) {
    try {
      const result = await autor.find({});
      res.status(200).json(result);
    } catch (error) {
      res
        .status(500)
        .json({ message: `Falha ao listar autores: ${error.message}` });
    }
  }

  static async listaAutoresPorId(req, res) {
    try {
      const id = req.params.id;
      const result = await autor.findById(id);
      res.status(200).json(result);
    } catch (error) {
      res
        .status(500)
        .json({ message: `Falha ao listar autores: ${error.message}` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Autor atualizado!' });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Falha ao listar autores: ${error.message}` });
    }
  }

  static async criarAutor(req, res) {
    try {
      const result = await autor.create(req.body);
      res
        .status(201)
        .json({ message: `Autor criado com sucesso!`, autor: result });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Falha ao criar autor: ${error.message}` });
    }
  }

  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      const result = await autor.findByIdAndDelete(id);
      res
        .status(200)
        .json({ message: `Autor excluído com sucesso!`, autor: result });
    } catch (error) {
      res.status(500).json({ message: `Falha na exclusão: ${error.message}` });
    }
  }
}

export default AutorController;
