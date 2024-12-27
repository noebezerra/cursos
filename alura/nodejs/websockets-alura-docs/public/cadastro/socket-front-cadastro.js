const socket = io();

function emitirCadastrarUsuario(dados) {
  socket.emit('cadastrar_usuario', dados);
}

socket.on('cadastro_sucesso', () => alert('Casdastro realizado com sucesso'));
socket.on('cadastro_erro', () => alert('Erro ao realizar cadastro'));
socket.on('usuario_ja_existe', () => alert('Usuário já existe'));

export { emitirCadastrarUsuario };
