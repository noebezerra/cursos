### Ambiente virtual Python

Criando um ambiente virtual

```bash
python -m venv nome_ambiente_virtual
```

Ativando o ambiente

```bash
source venv/bin/activate
```

Desativando o ambiente

```bash
deactivate
```

### Instalação Django

```
pip install django
```

### Dependências

Ver as dependências do projeto

```bash
pip freeze
```

Salvar as dependências em um arquivo `requirements.txt`

```bash
pip freeze > requirements.txt
```

### Instalando dependências

Instalar dependências que estão no arquivo `requirements.txt`

```bash
pip install -r requirements.txt
```

### Criando um projeto

```bash
django-admin startproject setup .
```

### Iniciar servidor

```bash
python manager.py runserver
```

### Criando um app

```bash
python manager.py startapp nome_app
```

### Migrations

Criar novas migrações com base nas alterações dos modelos

```bash
python manager.py makemigrations
```

Sicronizar o estado do banco de dados com o conjunto atual de modelos e migrações

```bash
python manager.py migrate
```

### Shell

Acessar o shell

```bash
python manager.py shell
```

Sair do shell

```bash
exit()
```

# Iniciando o projeto

Faça o clone do projeto e inicie um ambiente

```bash
python -m venv .venv
```

Ative o ambiente

```bash
source .venv/bin/activate
```

Instale as bibliotecas

```bash
pip install -r requirements.txt
```

Faça as migrações

```bash
python manager.py makemigrations
```

```bash
python manager.py migrate
```

Crie um novo super usuario

```bash
python manager.py createsuperuser
```
