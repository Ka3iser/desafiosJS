function isencao() {
    let valor = Number(prompt("Digite o valor para ver se o produto é isento"))

    if (valor < 765.5) {
        alert("isento!");
    }else{
        valor = valor + (valor * 0.10);
        alert(`Taxa de 10% aplicada valor atual ${valor}`);
    }
}

function passou() {
    let nota = Number(prompt("Digite sua nota: "))

    if(nota > 5){
        alert("Passou!")
    }else{
        alert("Reprovado!")
    }
}

function cores() {
    let cor1 = prompt("Digite a primeira cor");
    let cor2 = prompt("Digite a segunda cor");

    if (cor1 != cor2) {
        alert("As cores não são iguais");
    }else{
        alert("cores iguais");
    }


}

function valorBaixo() {
    let valor = Number(prompt("Digite um valor de 0 a 2 (vale numeros decimais) caso ele seja maior que 1 ele sera multiplicado por 100"));

    if (valor <= 1) {
        alert(`O valor ${valor} é baixo`);
    }else{
        valor*=100;
        alert(`Valor multiplicado por 100, valor atual ${valor}`);
    }
}

function promo() {
    let valor = Number(prompt("Digite um numero de 0 a 10 (valendo numeros decimais)"));

    if (valor <= 3.5) {
        alert("Está barato");
    } else {
        alert(`Valor ${valor}`);
    }
}

function acerteNome(){
    alert("Vamos jogar!");
    alert("Escolha um nome entre os nomes na lista, e tente acerta o nome escolhido");
    let nome = prompt("Marcelo, Marisa, Carlos, Bianca, Marcia, Maicon, Diego (escreva o nome escolhido)");

    if(nome == "Marisa"){
        alert("ACERTOU!!!! :D");
    }else{
        alert("ERRRRROOOOOU!!! KKKKKKKKKKKKKKK");
    }
}