import livro from '../models/Livro.js';
import { autor } from '../models/Autor.js';

class LivroController {
  static async listarLivros(req, res) {
    try {
      // const result = await livro.find({});
      const result = await livro.find({}).populate('autor').exec();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: `Falha na busca: ${error.message}` });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const result = await livro.findById(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: `Falha na busca: ${error.message}` });
    }
  }

  static async listarLivrosPorEditora(req, res) {
    try {
      const editora = req.query.editora;
      const result = await livro.find({ editora });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: `Falha na busca: ${error.message}` });
    }
  }

  static async cadastrarLivro(req, res) {
    const dados = req.body;
    try {
      // const resautor = await autor.findById(dados.autor);
      // const reqlivro = { ...dados, autor: { ...resautor._doc } };
      // const result = await livro.create(reqlivro);
      const result = await livro.create(req.body);
      res.status(201).json({ message: 'Criado com sucesso!', livro: result });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Falha ao criar livro: ${error.message}` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Livro atualizado!' });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Falha na atualização: ${error.message}` });
    }
  }

  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: 'Livro excluído com sucesso!' });
    } catch (error) {
      res.status(500).json({ message: `Falha na exclusão: ${error.message}` });
    }
  }
}

export default LivroController;
