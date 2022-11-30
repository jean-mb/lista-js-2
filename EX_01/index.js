const votosTotal = document.getElementById("votos_total");
const votosValido = document.getElementById("votos_validos");
const votosBranco = document.getElementById("votos_branco");
const votosNulo = document.getElementById("votos_nulos");

const resultadoValidos = document.getElementById("porcentual_validos");
const resultadoBranco = document.getElementById("porcentual_branco");
const resultadoNulo = document.getElementById("porcentual_nulo"); 


function calulaPorcentual(){
    let qntdVotosTotal = Number(votosTotal.value);
    let qntdVotosValidos = Number(votosValido.value);
    let qntdVotosBranco = Number(votosBranco.value);
    let qntdVotosNulo = Number(votosNulo.value);
    
    var percentualVotosValidos = (qntdVotosValidos * 100) / qntdVotosTotal;
    var percentualVotosBranco = (qntdVotosBranco * 100) / qntdVotosTotal;
    var percentualVotosNulo = (qntdVotosNulo * 100) / qntdVotosTotal;

    resultadoValidos.innerText = percentualVotosValidos;
    resultadoNulo.innerText = percentualVotosNulo;
    resultadoBranco.innerText = percentualVotosBranco;
    
}






