# Cursos

# Clonando uma pasta do repositório

$ mkdir <nome da pasta>
$ cd <nome da pasta>
$ git init
$ git config core.sparseCheckout true
$ git sparse-checkout set "origamid/portfolio"
$ git pull origin main