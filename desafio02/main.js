function verifica() {
    let produto = prompt("Digite o nome do produto: ");
    let quantidade = Number(prompt("Quantidade no Sistema: "));
    let verificação = Number(prompt("Quantidade no estoque: "));

    if (verificação < 5){
        alert("Cuidado, Estoque baixo!")
    }else{
        alert("Estoque Ok!")
    }
}
