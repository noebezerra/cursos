from escola.models import Estudante, Curso, Matricula
from escola.serializers import EstudanteSerializer, CursoSerializer, MatriculaSerializer, ListaMatriculasEstudanteSerializer, ListaMatriculasCursoSerializer, EstudanteSerializerV2
from rest_framework import viewsets, generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.throttling import UserRateThrottle
from escola.throttles import MatriculasAnonRateThrottle

class EstudantesViewSet(viewsets.ModelViewSet):
    """
    CRUD de Estudantes

    ---
    ### Ordenação:
    - **nome**: permite ordenar por nome
    
    ### Filtragem:
    - **nome**: permite buscar por nome
    - **cpf**: permite buscar por cpf

    ### Métodos permitidos:
    - **GET**: Retorna a lista de estudantes.
    - **POST**: Cria um novo estudante.
    - **PUT**: Atualiza um estudante.
    - **DELETE**: Deleta um estudante.

    ### Classe de Serialização:
    - **EstudanteSerializer**: usado para serialização e desserialização de dados.
    - Se a versão da API for 'v2', será usado o EstudanteSerializerV2.
    """
    queryset = Estudante.objects.all().order_by('id')
    # serializer_class = EstudanteSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['nome']
    search_fields = ['nome', 'cpf']
    def get_serializer_class(self):
        if self.request.version == 'v2':
            return EstudanteSerializerV2
        return EstudanteSerializer

class CursosViewSet(viewsets.ModelViewSet):
    """
    CRUD de Cursos

    ---
    ### Ordenação:
    - **nome**: permite ordenar por nome
    
    ### Métodos permitidos:
    - **GET**: Retorna a lista de cursos.
    - **POST**: Cria um novo curso.
    - **PUT**: Atualiza um curso.
    - **DELETE**: Deleta um curso.
    """
    queryset = Curso.objects.all().order_by('id')
    serializer_class = CursoSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    ordering_fields = ['descricao']

class MatriculasViewSet(viewsets.ModelViewSet):
    """
    Lista todas as matrículas

    ---
    ### Métodos permitidos:
    - **GET**: Retorna a lista de matrículas.
    - **POST**: Cria uma nova matrícula.
    """
    queryset = Matricula.objects.all().order_by('id')
    serializer_class = MatriculaSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    ordering_fields = ['estudante']
    throttle_classes = [UserRateThrottle, MatriculasAnonRateThrottle]
    http_method_names = ['get', 'post']

class ListaMatriculasEstudante(generics.ListAPIView):
    """
    Lista todas as matrículas por id do estudante

    ---
    ### Parâmetros:
    - id (int): id do estudante
    """
    def get_queryset(self):
        if getattr(self, 'swagger_fake_view', False):
            return Matricula.objects.none()
        queryset = Matricula.objects.filter(estudante_id=self.kwargs['pk']).order_by('id')
        return queryset
    
    serializer_class = ListaMatriculasEstudanteSerializer

class ListaMatriculasCurso(generics.ListAPIView):
    """
    Lista todas as matrículas por id do curso

    ---
    ### Parâmetros:
    - id (int): id do curso
    """
    def get_queryset(self):
        if getattr(self, 'swagger_fake_view', False):
            return Matricula.objects.none()
        queryset = Matricula.objects.filter(curso_id=self.kwargs['pk']).order_by('id')
        return queryset

    serializer_class = ListaMatriculasCursoSerializer
