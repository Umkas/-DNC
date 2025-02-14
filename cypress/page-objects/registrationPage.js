class RegistrationPage {
    constructor() {
        this.firstName = 'input[id="firstName"]';
        this.lastName = 'input[id="lastName"]';
        this.email = 'input[id="userEmail"]';

        this.genderMale = '.custom-control.custom-radio.custom-control-inline label[for="gender-radio-1"]';
        this.genderFemale = '.custom-control.custom-radio.custom-control-inline label[for="gender-radio-2"]';
        this.genderOther = '.custom-control.custom-radio.custom-control-inline label[for="gender-radio-3"]';
        this.mobile = 'input[id="userNumber"]';
        this.dateOfBirth = '#dateOfBirthInput';
        this.subjects = 'input[id="subjectsInput"]';
        this.hobbiesSports = 'input[id="hobbies-checkbox-1"]';
        this.hobbiesReading = 'input[id="hobbies-checkbox-2"]';
        this.hobbiesMusic = 'input[id="hobbies-checkbox-3"]';
        
        this.picture = '#uploadPicture';
        this.currentAddress = '#currentAddress';
        this.state = '.css-2b097c-container#state';
        this.city = '.css-14jk2my-container#city';
        this.submit = '.btn.btn-primary#submit';
        this.modalTitle = '.modal-title.h4#example-modal-sizes-title-lg'; 
        this.modalCloseBtn = '#closeLargeModal';
        this.successMessage = '#example-modal-sizes-title-lg';
        this.modalTable = '.table.table-dark.table-striped.table-bordered.table-hover';
      }

    visit() {
        // beforeEach(() => {
        // Cypress.on('uncaught:exception', (err, runnable) => {
        //     return false; // Игнорируем ошибки CORS
        // });
        // cy.intercept('GET', '**/adplus.js', { statusCode: 200, body: '' }).as('blockAds');
        // cy.intercept('GET', '**/cdn-ima.33across.com/**', { statusCode: 200, body: '' }).as('blockThirdParty');

        cy.visit('https://demoqa.com/automation-practice-form'); 
        // });
    };

    fillForm(userData) {
        cy.get(this.firstName).type(userData.firstName);
        cy.get(this.lastName).type(userData.lastName);
        cy.get(this.email).type(userData.email);

        //по-взрослому делаем выбор пола
        if (userData.gender === 'Male') {
            cy.get(this.genderMale).click();
        } else if (userData.gender === 'Female') {
            cy.get(this.genderFemale).click();
        } else {
            cy.get(this.genderOther).click();
        }
       // cy.get(this.genderMale).click(); 


        cy.get(this.mobile).type(userData.mobile);
    
        cy.get(this.dateOfBirth).click(); // Открываем календарь
        // Выбираем месяц (например, Март)
        cy.get('.react-datepicker__month-select').select('March');
        // Выбираем год (например, 2026)
        cy.get('.react-datepicker__year-select').select('2000');
        // Выбираем день (например, 15-е число)
        cy.get('.react-datepicker__day--015').click();


    
        // cy.get(this.subjects).type(userData.subjects);         пропускаем это поле т.к. на нём зависает тест
        // cy.get(this.hobbiesSports).click(); 
        // cy.get(this.picture).selectFile(userData.picturePath);
        // cy.get(this.currentAddress).type(userData.currentAddress);
        // cy.get(this.state).click().contains(userData.state).click();
        // cy.get(this.city).click().contains(userData.city).click();
    }


    fillSubjectField(userData){
        cy.get(this.subjects).type(userData.subjects);
    };


    submitForm(){
        cy.get(this.submit).should('be.visible').click();
    }

    verifySuccessMessage(expectedMessage) {
        cy.get(this.successMessage).should('be.visible').should('have.text', expectedMessage);
    }

    verifyInputedData(userData){
        cy.get(this.modalTable).within(() => {
            cy.contains('td', 'Student Name').next().should('have.text', userData.firstName+' '+userData.lastName);
            cy.contains('td', 'Email').next().should('have.text', userData.email);      
            cy.contains('td', 'Mobile').next().should('have.text', userData.mobile);
            cy.contains('td', 'Gender').next().should('have.text', userData.gender);
            cy.contains('td', 'Date of Birth').next().should('have.text', '15 March,2000');
          });
    };

    verifySubjectsCleared(){
        cy.get(this.subjects).should('have.value', '');
    };

    closeModal(){
        cy.get(this.modalCloseBtn).scrollIntoView().click({ force: true });
    };
}

export default new RegistrationPage();