Criando ambiente virtual
python -m venv nome_ambiente_virtual

Ativando o ambiente virtual
source venv/bin/activate
Desativar o ambiente virtual
deactivate

Install
pip install django

Dependências
pip freeze
pip freeze > requirements.txt

Instalando dependências
pip install -r requirements.txt

Criando projeto
django-admin startproject setup .

Iniciar servidor
python manager.py runserver

Criando um app
python manager.py startapp nome_app

Migrations
Criar novas migrações com base nas alterações dos modelos
python manager.py makemigrations
Sicronizar o estado do banco de dados com o conjunto atual de modelos e migrações
python manager.py migrate

Shell
Acessar o shell
python manager.py shell
Sair do shell
exit()
