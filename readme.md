# Cursos

Aprendizado do dia a dia

# Clonando uma pasta do repositório

Crie uma pasta e inicie o Git

```bash
$ mkdir <nome da pasta>
$ cd <nome da pasta>
$ git init
```

Insira o repositório

```bash
$ git remote add -f origin https://github.com/noebezerra/cursos.git
```

Ative o recurso de verificação de árvore

```bash
$ git config core.sparseCheckout true
```

Informe qual subpasta deseja clonar

```bash
$ git sparse-checkout set "origamid/portfolio"
$ git pull origin main
```
