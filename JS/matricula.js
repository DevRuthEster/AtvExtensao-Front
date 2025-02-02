 // preencher o select com o cpf dos alunos
 function preencherSelectCpf() {
    let select = document.getElementById('alunoSelect');
    let alunos = JSON.parse(localStorage.getItem('alunos'));
    alunos.forEach(aluno => {
        let option = document.createElement("option");
        option.value = aluno.cpf;
        option.innerText = aluno.cpf;
        select.appendChild(option);
    });
}

// preencher o campo nome do aluno
function preencherNome() {
    let select = document.getElementById('alunoSelect');
    let alunos = JSON.parse(localStorage.getItem('alunos'));
    let cpf = select.value;
    let aluno = alunos.find(aluno => aluno.cpf == cpf);

    let nome = document.getElementById('matriculaNome');
    nome.value = aluno ? aluno.nome : '';

}
window.onload = preencherSelectCpf();

// preencher o select com as turmas
function preencherSelectTurma() {
    let select = document.getElementById('turmaSelect');
    let turmas = JSON.parse(localStorage.getItem('turmas'));
    turmas.forEach(turma => {
        let option = document.createElement("option");
        option.value = turma.codigo;
        option.innerText = turma.codigo;
        select.appendChild(option);
    });
}
window.onload = preencherSelectTurma();

// matricular o aluno
document.getElementById('addForm').addEventListener('submit', (e) => {
    e.preventDefault();
    addMatricula();
});
function addMatricula() {
    const cpf = document.getElementById('alunoSelect').value;
    const nome = document.getElementById('matriculaNome').value;
    const turma = document.getElementById('turmaSelect').value;
    const dataMatricula = document.getElementById('matriculaData').value;


    // verificar se todos os campos foram preenchidos e salvo no localStorage
    if (cpf && nome && turma && dataMatricula) {
        const matriculas = JSON.parse(localStorage.getItem('matriculas')) || [];
        const newId = matriculas.length ? Math.max(...matriculas.map(matricula => matricula.id)) + 1 : 1;
        const newMatricula = { id: newId, cpf, nome, turma, dataMatricula };
        matriculas.push(newMatricula);
        localStorage.setItem('matriculas', JSON.stringify(matriculas));
        document.getElementById('addForm').reset();
        alert('Matrícula feita com sucesso!');
    }


}