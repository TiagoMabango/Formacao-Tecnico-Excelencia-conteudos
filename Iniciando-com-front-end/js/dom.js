  
alert("Iniciando com o Dom");

const h1Selecionado = document.querySelector("h1"); 
const h1Classes =  h1Selecionado.classList;

h1Selecionado.addEventListener('click', function(){
    console.log("Clicou em", h1Selecionado.innerText)
})