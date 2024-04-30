const botoes = document.querySelectorAll(".botoes");
console.log(botoes);
for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");

    }
    console.log();
}