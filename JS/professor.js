//inicializacao do sistema
document.getElementById('addForm').addEventListener('submit', (e) => {
e.preventDefault();
addProfessor();
});
function addProfessor() {
    const nome = document.getElementById('professorNome').value;
    const cpf = document.getElementById('professorCpf').value;
    const rg = document.getElementById('professorRg').value;
    const dataNasc = document.getElementById('professorDataNascimento').value;
    const formacao = document.getElementById('professorFormacao').value;
    const endereco = document.getElementById('professorEndereco').value;
    const telefone = document.getElementById('professorTelefone').value;

    // verificar se todos os campos foram preenchidos e salvo no localStorage
    if (nome && cpf && rg && dataNasc && formacao && endereco && telefone) {
        const professores = JSON.parse(localStorage.getItem('professores')) || [];
        const newId = professores.length ? Math.max(...professores.map(professor => professor.id)) + 1 : 1;
        const newProfessor = { id: newId, nome, cpf, rg, dataNasc, formacao, endereco, telefone };
        professores.push(newProfessor);
        localStorage.setItem('professores', JSON.stringify(professores));
        document.getElementById('addForm').reset();
        alert('Professor cadastrado com sucesso!');
    }

}
