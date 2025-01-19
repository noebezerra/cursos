from django.contrib import admin
from galeria.models import Fotografia

class ListandoFotografias(admin.ModelAdmin):
    list_display = ['id', 'nome', 'legenda', 'categoria', 'publicada']
    list_display_links = ['id', 'nome']
    search_fields = ['id', 'nome', 'legenda', 'categoria']
    list_filter = ['categoria', 'publicada']
    list_editable = ['publicada']
    list_per_page = 10
    # fields = ['nome', 'legenda']

admin.site.register(Fotografia, ListandoFotografias)
