import {
  emitTexto,
  selecionarDocumento,
  emitirExcluirDocumento,
} from './socket-front-documento.js';

const params = new URLSearchParams(window.location.search);
const nomeDocumento = params.get('nome');
const title = document.getElementById('titulo-documento');
const btnExcluir = document.getElementById('excluir-documento');

title.textContent = nomeDocumento || 'Documento sem título';
selecionarDocumento(nomeDocumento);

const textArea = document.getElementById('editor-texto');
textArea.addEventListener('keyup', () => {
  emitTexto({ texto: textArea.value, nomeDocumento });
});

function atualizaTexto(texto) {
  textArea.value = texto;
}

btnExcluir.addEventListener('click', () => {
  emitirExcluirDocumento(nomeDocumento);
});

function alertarERedirecionar(nome) {
  if (nome === nomeDocumento) {
    alert(`O documento ${nome} foi excluido`);
    window.location.href = '/';
  }
}

export { atualizaTexto, alertarERedirecionar };
