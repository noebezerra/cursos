import {
  encontrarDocumento,
  atualizaDocumento,
  excluirDocumento,
} from '../db/documentoDb.js';
import {
  adicionarConexao,
  encontrarConexao,
  obterUsuariosDocumento,
  removerConexao,
} from '../utils/conexoesDocumentos.js';

function registraEventosDocumento(socket, io) {
  socket.on(
    'selecionar_documento',
    async ({ nomeDocumento, nomeUsuario }, callback) => {
      const documento = await encontrarDocumento(nomeDocumento);
      if (documento) {
        const conexaoEncontrada = encontrarConexao(nomeDocumento, nomeUsuario);
        if (!conexaoEncontrada) {
          socket.join(nomeDocumento);
          adicionarConexao({ nomeDocumento, nomeUsuario });
          socket.data = {
            usuarioEntrou: true,
          };
          const usuariosNoDocumento = obterUsuariosDocumento(nomeDocumento);
          io.to(nomeDocumento).emit(
            'usuarios_no_documento',
            usuariosNoDocumento
          );
          callback(documento.texto);
        } else {
          socket.emit('usuario_ja_no_documento');
        }
      }

      socket.on('texto_editor', async ({ texto, nomeDocumento }) => {
        const atualizacao = await atualizaDocumento(nomeDocumento, texto);
        if (atualizacao.modifieldCount) {
          socket.to(nomeDocumento).emit('texto_editor_clientes', texto);
        }
      });

      socket.on('excluir_documento', async (nome) => {
        const resultado = await excluirDocumento(nome);
        if (resultado.deletedCount) {
          io.emit('excluir_documento_sucesso', nome);
        }
      });

      socket.on('disconnect', () => {
        if (socket.data.usuarioEntrou) {
          removerConexao(nomeDocumento, nomeUsuario);
          const usuariosNoDocumento = obterUsuariosDocumento(nomeDocumento);
          io.to(nomeDocumento).emit(
            'usuarios_no_documento',
            usuariosNoDocumento
          );
        }
      });
    }
  );
}

export default registraEventosDocumento;
