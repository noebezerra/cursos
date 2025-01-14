Criando ambiente virtual
python -m venv nome_ambiente_virtual

Ativando o ambiente virtual
source venv/bin/activate
Desativar o ambiente virtual
desactivate

Install
pip install django

Dependências
pip freeze
pip freeze > requirements.txt

Criando projeto
django-admin startproject setup .

Iniciar servidor
python manager.py runserver

Criando um app
python manager.py startapp nome_app
