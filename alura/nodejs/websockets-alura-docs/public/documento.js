import { emitTexto } from './socket-front-documento.js';

const textArea = document.getElementById('editor-texto');
textArea.addEventListener('keyup', () => {
  emitTexto(textArea.value);
});

function atualizaTexto(texto) {
  textArea.value = texto;
}

export { atualizaTexto };
