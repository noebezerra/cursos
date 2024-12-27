const conexoesDocumentos = [];

function adicionarConexao(conexao) {
  conexoesDocumentos.push(conexao);
}

function obterUsuariosDocumento(documento) {
  return conexoesDocumentos
    .filter((o) => o.nomeDocumento === documento)
    .map((m) => m.nomeUsuario);
}

function removerConexao(nomeDocumento, nomeUsuario) {
  const indice = conexoesDocumentos.findIndex(
    (o) => o.nomeDocumento === nomeDocumento && o.nomeUsuario === nomeUsuario
  );
  if (indice !== -1) {
    conexoesDocumentos.splice(indice, 1);
  }
}

function encontrarConexao(nomeDocumento, nomeUsuario) {
  return conexoesDocumentos.find(
    (o) => o.nomeDocumento === nomeDocumento && o.nomeUsuario === nomeUsuario
  );
}

export {
  adicionarConexao,
  obterUsuariosDocumento,
  removerConexao,
  encontrarConexao,
};
