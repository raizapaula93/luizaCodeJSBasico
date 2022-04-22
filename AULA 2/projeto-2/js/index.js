/*
Calcular o gasto de combustível no mês
Em um mês de 30 dias, sabendo que eu gasto 50,00 de combustível ao dia,quanto estou gastando em 5 dias, em 15 dias 
e no mês inteiro?*/

//exemplo ruim
alert("Eu gasto R$ " + 50,00*5 + " em cinco dias, R$ " +50,00 *15+ " em 15 dias, e R$ "+50,00 *30+ " em 30 dias");

//exemplo bom
let valorDia = 50.00;
let gasto5Dias = valorDia*5;
let gasto15Dias = valorDia*15;
let gasto30Dias = valorDia*35;

let mensagem = "Eu gasto R$ " + gasto5Dias + " em cinco dias, R$ " + gasto15Dias + " em 15 dias, e R$ "+ gasto30Dias + " em 30 dias";

alert(mensagem)

//Neste segundo exemplo, dápra eu alterar o valor em somente um local se houver alguma mudança;
//No 1º exemplo, teria que alterar em todos os locais