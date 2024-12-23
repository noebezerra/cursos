import { alertarERedirecionar, atualizaTexto } from './documento.js';
const socket = io();

function selecionarDocumento(nome) {
  socket.emit('selecionar_documento', nome, (texto) => {
    atualizaTexto(texto);
  });
}

function emitTexto(dados) {
  socket.emit('texto_editor', dados);
}

socket.on('texto_editor_clientes', (texto) => {
  atualizaTexto(texto);
});

function emitirExcluirDocumento(nome) {
  socket.emit('excluir_documento', nome);
}

socket.on('excluir_documento_sucesso', (nome) => {
  alertarERedirecionar(nome);
});

export { emitTexto, selecionarDocumento, emitirExcluirDocumento };
