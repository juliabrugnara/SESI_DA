let contatos = [];

//carregar os dados salvos ao abrir a página
function carregar() {
  let dados = localStorage.getItem('minha_agenda');
  if (dados != null) {
    contatos = JSON.parse(dados);
  }
  mostrar();
}

//adicionar contato
function adicionar() {
  let nome = document.getElementById('nome').value;
  let telefone = document.getElementById('telefone').value;

  //TUDO o que é permitido
  let permitidos = "0123456789 ()-+";
  let invalido = false;

 //Verificação dos caracteres permitidos
  for (let i = 0; i < telefone.length; i++) {
    if (!permitidos.includes(telefone[i])) {
      invalido = true;
    }
  }

  // Condicionais de validação
  if (nome == '' || telefone == '') {
    alert('Preencha todos os campos!');
  } else if (invalido) {
    alert('O telefone só pode conter números, espaços e os símbolos ( ) - +');
  } else {
    contatos.push({ nome: nome, telefone: telefone });
    localStorage.setItem('minha_agenda', JSON.stringify(contatos));

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';

    mostrar();
  }
}

// Função para mostrar a lista na tela
function mostrar() {
  let lista = document.getElementById('lista');
  lista.innerHTML = '';

  for (let i = 0; i < contatos.length; i++) {
    lista.innerHTML += '<li>' + contatos[i].nome + ' - ' + contatos[i].telefone + ' <button onclick="apagar(' + i + ')">Excluir</button></li>';
  }
}

//apagar um único contato
function apagar(index) {
  contatos.splice(index, 1);

  if (contatos.length == 0) {
    localStorage.removeItem('minha_agenda');
  } else {
    localStorage.setItem('minha_agenda', JSON.stringify(contatos));
  }

  mostrar();
}

//apagar TODOS os contatos
function limparTudo() {
  contatos = [];
  localStorage.removeItem('minha_agenda');
  mostrar();
}

//carga inicial ao abrir o site
carregar();