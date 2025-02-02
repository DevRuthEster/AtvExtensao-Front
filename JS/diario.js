
// Carregar as turmas no select
function carregarTurmas() {
    let turmas = JSON.parse(localStorage.getItem("turmas"));
    let selectTurma = document.getElementById("turmaSelect");
  
    turmas.forEach(turma => {
      let option = document.createElement("option");
      option.value = turma.codigo;
      option.textContent = turma.codigo;
      selectTurma.appendChild(option);
    });
  }
  
  // Carregar os alunos da turma selecionada e criar checkboxes na tabela
  function carregarAlunosPorTurma(turmaCodigo) {
    let matriculas = JSON.parse(localStorage.getItem("matriculas"));
    let tabelaBody = document.getElementById("diarioTabela").getElementsByTagName("tbody")[0];
    
    // Limpar a tabela antes de preencher com os novos dados
    tabelaBody.innerHTML = '';
  
    // Filtrar as matrículas pela turma selecionada
    let alunosDaTurma = matriculas.filter(matricula => matricula.turma === turmaCodigo);
  
    alunosDaTurma.forEach(aluno => {
      let row = tabelaBody.insertRow();
        let cellNome = row.insertCell(0);
      cellNome.textContent = aluno.nome;
      let cellCheckbox = row.insertCell(1);
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = aluno.cpf;
      checkbox.value = aluno.cpf;
      checkbox.name = "presenca";
      cellCheckbox.appendChild(checkbox);
    });
  }
  
  // Função para registrar presença e salvar no localStorage
  function registrarPresenca(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    let alunosPresentes = [];
    let checkboxes = document.querySelectorAll('input[name="presenca"]:checked');
    
    checkboxes.forEach(checkbox => {
      alunosPresentes.push(checkbox.value); // Pega o CPF dos alunos presentes
    });
  
    // Salvando os dados de presença no localStorage
    let frequencia = JSON.parse(localStorage.getItem("frequencia")) || [];
    let dataAula = document.getElementById("dataAula").value;
    let turmaSelecionada = document.getElementById("turmaSelect").value;
  
    let registroPresenca = {
      data: dataAula,
      turma: turmaSelecionada,
      alunosPresentes: alunosPresentes
    };
  
    frequencia.push(registroPresenca);
    localStorage.setItem("frequencia", JSON.stringify(frequencia));
  
    // Exibindo confirmação
    alert("Presença registrada com sucesso!");
  }
  
  // Carregar turmas e alunos ao carregar a página
  window.onload = function() {
    carregarTurmas();
  
    // Atualizar a tabela de alunos quando a turma for selecionada
    document.getElementById("turmaSelect").onchange = function() {
      let turmaCodigo = this.value;
      if (turmaCodigo) {
        carregarAlunosPorTurma(turmaCodigo);
      }
    };
  
    // Associar a função de registrar presença ao envio do formulário
    document.getElementById("diarioForm").onsubmit = registrarPresenca;
  };