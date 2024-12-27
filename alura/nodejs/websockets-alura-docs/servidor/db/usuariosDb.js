import criarHashSenha from '../utils/criarHashSenha.js';
import { usuariosColecao } from './dbconnect.js';

function cadatrarUsuario({ usuario, senha }) {
  const { hashSenha, salSenha } = criarHashSenha(senha);
  return usuariosColecao.insertOne({ usuario, hashSenha, salSenha });
}

function encontrarUsuario(usuario) {
  return usuariosColecao.findOne({ usuario });
}

export { cadatrarUsuario, encontrarUsuario };
