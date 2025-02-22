#utf-8
#language: pt


Funcionalidade: Acesso ao site

Cenário: Realizar login com dados válidos
  Dado que eu acessei a página de login
  Quando eu preencho o campo "username" 
  E eu preencho o campo "password" 
  E eu clico no botão "Sign in"
  Então a modal de login fecha
