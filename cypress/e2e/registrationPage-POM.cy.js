import RegistrationPage from '../page-objects/registrationPage.js'; 

describe('Registration Form', () => {
  const userData = {
    firstName: 'Kapitoshka',
    lastName: 'Petruk',
    email: 'Kapitoshka.Petruk@example.com',
    mobile: '1234567890',
    birthMonth: 'January',
    birthYear: '2000',
    birthDay: '1',
    subjects: 'Math',
    picturePath: 'D:/QA/pics',
    currentAddress: 'Moscow, st. Lenina, 1',
    state: 'NCR',
    city: 'Delhi',
  };
    // beforeEach(() => {
    //     Cypress.on('uncaught:exception', (err, runnable) => {
    //       return false; // Игнорируем ошибки CORS
    //     });
    //     cy.intercept('GET', '**/adplus.js', { statusCode: 200, body: '' }).as('blockAds');
    //     cy.intercept('GET', '**/cdn-ima.33across.com/**', { statusCode: 200, body: '' }).as('blockThirdParty');

    //     cy.visit('https://demoqa.com/automation-practice-form'); 
    //   });
  
    RegistrationPage.visit();

    it('Test-case2  Succesful registration using only a valid data', () => {
   
      RegistrationPage.fillForm(userData);
      RegistrationPage.submit();
      RegistrationPage.verifySuccessMessage();
      RegistrationPage.verifyInputedData(userData);
      cy.wait(5000);
      RegistrationPage.closeModal();

      // cy.get('#closeLargeModal').scrollIntoView().click({ force: true });
    });
  });