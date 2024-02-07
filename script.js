const URL ="https://www.psswrd.net/api/v1/password/?";
const campoSenha = document.getElementById("senha-campo"); //recupera um elemento do html usando o dom
const btnCopiar = document.getElementById("copiar-btn");

async function gerarSenha() {
    const respostaDaApi = await fetch(URL);
    const objeto = await  respostaDaApi.json();
    campoSenha.value = objeto.password;
}

btnCopiar.addEventListener("click", function() {
    campoSenha.select(); //seleciona
   navigator.clipboard.writeText(campoSenha.value); //copia o texto
   btnCopiar.textContent = "Copiado!";
   setTimeout(() => {
      btnCopiar.textContent = "Copiar";
   },2000); // 2000 = 2s
});
gerarSenha();