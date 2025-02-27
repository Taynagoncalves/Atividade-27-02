/*Curso de Desenvolviemento de Sistema
Professora - Júlia
SENAI
---------------------------------------------------------------------------------------------
OBJETIVO: Função que receba o valor da compra e o valor pago e calcule o troco.
---------------------------------------------------------------------------------------------
*/

function troco (ValordaCompra, ValorPago){
    var troco = ValorPago - ValordaCompra
    return troco
}
console.log ("O seu troco é no valor de: ", troco (34.89, 32));