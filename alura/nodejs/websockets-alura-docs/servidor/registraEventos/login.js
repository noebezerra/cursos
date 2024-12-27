import { encontrarUsuario } from '../db/usuariosDb.js';
import autenticarUsuario from '../utils/autenticarUsuario.js';
import gerarJwt from '../utils/gerarJwt.js';

function registrarEventosLogin(socket, io) {
  socket.on('autenticar_usuario', async ({ usuario, senha }) => {
    const is_usuario = await encontrarUsuario(usuario);
    if (is_usuario) {
      const autenticado = autenticarUsuario(senha, is_usuario);
      if (autenticado) {
        const tokenJwt = gerarJwt({ usuario });
        socket.emit('autenticacao_sucesso', tokenJwt);
      } else {
        socket.emit('autenticacao_erro');
      }
    } else {
      socket.emit('usuario_nao_encontrado');
    }
  });
}

export default registrarEventosLogin;
