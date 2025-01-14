from django.shortcuts import render
from django.http import HttpResponse

def index(req):
    return render(req, 'galeria/index.html')

def imagem(req):
    return render(req, 'galeria/imagem.html')