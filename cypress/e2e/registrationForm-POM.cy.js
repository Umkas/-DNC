describe('Registration Form', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false; // Игнорируем ошибки CORS
        });
        cy.intercept('GET', '**/adplus.js', { statusCode: 200, body: '' }).as('blockAds');
        cy.intercept('GET', '**/cdn-ima.33across.com/**', { statusCode: 200, body: '' }).as('blockThirdParty');

        cy.visit('https://demoqa.com/automation-practice-form'); 
      });
  
    it('Test-case2  Succesful registration using only a valid data', () => {
   
      
    });
  });