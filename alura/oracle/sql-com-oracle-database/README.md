#### Formação Oracle

Formação Oracle da Alura

#### Install

Iniciando o container com o Oracle XE

```bash
docker compose up -d
```

Para se conectar com o [Dbeaver](https://dbeaver.com/) use os seguintes parametros

Host: `localhost` ou `127.0.0.1`\
Database: `xe`\
Nome de usuário: `system`\
Senha: `root`

Acessando o container

```bash
docker exec -it <container> /bin/bash
```

#### Adicional

Para visualizar o esquema `SYSTEM`, acesse as configurações do Dbaver e na guia Geral terá `Schemas/Usuários`, clicando nela poderá incluir o `SYSTEM`

#### Scripts

Para executar os scripts, acesse o container e entre no Oracle SQL Plus com `sqlplus` e execute os comandos dos scripts abaixo:

```bash
@/opt/oracle/scripts/Criacao_Esquema.sql
@/opt/oracle/scripts/Carga_Tabelas_Cadastrais.sql
@/opt/oracle/scripts/Carga_Notas.sql
@/opt/oracle/scripts/Carga_Items_Notas.sql
@/opt/oracle/scripts/NovoCliente.sql
```

Digite `commit` e depois barra `/` e por fim `ENTER`
