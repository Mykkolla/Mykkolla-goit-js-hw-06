const nameImput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');




const changenameOutput = (event) => {
    event.currentTarget.value.trim() === '' ? 
    nameOutput.textContent = 'Anonymous' : nameOutput.textContent =  event.currentTarget.value;
    
}
nameImput.addEventListener('input', changenameOutput);

