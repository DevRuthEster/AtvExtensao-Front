const users = [
    {
        name: 'admin',
        password: '123',
        role: 'admin'
    },
    {
        name: 'professor',
        password: '123',
        role: 'professor'
    }
];
//pegar ids no html
const loginForm = document.getElementById('loginForm');
const loginNome = document.getElementById('loginNome');
const loginSenha = document.getElementById('loginSenha');

// funcao compara imput com bd
function autenticarUsuario(nome, senha) {
    return users.find(user => user.name === nome && user.password === senha);
}

//evento que recebe o formulario
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();


    const nome = loginNome.value.trim();
    const senha = loginSenha.value.trim();
    const user = autenticarUsuario(nome, senha);

    if (user) {
        alert(`Login efetuado com sucesso! Bem-vindo ${user.name}`);
        if (user.role === 'admin') {
            window.location.href = './PAGES/home.html';

        } else if (user.role === 'professor') {
            window.location.href = './PAGES/diario.html';
        }
    }
    else {
        alert('Usuário ou senha inválidos, tente novamente');
    }
})