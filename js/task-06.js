const textInput = document.querySelector('#validation-input');
const textInputLength = textInput.getAttribute('data-length');

textInput.addEventListener('blur', (e) => {
    if (e.currentTarget.value.length.toString() === textInputLength) 
        e.currentTarget.setAttribute('class', 'valid'); 
    else  e.currentTarget.setAttribute('class', 'invalid');       
});