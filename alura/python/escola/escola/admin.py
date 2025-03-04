from django.contrib import admin
from .models import Estudante, Curso, Matricula

class Estudantes(admin.ModelAdmin):
  list_display = ('id', 'nome', 'email', 'cpf', 'data_nascimento', 'celular')
  list_display_links = ('id','nome',)
  search_fields = ('nome',)
  list_per_page = 20

admin.site.register(Estudante, Estudantes)

class Cursos(admin.ModelAdmin):
    list_display = ('id', 'codigo', 'descricao', 'nivel')
    list_display_links = ('id', 'codigo',)
    search_fields = ('codigo',)
    list_per_page = 20

admin.site.register(Curso, Cursos)

class Matriculas(admin.ModelAdmin):
    list_display = ('id', 'estudante', 'curso', 'periodo')
    list_display_links = ('id', 'estudante', 'curso',)
    search_fields = ('estudante', 'curso',)
    list_per_page = 20

admin.site.register(Matricula, Matriculas)
