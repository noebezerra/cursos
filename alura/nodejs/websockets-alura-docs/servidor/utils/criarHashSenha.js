import { randomBytes, scryptSync } from 'crypto';

function criarHashSenha(senha) {
  const salSenha = randomBytes(16).toString('hex');
  const hashSenha = scryptSync(senha, salSenha, 64).toString('hex');
  return { salSenha, hashSenha };
}

export default criarHashSenha;
