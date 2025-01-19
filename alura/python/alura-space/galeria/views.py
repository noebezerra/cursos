from django.shortcuts import get_object_or_404, render
from galeria.models import Fotografia

def index(req):
    fotografias = Fotografia.objects.order_by('-data_fotografia').filter(publicada=True)
    return render(req, 'galeria/index.html', {'cards': fotografias})

def imagem(req, foto_id):
    fotografia = get_object_or_404(Fotografia, pk=foto_id)
    return render(req, 'galeria/imagem.html', {'fotografia': fotografia})

def buscar(req):
    fotografias = Fotografia.objects.filter(publicada=True)
    if 'buscar' in req.GET:
        nome_a_buscar = req.GET['buscar']
        if nome_a_buscar:
            fotografias = fotografias.filter(nome__icontains=nome_a_buscar)

    return render(req, 'galeria/buscar.html', {'cards': fotografias})