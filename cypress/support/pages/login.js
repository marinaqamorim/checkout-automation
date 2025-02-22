/// <reference types="cypress" />

Cypress.Commands.add('acessarHomePage', () => {
  cy.visit('https://www.advantageonlineshopping.com/#/');  
})

Cypress.Commands.add('clicarItemLogin', () => {
  cy.get('#menuUser').click();  
})

