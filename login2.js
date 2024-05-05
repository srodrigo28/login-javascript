function validar(){
    /** pega os dados campos */ 
    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;
    
    /** verifica se os campos estão vazios */
    if(email == ""){
        alert("Preencha o campo email");
        return false;
    }
    if(senha == ""){
        alert("Preencha o campo senha");
        return false;
    }
    /** verifica se o usuário ou senha tem permissão para entrar*/
    if( email == "admin@gmail.com" && senha == "123"){
        alert("Login efetuado com sucesso");
        
        /** podemos redirecionar o usuário para a página seguinte */
        location.href = "https://www.google.com";
        
    }else{
        alert("Usuário ou senha inválidos");
        return false;
    }
}
// chama a função criada para validar o formulário
document.getElementById("entrar")
    .addEventListener("click",  (e) => {
    e.preventDefault()
    validar();
})