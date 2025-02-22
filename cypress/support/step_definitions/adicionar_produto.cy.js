import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import '../pages/adicionar_produto'


Given('que eu acessei a página do produto', () => {
  cy.acessarProduto()
});


When('eu clico no botão "Add to cart"', () => {
    cy.get('button[name="save_to_cart"]').click(); 
  });


Then('o item é adicionado ao carrinho', () => {
    cy.get('.cart.ng-binding').should('contain', '1'); 
  });
