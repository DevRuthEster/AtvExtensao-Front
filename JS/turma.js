//
document.getElementById('addForm').addEventListener('submit', (e) => {
    e.preventDefault();
    addTurma();
});
function addTurma() {
    const codigo = document.getElementById('turmaCodigo').value;
    const qntdVagas = document.getElementById('turmaQntdVagas').value;
    const professor = document.getElementById('turmaProfessor').value;
    const dataAbertura = document.getElementById('turmaDataAbertura').value;
    const nivel = document.getElementById('turmaNivel').value;
    const dataInicio = document.getElementById('turmaDataInicio').value;
    const dataConclusao = document.getElementById('turmaDataConclusao').value;
    let checkbox = document.querySelectorAll('input[id="dia"]:checked');
    let diasSelecionados = Array.from(checkbox).map(dia => dia.value);

    // verificar se todos os campos foram preenchidos e salvo no localStorage
    if (codigo && qntdVagas && professor && dataAbertura && nivel && dataInicio && dataConclusao && diasSelecionados) {
        const turmas = JSON.parse(localStorage.getItem('turmas')) || [];
        const newId = turmas.length ? Math.max(...turmas.map(turma => turma.id)) + 1 : 1;
        const newTurma = { id: newId, codigo, qntdVagas, professor, dataAbertura, nivel, dataInicio, dataConclusao, diasSelecionados };
        turmas.push(newTurma);
        localStorage.setItem('turmas', JSON.stringify(turmas));
        document.getElementById('addForm').reset();
        alert('Turma cadastrada com sucesso!');
    }

}
function preencherSelectProfessor() {
    let select = document.getElementById('professorSelect');
    let professores = JSON.parse(localStorage.getItem('professores'));
    professores.forEach(professor => {
        let option = document.createElement("option");
        option.value = professor.nome;
        option.innerText = professor.nome;
        select.appendChild(option);
    });
    
}
window.onload = preencherSelectProfessor();