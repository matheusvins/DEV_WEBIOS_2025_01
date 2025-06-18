// Nome da função, tempo para chamar a função
// window.setTimeout(mensagem, 5000) // 6s > 6000 mil mile segundos

// FUNCTION > Ações que o código pode executar quando for solicitado pelo usuario no navegador 
function Mensagem(){
    alert("Aprendendo DOM com JS")
    alert(Date(String))
    // console.log("Aprendendo DOM com JS")
}

let tagH1 = document.createElement("h1")

// innerHTML > Para adicionar uma informação dentro das tags do HTML
tagH1.innerHTML = 'Olá Mundo, Criei você'
// A quem ela vai pertencer
document.body.appendChild(tagH1)