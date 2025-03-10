import { MongoClient } from 'mongodb';

const client = new MongoClient(
  'mongodb+srv://noebezerramongodb:ypoB8tBMW2tA3NIc@cluster0.znzo6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
);

let documentosColecao;
let usuariosColecao;

try {
  await client.connect();
  const db = client.db('alura-websockets');
  documentosColecao = db.collection('documentos');
  usuariosColecao = db.collection('usuarios');
  console.log('conectado');
} catch (error) {
  console.log(error);
}

export { documentosColecao, usuariosColecao };
