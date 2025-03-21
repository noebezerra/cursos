from django.contrib import admin
from apps.galeria.models import Fotografia

class ListandoFotografias(admin.ModelAdmin):
    list_display = ['id', 'nome', 'legenda', 'categoria', 'publicada', 'usuario']
    list_display_links = ['id', 'nome']
    search_fields = ['id', 'nome', 'legenda', 'categoria']
    list_filter = ['categoria', 'publicada', 'usuario']
    list_editable = ['publicada']
    list_per_page = 10
    # fields = ['nome', 'legenda']

admin.site.register(Fotografia, ListandoFotografias)
