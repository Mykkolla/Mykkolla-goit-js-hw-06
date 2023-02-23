const imputObject = document.querySelector('#validation-input');


imputObject.addEventListener('blur', lengthImputvalid)

function lengthImputvalid (event)  {
  if(Number(imputObject.dataset.length) === event.currentTarget.value.length) {
    imputObject.classList.add('valid');
    imputObject.classList.remove('invalid');
  }
  else {
    imputObject.classList.add('invalid');
    imputObject.classList.remove('valid');
  }
}

