const inputSaldo = document.getElementById("saldo");
const inputDebito = document.getElementById("debito");
const inputCredito = document.getElementById("credito");
const campoSaldo = document.getElementById("saldo_atual");
const mensagem = document.getElementById("mensagem");

function calculaSaldo(){
    let saldo = Number(inputSaldo.value);    
    let debito = Number(inputDebito.value);
    let credito = Number(inputCredito.value);

    var saldo_atual =  saldo - debito + credito;
    campoSaldo.innerText = saldo_atual;
    if (saldo_atual >=0){
        mensagem.innerText = "Saldo Positivo";
        mensagem.classList.add("positivo");
        mensagem.classList.remove("negativo");
    }else{
        mensagem.innerText = "Saldo Negativo";
        mensagem.classList.add("negativo");
        mensagem.classList.remove("positivo");

    }
}