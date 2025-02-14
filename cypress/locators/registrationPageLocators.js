const locator = {
    firstName: 'input[id="firstName"]',
    lastName: 'input[id="lastName"]',
    email: 'input[id="userEmail"]',
    genderMale: '.custom-control.custom-radio.custom-control-inline label[for="gender-radio-1"]',
    genderFemale: '.custom-control.custom-radio.custom-control-inline label[for="gender-radio-2"]',
    genderOther: '.custom-control.custom-radio.custom-control-inline label[for="gender-radio-3"]',
    mobile: 'input[id="userNumber"]',
    dateOfBirthInput: '#dateOfBirthInput', 
    dateOfBirthCalendar: '.react-datepicker',     //
    subjects: 'input[id="subjectsInput"]',
    hobbiesSports: 'input[id="hobbies-checkbox-1"]',
    hobbiesReading: 'input[id="hobbies-checkbox-2"]',
    hobbiesMusic: 'input[id="hobbies-checkbox-3"]',
    picture: '#uploadPicture', //не буду використовувати бо ще не знаю чи можливо буде закрити діалогове вікно системи, наче не можна
    currentAddress: '#currentAddress',
    state: '.css-2b097c-container#state',
    city: '.css-14jk2my-container#city',
    submit: '.btn.btn-primary#submit',
    title: '.modal-title.h4#example-modal-sizes-title-lg',
    close: '#closeLargeModal'
  };

  export default locator;