import ErrorRequisicao from '../erros/ErrorRequisicao.js';

async function paginacao(req, res, next) {
  try {
    let { pagina = 1, limite = 5, ordenacao = '_id:-1' } = req.query;
    let [campoOrdenacao, ordem] = ordenacao.split(':');

    pagina = parseInt(pagina);
    limite = parseInt(limite);
    ordem = ordem ? parseInt(ordem) : -1;

    if (pagina > 0 && limite > 0) {
      const result = await req.result
        .find({})
        .sort({ [campoOrdenacao]: ordem })
        .skip((pagina - 1) * limite)
        .limit(limite)
        // .populate('autor')
        .exec();
      res.status(200).json(result);
    } else {
      next(new ErrorRequisicao());
    }
  } catch (error) {
    next(error);
  }
}

export default paginacao;
