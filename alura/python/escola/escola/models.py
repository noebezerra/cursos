from django.db import models

class Estudante(models.Model):
  nome = models.CharField(max_length=100)
  email = models.EmailField(blank=False, max_length=30)
  cpf = models.CharField(blank=False, max_length=11)
  data_nascimento = models.DateField()
  celular = models.CharField(blank=False, max_length=14)

  def __str__(self):
    return self.nome

class Curso(models.Model):
  NIVEL = [
    ('B', 'Básico'),
    ('I', 'Intermediário'),
    ('A', 'Avançado'),
  ]

  codigo = models.CharField(max_length=10)
  descricao = models.TextField(max_length=100, blank=False)
  nivel = models.CharField(max_length=1, choices=NIVEL, blank=False, null=False, default='B')

  def __str__(self):
    return self.codigo

class Matricula(models.Model):
  PERIODO = [
    ('M', 'Matutino'),
    ('V', 'Vespertino'),
    ('N', 'Noturno'),
  ]

  estudante = models.ForeignKey(Estudante, on_delete=models.CASCADE)
  curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
  periodo = models.CharField(max_length=1, choices=PERIODO, blank=False, null=False, default='M')

  def __str__(self):
    return f'{self.estudante} - {self.curso} - {self.periodo}'

