# checkout-automation

Este projeto tem como objetivo automatizar cenários de testes de um site de e-comerce usando o Cypress.

Requisitos
Node.js: versão 14 ou superior.
NPM (ou Yarn) para gerenciar dependências.

Instalação
1. Clonar o repositório
Clone o repositório para sua máquina local:
bash
git clone git@github.com:marinaqamorim/checkout-automation.git

2. Instalar dependências
Navegue até o diretório do projeto e instale as dependências:

bash
cd checkout-automation
npm install


Explicação dos Diretórios:
cypress/fixtures: Contém dados fictícios utilizados nos testes.
cypress/support: Contém comandos e configurações globais que podem ser utilizados em todos os testes.


Para rodar os testes em modo headless (sem a interface gráfica), execute:
bash
npx cypress run
