# Prova de Conceito
# Sistema de Registro de Transcrição de Voz para Operação

PoC desenvolvida pra disciplina Projeto Integrador 3 do curso Engenharia Elétrica. Documento detalhando a motivação e o desenvolvimento do sistema pode ser encontrado nesse [documento](https://github.com/manasomali/poc-transcritor-pi3/blob/master/documento.pdf).

Sistema desenvolvido com [AnguarJs](https://angularjs.org/) no formato MVC.

# Setup

Para reproduzir o sistema localmente, inicia-se clonando o repositório,

```
git clone https://github.com/manasomali/poc-transcritor-pi3.git
```

Então configurar um web server (mais simples [web-server-for-chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)).

Finalmente, configurar o banco de dados SQL e ajustar a coneção por meio do arquivo [conect.php](https://github.com/manasomali/poc-transcritor-pi3/blob/master/app/php/conect.php).

O banco de dados deve possir as tabelas com os seguintes campos:
- tb_usuarios
  - id
  - nome
  - sobrenome
  - usuario
  - email
  - senha
  - instituicao
  - cargo
  - setor
  - regiao
- tb_transcricoes
  - id
  - assunto
  - eqp
  - local
  - operador
  - datahorainicial
  - datahorafinal
  - horainformada
  - agente
  - cortecarga
  - sgi
  - texto
  - centro

# Imagens

![Screenshot](https://github.com/manasomali/poc-transcritor-pi3/blob/master/app/imgs/home.png)
![Screenshot](https://github.com/manasomali/poc-transcritor-pi3/blob/master/app/imgs/tr.png)
![Screenshot](https://github.com/manasomali/poc-transcritor-pi3/blob/master/app/imgs/pos.png)
