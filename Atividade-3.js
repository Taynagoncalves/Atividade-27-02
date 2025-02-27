/*Curso de Desenvolviemento de Sistema
Professora - Júlia
SENAI
---------------------------------------------------------------------------------------------
OBJETIVO: Função que receba o nome do piloto, a distancia, o tempo e a velocidade media.
---------------------------------------------------------------------------------------------
*/
function velocidadeMedia(distancia, tempo){
     var velocidadeMedia = distancia / tempo 
     return velocidadeMedia
}
console.log("A velocidade média do piloto é de:", velocidadeMedia(100,2), "km/h");