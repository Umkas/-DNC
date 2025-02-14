const { defineConfig } = require('cypress');

module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form', 
    chromeWebSecurity: false, // Отключает защиту Chrome
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
    viewportWidth: 1280,  // Ширина экрана
    viewportHeight: 800,  // Высота экрана
  },
});