const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080, // Corrigido para viewportHeight (antes estava duplicando 'viewportWidth')
    watchForFileChanges: false, // Corrigido de 'whatchForfileChanges' para 'watchForFileChanges'
    specPattern: 'cypress/e2e/**/*.feature', // Corrigido para reconhecer os arquivos .feature
    baseUrl: 'https://www.advantageonlineshopping.com/#/',

    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
    },
  },
});
