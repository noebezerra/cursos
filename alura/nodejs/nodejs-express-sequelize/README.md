# Sobre

Formação Node.js da Alura: [ORM com Node.js: desenvolvendo uma API com Sequelize e SQLite](https://cursos.alura.com.br/formacao-node-js-express)

# Início

Instale as dependencias

```bash
npm ci
```

Execute a API

```bash
npm run dev
```

# Comandos usados

Inicia um projeto com Sequelize

```bash
npx sequelize-init
```

Criando um `model`

```bash
npx sequelize-cli model:generate --name Pessoa --attributes nome:setring,cpf:string,ativo:boolean,role:string
```

Executando `migrate`

```bash
npx sequelize-cli db:migrate
```

Criando um `seed`

```bash
npx sequelize-cli seed:generate --name demo-pessoa
```

Executando `seed`

```bash
npx sequelize-cli db:seed:all
```

```
npx sequelize-cli db:seed --seed nomedoseed.js
```
