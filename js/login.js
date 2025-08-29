//usa localstorage e sessionstorage para simular um sistema de login

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const errorMessage = document.getElementById('error-message');

    // Função para exibir mensagens de erro
    const showMessage = (message) => {
        errorMessage.textContent = message;
        setTimeout(() => {
            errorMessage.textContent = '';
        }, 3000);
    };

    // Lógica de Login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;

            // Simulação: buscar usuário no localStorage
            const user = JSON.parse(localStorage.getItem(email));

            if (user && user.password === password) {
                // Salva o estado de login
                sessionStorage.setItem('loggedInUser', email);
                window.location.href = 'home.html';
            } else {
                showMessage('Email ou senha inválidos.');
            }
        });
    }

    // Lógica de Cadastro
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;

            // Simulação: verificar se o usuário já existe
            if (localStorage.getItem(email)) {
                showMessage('Este email já está cadastrado.');
                return;
            }

            // Simulação: salvar novo usuário no localStorage
            const newUser = { name, email, password };
            localStorage.setItem(email, JSON.stringify(newUser));

            alert('Cadastro realizado com sucesso! Faça o login.');
            window.location.href = 'index.html';
        });
    }
});