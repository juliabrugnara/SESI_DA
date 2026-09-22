let erros = 0;

function login() {
  let u = document.getElementById("usuario").value;
  let s = document.getElementById("senha").value;

  if (u == localStorage.getItem("usuario") && s == localStorage.getItem("senha")) {
    alert("Login com sucesso!");
  } else {
    alert("Usuario ou senha errados!");
  }
}

function cadastro() {
  localStorage.setItem("nome", document.getElementById("nome").value);
  localStorage.setItem("usuario", document.getElementById("usuario").value);
  localStorage.setItem("senha", document.getElementById("senha").value);
  localStorage.setItem("palavra_passe", document.getElementById("palavra_passe").value);

  alert("Cadastrado com sucesso!");
}

function recuperar_senha() {
  if (erros >= 3) {
    alert("Bloqueado! Ja errou 3 vezes.");
    return;
  }

  let n = document.getElementById("nome").value;
  let p = document.getElementById("palavra_passe").value;

  if (n == localStorage.getItem("nome") && p == localStorage.getItem("palavra_passe")) {
    alert("Sua senha e: " + localStorage.getItem("senha"));
    erros = 0;
  } else {
    erros++;
    alert("Erro " + erros + " de 3");

    if (erros >= 3) {
      alert("Bloqueado!");
      document.getElementById("nome").disabled = true;
      document.getElementById("palavra_passe").disabled = true;
    }
  }
}