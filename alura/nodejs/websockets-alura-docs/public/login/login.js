import { emitirAutenticarUsuario } from './socket-front-login.js';

const form = document.getElementById('form-login');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const usuario = document.getElementById('input-usuario').value;
  const senha = document.getElementById('input-senha').value;
  emitirAutenticarUsuario({ usuario, senha });
});
