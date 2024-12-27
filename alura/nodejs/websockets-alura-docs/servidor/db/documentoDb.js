import { documentosColecao } from './dbconnect.js';

function obterDocumentos() {
  return documentosColecao.find().toArray();
}

function adicionarDocumento(nome) {
  return documentosColecao.insertOne({ nome, texto: '' });
}

function encontrarDocumento(nome) {
  return documentosColecao.findOne({ nome });
}

function atualizaDocumento(nomeDocumento, texto) {
  const atualizacao = documentosColecao.updateOne(
    { nome: nomeDocumento },
    { $set: { texto } }
  );
  return atualizacao;
}

function excluirDocumento(nome) {
  return documentosColecao.deleteOne({ nome });
}

export {
  encontrarDocumento,
  atualizaDocumento,
  obterDocumentos,
  adicionarDocumento,
  excluirDocumento,
};
