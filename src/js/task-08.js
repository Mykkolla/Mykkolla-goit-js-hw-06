const mainForm = document.querySelector('.login-form');



mainForm.addEventListener('submit', OnFormsub);


function OnFormsub(elemen) {
    elemen.preventDefault();
    let NewObj = {};
    const formElements = elemen.currentTarget.elements;
// console.log(formElements);
    const formElementsemail = formElements.email.value;
    const formElementspassword = formElements.password.value;
    
    if (formElementsemail === '' && formElementspassword === '') {
        alert('Всі поля повинні бути заповнені');
    }
    else {
        NewObj[formElements.email.name] = formElementsemail;
        NewObj[formElements.password.name] = formElementspassword;
        
        console.log(NewObj);
    }

}




    