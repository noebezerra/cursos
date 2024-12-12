import Error404 from '../erros/Error404.js';

function error404(req, res, next) {
  const error = new Error404();
  next(error);
}

export default error404;
