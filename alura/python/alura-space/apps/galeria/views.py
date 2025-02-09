from django.shortcuts import get_object_or_404, render, redirect
from apps.galeria.models import Fotografia
from django.contrib import messages
from apps.galeria.forms import FotografiaForms
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse, HttpResponse

def index(request):
    if not request.user.is_authenticated:
        messages.error(request, 'Usuário não autenticado')
        return redirect('login')
    
    fotografias = Fotografia.objects.order_by('-data_fotografia').filter(publicada=True)
    return render(request, 'galeria/index.html', {'cards': fotografias})

def imagem(request, foto_id):
    fotografia = get_object_or_404(Fotografia, pk=foto_id)
    return render(request, 'galeria/imagem.html', {'fotografia': fotografia})

def buscar(request):
    if not request.user.is_authenticated:
        messages.error(request, 'Usuário não autenticado')
        return redirect('login')
    
    fotografias = Fotografia.objects.filter(publicada=True)
    if 'buscar' in request.GET:
        nome_a_buscar = request.GET['buscar']
        if nome_a_buscar:
            fotografias = fotografias.filter(nome__icontains=nome_a_buscar)

    return render(request, 'galeria/index.html', {'cards': fotografias})

@login_required
@require_http_methods(['GET', 'POST'])
def nova_imagem(request):
    form = FotografiaForms()
    if request.method == 'POST':
        form = FotografiaForms(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Fotografia cadastrada!')
            return redirect('index')
    
    return render(request, 'galeria/nova_imagem.html', {'form': form})

@login_required
@require_http_methods(['GET', 'POST'])
def editar_imagem(request, foto_id):
    try:
        fotografia = Fotografia.objects.get(id=foto_id)
        form = FotografiaForms(instance=fotografia)
        if request.method == 'POST':
            form = FotografiaForms(request.POST, request.FILES, instance=fotografia)
            if form.is_valid():
                form.save()
                messages.success(request, 'Fotografia editada com sucesso!')
                return redirect('index')
            
        return render(request, 'galeria/editar-imagem.html', {'form': form, 'foto_id': foto_id})
    except:
        messages.error(request, 'Houve um erro ao tentar editar a imagem')
        return redirect('index')

@login_required
def deletar_imagem(request, foto_id):
    try:
        fotografia = Fotografia.objects.get(id=foto_id)
        fotografia.delete()
        messages.success(request, 'Fotografia apagada com sucesso!')
    except Exception as erro:
        messages.error(request, 'Houve um erro ao tentar apagar a imagem')
    finally:
        return redirect('index')
    
def filtro(request, categoria):
    fotografias = Fotografia.objects.filter(publicada=True, categoria=categoria)
    return render(request, 'galeria/index.html', {'cards': fotografias})
