const inputHoras = document.getElementById("horas_trabalhadas");
const inputValorHoras = document.getElementById("valor_hora");
const campoSalario = document.getElementById("salario");
const jornadaHoras = 160;


function calculaHoras(){
    let horas = Number(inputHoras.value);
    let valorHora = Number(inputValorHoras.value);
    if(horas<=jornadaHoras){
        var salario = valorHora * horas;
    }else{
        var horasExtra = horas-jornadaHoras;
        var salario = valorHora * jornadaHoras;
        valorHora+= valorHora * 0.5;
        salario+=horasExtra*valorHora;
    }

    campoSalario.innerText = salario;
        


}