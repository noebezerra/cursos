import { definirCookie } from '../utils/cookies.js';

const socket = io();

function emitirAutenticarUsuario(dados) {
  socket.emit('autenticar_usuario', dados);
}

socket.on('autenticacao_sucesso', (tokenJwt) => {
  definirCookie('tokenJwt', tokenJwt);
  window.location = '/';
});
socket.on('autenticacao_erro', () => alert('autenticacao com erro'));
socket.on('usuario_nao_encontrado', () => alert('Usuário não encontrado'));

export { emitirAutenticarUsuario };
