// const nome = localStorage.getItem('nome');

// alert(nome);

// localStorage.setItem("nome", "Frederico");

// alert(localStorage.getItem("nome"));

// localStorage.removeItem("nome");

function login(){
    //Acessar o valor digitado nos campos USUARIO e SENHA
     const campo_usuario = document.getElementById("usuario").value;
     const campo_senha = document.getElementById("senha");

    //2° carregar os valores do localStorage
     const local_usuario = localStorage.getItem("usuario");
     const local_senha = localStorage.getItem("senha");

    // 3° Validar se o valores são iguais aos valores armazenados no localStorage
    if(campo_usuario == local_usuario){
        alert("Login realizado com sucesso!");
    }else{
        alert("Usuário inválido!");
}






}

