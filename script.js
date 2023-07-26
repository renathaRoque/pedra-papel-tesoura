function play(escolhaDoUsuario) {
    //opçoes de escolha do computador
    //Estamos criando um lista (array) de escolhas possiveis
    const escolhaDoComputadorDiv = document.getElementById('computer-choice')
     
const escolhas = ['pedra', 'papel', 'tesoura'];
// escolha do computador

const escolhaDoComputador = escolhas[Math.floor(Math.random() * escolhas.length)];
escolhaDoComputadorDiv.innerHTML = 'A escolha do computador foi: ' + escolhaDoComputador
// Pegar div resultado
const resultado = document.getElementById('result');

//Vamos comparar as escolhas
//Usamos dois == para comparação
if (escolhaDoUsuario == escolhaDoComputador) {
    resultado.innerHTML = 'Empate';
} else if (
    //condições para o usuario vencer

    (escolhaDoUsuario == 'pedra' && escolhaDoComputador == 'tesoura') ||
    (escolhaDoUsuario == 'tesoura' && escolhaDoComputador == 'papel') ||
    (escolhaDoUsuario == 'papel' && escolhaDoComputador == 'pedra') 
) {
    resultado.innerHTML ='Voce ganhou!'
    
} else {
    resultado.innerHTML ='Voce perdeu';
}

}