const signIn = document.querySelector('.login-form');

signIn.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const { elements: { email, password } } = e.currentTarget;
    if (email.value === '' || password.value === '') alert('Proszę uzupełnić wszystkie wymagane pola!');
    else console.log(`Email: ${email.value}, hasło: ${password.value}`);
    e.currentTarget.reset();
});

