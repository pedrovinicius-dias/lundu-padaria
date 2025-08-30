//usa localstorage e sessionstorage para simular um sistema de login

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const errorMessage = document.getElementById('error-message');

    const showMessage = (message) => {
        errorMessage.textContent = message;
        setTimeout(() => {
            errorMessage.textContent = '';
        }, 3000);
    };

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;

            const user = JSON.parse(localStorage.getItem(email));

            if (user && user.password === password) {
                sessionStorage.setItem('loggedInUser', email);
                window.location.href = 'home.html';
            } else {
                showMessage('Email ou senha inválidos.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;

            if (localStorage.getItem(email)) {
                showMessage('Este email já está cadastrado.');
                return;
            }

            const newUser = { name, email, password };
            localStorage.setItem(email, JSON.stringify(newUser));

            alert('Cadastro realizado com sucesso! Faça o login.');
            window.location.href = 'index.html';
        });
    }
});