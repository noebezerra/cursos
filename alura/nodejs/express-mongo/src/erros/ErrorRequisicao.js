import ErrorBase from './ErrorBase.js';

class ErrorRequisicao extends ErrorBase {
  constructor(message = 'Um ou mais dados fornecidos estão incorretos!') {
    super(message, 400);
  }
}

export default ErrorRequisicao;
