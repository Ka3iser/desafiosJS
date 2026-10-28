let altura;



function verificarAltura() {
    altura = Number(prompt("Digite sua altura"));

    if(altura >= 1.50){
        alert("Entrada Liberada!");
        alert("Se divirta!");
    }else{
        alert("Entrada Bloqueada!");
        alert("Tente De novo Outro Dia ");
    }
}