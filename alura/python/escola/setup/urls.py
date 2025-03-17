from django.contrib import admin
from django.urls import path, include
from escola.views import EstudantesViewSet, CursosViewSet, MatriculasViewSet, ListaMatriculasEstudante, ListaMatriculasCurso
from rest_framework import routers
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Documentação",
        default_version='v1',
        description="Documentação da API Escola",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contac@example.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
)

router = routers.DefaultRouter()
router.register('estudantes', EstudantesViewSet, basename='Estudantes')
router.register('cursos', CursosViewSet, basename='Cursos')
router.register('matriculas', MatriculasViewSet, basename='Matriculas')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('estudante/<int:pk>/matriculas/', ListaMatriculasEstudante.as_view()),
    path('curso/<int:pk>/matriculas/', ListaMatriculasCurso.as_view()),
    path('doc/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

