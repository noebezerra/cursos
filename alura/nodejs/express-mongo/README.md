# Sobre

Formação Node.js da Alura: [Node.js: criando uma API Rest com Express e MongoDB](https://cursos.alura.com.br/course/node-js-api-rest-express-mongodb)

# MongoDB

Necessário criar um banco de dados no [mongodb.com](https://www.mongodb.com/pt-br)

> [!TIP]
> Caso ocorra erro ao tentar se conectar no banco de dados, verifique se seu IP está autorizado no _Network Acess_ em [mongodb.com](https://www.mongodb.com/pt-br)

# Início

Após criar o banco de dados MongoDB insira as variáveis de ambiente no arquivo `.env` com base em `.env-example`

Instale as dependencias

```bash
npm install
```

Execute a API

```bash
npm run dev
```

Se tudo ocorrer bem as mensagens: _on_ e _Conexão realizada com sucesso!_ serão visíveis no terminal

# Rotas

> Livros

GET livros  
GET livros/:id  
GET livros/busca?editora=?  
POST livros  
PUT livros  
DELETE livros

> Autores

GET autores  
GET autores/:id  
GET autores/busca?editora=?  
POST autores  
PUT autores  
DELETE autores
