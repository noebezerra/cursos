import Error404 from '../erros/Error404.js';
import { autor } from '../models/index.js';

class AutorController {
  static async listaAutores(req, res, next) {
    try {
      const result = autor.find();
      req.result = result;
      next();
    } catch (error) {
      next(error);
    }
  }

  static async listaAutoresPorId(req, res, next) {
    try {
      const id = req.params.id;
      const result = await autor.findById(id);
      if (result !== null) {
        res.status(200).json(result);
      } else {
        next(new Error404('Id do Autor não localizado.'));
      }
    } catch (error) {
      next(error);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      const result = await autor.findByIdAndUpdate(id, req.body);
      if (!result) {
        next(new Error404('Id do Autor não localizado.'));
      } else {
        res.status(200).json({ message: 'Autor atualizado!' });
      }
    } catch (error) {
      next(error);
    }
  }

  static async criarAutor(req, res, next) {
    try {
      const result = await autor.create(req.body);
      res
        .status(201)
        .json({ message: `Autor criado com sucesso!`, autor: result });
    } catch (error) {
      next(error);
    }
  }

  static async deletarAutor(req, res, next) {
    try {
      const id = req.params.id;
      const result = await autor.findByIdAndDelete(id);
      if (!result) {
        next(new Error404('Id do Autor não localizado.'));
      } else {
        res
          .status(200)
          .json({ message: `Autor excluído com sucesso!`, autor: result });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default AutorController;
