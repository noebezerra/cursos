import { autor, livro } from '../models/index.js';
// import { autor } from '../models/Autor.js';

class LivroController {
  static async listarLivros(req, res, next) {
    try {
      const result = livro.find();
      req.result = result;
      next();
    } catch (error) {
      next(error);
    }
  }

  static async listarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const result = await livro.findById(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async listarLivrosPorFiltros(req, res, next) {
    try {
      const busca = await processaBusca(req.query);
      if (Object.keys(busca).length) {
        const result = livro.find(busca);
        req.result = result;
        next();
      } else {
        res.status(200).json([]);
      }
    } catch (error) {
      next(error);
    }
  }

  static async cadastrarLivro(req, res, next) {
    // const dados = req.body;
    try {
      // const resautor = await autor.findById(dados.autor);
      // const reqlivro = { ...dados, autor: { ...resautor._doc } };
      // const result = await livro.create(reqlivro);
      const result = await livro.create(req.body);
      res.status(201).json({ message: 'Criado com sucesso!', livro: result });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Livro atualizado!' });
    } catch (error) {
      next(error);
    }
  }

  static async deletarLivro(req, res, next) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: 'Livro excluído com sucesso!' });
    } catch (error) {
      next(error);
    }
  }
}

async function processaBusca(params) {
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = params;
  const busca = {};

  if (titulo) busca.titulo = { $regex: titulo, $options: 'i' };
  if (editora) busca.editora = { $regex: editora, $options: 'i' };

  if (minPaginas || maxPaginas) busca.numeroPaginas = {};
  // $gte - maior ou igual que
  if (minPaginas) busca.numeroPaginas.$gte = minPaginas;
  // $lte - maior ou igual que
  if (minPaginas) busca.numeroPaginas.$lte = maxPaginas;

  if (nomeAutor) {
    const result = await autor.findOne({ nome: nomeAutor });
    if (result) busca.autor = result._id;
  }

  return busca;
}

export default LivroController;
