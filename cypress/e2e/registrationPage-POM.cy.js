import RegistrationPage from '../page-objects/registrationPage.js';

describe('Registration Form', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Игнорируем ошибки CORS
    });
    cy.intercept('GET', '**/adplus.js', { statusCode: 200, body: '' }).as('blockAds');
    cy.intercept('GET', '**/cdn-ima.33across.com/**', { statusCode: 200, body: '' }).as('blockThirdParty');
    RegistrationPage.visit();
  });



  it('Test-case2  Succesful registration using only a valid data', () => {
    const userData = {
      firstName: 'Kapitoshka',
      lastName: 'Petruk',
      email: 'Kapitoshka.Petruk@example.com',
      gender: 'Male',
      mobile: '0123456789',
      birthMonth: 'January',
      birthYear: '2000',
      birthDay: '1',
      subjects: 'Math',
      picturePath: 'D:/QA/pics',
      currentAddress: 'Kyiv, st. Shevchenko, 1',
      state: 'NCR',
      city: 'Delhi',
    };

    RegistrationPage.fillForm(userData);
    RegistrationPage.submitForm();
    RegistrationPage.verifySuccessMessage('Thanks for submitting the form');
    RegistrationPage.verifyInputedData(userData);
    cy.wait(5000);
    RegistrationPage.closeModal();
  });


  it('Test-case11  Text dissappearing from "Subject" field if ficus is lost', () => {
    const userData = {
      firstName: 'Kapitoshka',
      lastName: 'Petruk',
      email: 'Kapitoshka.Petruk@example.com',
      gender: 'Male',
      mobile: '0123456789',
      birthMonth: 'January',
      birthYear: '2000',
      birthDay: '1',
      subjects: 'Math',
      picturePath: 'D:/QA/pics',
      currentAddress: 'Kyiv, st. Shevchenko, 1',
      state: 'NCR',
      city: 'Delhi',
    };

    RegistrationPage.fillSubjectField(userData);
    cy.get(RegistrationPage.currentAddress).click(); // Переводим фокус
    RegistrationPage.verifySubjectsCleared();

  });


});