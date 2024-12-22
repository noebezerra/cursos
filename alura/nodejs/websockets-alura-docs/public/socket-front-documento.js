import { atualizaTexto } from './documento.js';
const socket = io();

function emitTexto(texto) {
  socket.emit('texto_editor', texto);
}

socket.on('texto_editor_clientes', (texto) => {
  atualizaTexto(texto);
});

export { emitTexto };
