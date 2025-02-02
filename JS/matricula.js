//inicializacao do sistema
document.getElementById('addForm').addEventListener('submit', (e) => {
    e.preventDefault();
    addMatricula();
    });
    function addMatricula() {
        const cpf = document.getElementById('matriculaCpf').value;
        const nome = document.getElementById('matriculaNome').value;
        const turma = document.getElementById('matriculaTurma').value;
        const dataMatricula = document.getElementById('matriculaData').value;

    
        // verificar se todos os campos foram preenchidos e salvo no localStorage
        if (cpf && nome && turma && dataMatricula) {
            const matriculas = JSON.parse(localStorage.getItem('matriculas')) || [];
            const newId = matriculas.length ? Math.max(...matriculas.map(matricula => matricula.id)) + 1 : 1;
            const newTurma = { id: newId, nome, codigo,turma, dataMatricula };
            turmas.push(newMatricula);
            localStorage.setItem('turmas', JSON.stringify(turmas));
            document.getElementById('addForm').reset();
            alert('Matrícula feita com sucesso!');
        }
    
    
    }