//inicializacao do sistema
document.getElementById('addForm').addEventListener('submit', (e) => {
    e.preventDefault();
    addModalidade();
    });
    function addModalidade() {
        const nome = document.getElementById('modalidadeNome').value;
        const codigo = document.getElementById('modalidadeCodigo').value;

    
        // verificar se todos os campos foram preenchidos e salvo no localStorage
        if (nome && codigo) {
            const modalidades = JSON.parse(localStorage.getItem('modalidades')) || [];
            const newId = modalidades.length ? Math.max(...modalidades.map(modalidade => modalidade.id)) + 1 : 1;
            const newModalidade = { id: newId, nome, codigo};
            modalidades.push(newModalidade);
            localStorage.setItem('modalidades', JSON.stringify(modalidades));
            document.getElementById('addForm').reset();
            alert('Modalidade cadastrada com sucesso!');
        }
    
    }
    