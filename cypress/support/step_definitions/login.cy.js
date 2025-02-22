import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import '../pages/login'


Given('que eu acessei a página de login', () => {
  cy.acessarHomePage(); 
  cy.clicarItemLogin();
});


When('eu preencho o campo "username"', () => {
  cy.get('input[name="username"]').type('Marinaqamorim'); 
});


And('eu preencho o campo "password"', () => {
  cy.get('input[name="password"]').type('Senha123'); 
});


And('eu clico no botão "Sign in"', () => {
  cy.get('button#sign_in_btn').click(); 
});


Then('a modal de login fecha', () => {
  
  cy.get('.PopUp').should('have.css', 'display', 'none');
});
