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
   
      // Заполняем поле Name1
      cy.get('input[id="firstName"]').type('Petrik');
      cy.get('input[id="lastName"]').type('Pjatochkin');
      // Заполняем поле email
      cy.get('input[id="userEmail"]').type('test@example.com');
      cy.get('input[id="userNumber"]').type('0123456789');

      // Выбираем гендер (например, Male)
      cy.get('label[for="gender-radio-1"]').click();

      cy.get('#dateOfBirthInput').click(); // Открываем календарь

      // Выбираем месяц (например, Март)
      cy.get('.react-datepicker__month-select').select('March');
      
      // Выбираем год (например, 2026)
      cy.get('.react-datepicker__year-select').select('2000');
      
      // Выбираем день (например, 15-е число)
      cy.get('.react-datepicker__day--015').click();



  
      // Нажимаем кнопку Submit
      cy.get('.btn.btn-primary#submit').click();
  
      // Проверяем, что появился попап с заголовком
      cy.get('.modal-dialog.modal-lg').should('be.visible');
      cy.get('.modal-title.h4#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form');
  
      cy.get('.table.table-dark.table-striped.table-bordered.table-hover').then(($table) => {
        console.log($table.html()); // Выведет HTML содержимое таблицы для проверки
      });

      // Проверяем содержимое HTML-таблицы
      cy.get('.table.table-dark.table-striped.table-bordered.table-hover').within(() => {
        cy.contains('td', 'Student Name').next().should('have.text', 'Petrik Pjatochkin');
        cy.contains('td', 'Email').next().should('have.text', 'test@example.com');      
        cy.contains('td', 'Mobile').next().should('have.text', '0123456789');
        cy.contains('td', 'Gender').next().should('have.text', 'Male');
        cy.contains('td', 'Date of Birth').next().should('have.text', '15 March,2000');
      });

      cy.wait(5000);
      cy.get('#closeLargeModal').scrollIntoView().click({ force: true });
    });
  });
  