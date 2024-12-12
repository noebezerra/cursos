/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import ErrorBase from '../erros/ErrorBase.js';
import ErrorRequisicao from '../erros/ErrorRequisicao.js';
import ErrorValidacao from '../erros/ErrorValidacao.js';

function errors(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    new ErrorRequisicao().restosta(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ErrorValidacao(error).restosta(res);
  } else if (error instanceof ErrorBase) {
    error.restosta(res);
  } else {
    new ErrorBase().restosta(res);
  }
}

export default errors;
