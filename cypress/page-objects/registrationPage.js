import locator from "../locators/registrationPageLocators";

class RegistrationPage {
    constructor() {
        this.firstName = locator.firstName; 
        this.lastName = locator.lastName;
        this.email = locator.email;

        this.genderMale = locator.genderMale;
        this.genderFemale = locator.genderFemale;
        this.genderOther = locator.genderOther;
        this.mobile = locator.mobile;
        this.dateOfBirth = locator.dateOfBirthInput;
        this.subjects = locator.subjects;
        this.hobbiesSports = locator.hobbiesSports;
        this.hobbiesReading = locator.hobbiesReading;
        this.hobbiesMusic = locator.hobbiesMusic;
        
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
        cy.visit('https://demoqa.com/automation-practice-form'); 
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

        cy.get('.react-datepicker__month-select').select('March');

        cy.get('.react-datepicker__year-select').select('2000');
   
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