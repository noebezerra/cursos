import './socket-front-index.js';
import { emitirAdicionarDocumento } from './socket-front-index.js';
import { obterCookie, removerCookie } from './utils/cookies.js';

const tokenJwt = obterCookie('tokenJwt');

const listaDocumentos = document.getElementById('lista-documentos');
const form = document.getElementById('form-adiciona-documento');
const inputDocumento = document.getElementById('input-documento');
const btnLogout = document.getElementById('botao-logout');

btnLogout.addEventListener('click', () => {
  removerCookie('tokenJwt');
  window.location.href = '/login';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  emitirAdicionarDocumento(inputDocumento.value);
  inputDocumento.value = '';
});

function inserirLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML += `
    <a href="/documento?nome=${nomeDocumento}" class="list-group-item list-group-item-action" id="documento-${nomeDocumento}">
      ${nomeDocumento}
    </a>
  `;
}

function removerLinkDocumento(nomeDocumento) {
  const documento = document.getElementById(`documento-${nomeDocumento}`);
  listaDocumentos.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento };
