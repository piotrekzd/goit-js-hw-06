const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (e) => {
    if (!e.currentTarget.value) output.textContent = 'Anonymous';
    else output.textContent = e.currentTarget.value;    
});