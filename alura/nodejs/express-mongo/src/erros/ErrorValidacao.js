import ErrorRequisicao from './ErrorRequisicao.js';

class ErrorValidacao extends ErrorRequisicao {
  constructor(error) {
    const message = Object.values(error.errors)
      .map((e) => e.message)
      .join('; ');

    super(`Erros: ${message}`);
  }
}

export default ErrorValidacao;
