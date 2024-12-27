import 'dotenv/config';
import registraEventosInicio from './registraEventos/inicio.js';
import registraEventosDocumento from './registraEventos/documeto.js';
import registrarEventosCadastro from './registraEventos/cadastro.js';
import registrarEventosLogin from './registraEventos/login.js';
import io from './server.js';
import autorizarUsuario from './middlewares/autorizarUsuario.js';

const nspUsuarios = io.of('/usuarios');

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on('connection', (socket) => {
  registraEventosInicio(socket, nspUsuarios);
  registraEventosDocumento(socket, nspUsuarios);
});

io.on('connection', (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
