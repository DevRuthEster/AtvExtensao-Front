//
document.getElementById('addForm').addEventListener('submit', (e) => {
    e.preventDefault();
    addAluno();
    });
    function addAluno() {
        const nome = document.getElementById('alunoNome').value;
        const cpf = document.getElementById('alunoCpf').value;
        const rg = document.getElementById('alunoRg').value;
        const dataNasc = document.getElementById('alunoDataNasc').value;
        const genero = document.getElementById('alunoGenero').value;
        const endereco = document.getElementById('alunoEndereco').value;
        const nomeResponsavel = document.getElementById('alunoNomeResponsavel').value;
        const contatoResponsavel = document.getElementById('alunoContatoResponsavel').value;
        const modalidade = document.getElementById('alunoModalidade').value;
        const telefone = document.getElementById('alunoTelefone').value;
    
        // verificar se todos os campos foram preenchidos e salvo no localStorage
        if (nome && cpf && rg && dataNasc && genero && endereco && nomeResponsavel && contatoResponsavel && modalidade &&telefone) {
            const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
            const newId = alunos.length ? Math.max(...alunos.map(aluno => aluno.id)) + 1 : 1;
            const newAluno = { id: newId, nome, cpf, rg, dataNasc, genero , nomeResponsavel, contatoResponsavel, modalidade, endereco, telefone };
            alunos.push(newAluno);
            localStorage.setItem('alunos', JSON.stringify(alunos));
            document.getElementById('addForm').reset();
            alert('Aluno cadastrado com sucesso!');
        }
    
    }