import { obterCookie } from '../utils/cookies.js';
import {
  alertarERedirecionar,
  atualizarInterfaceUsuarios,
  atualizaTexto,
  tratarAutorizacaoSucesso,
} from './documento.js';

const socket = io('/usuarios', {
  auth: {
    token: obterCookie('tokenJwt'),
  },
});

socket.on('autorizacao_sucesso', tratarAutorizacaoSucesso);

socket.on('connect_error', (error) => {
  alert(error);
  window.location.href = '/login';
});

function selecionarDocumento(dados) {
  socket.emit('selecionar_documento', dados, (texto) => {
    atualizaTexto(texto);
  });
}

socket.on('usuario_ja_no_documento', () => {
  alert('Documento já aberto em outra aba');
  window.location.href = '/';
});

socket.on('usuarios_no_documento', atualizarInterfaceUsuarios);

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
