import re
from validate_docbr import CPF

def cpf_invalido(cpf):
  return not CPF().validate(cpf)

def celular_invalido(celular):
  # 99 99999-9999
  modelo = f'[0-9]{2} [0-9]{5}-[0-9]{4}'
  return not re.findall(modelo, celular)

def nome_invalido(nome):
  return not nome.replace(' ', '').isalpha()
