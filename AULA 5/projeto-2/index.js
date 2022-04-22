let mundoTexto = "Mundo";

console.log("Olá "+mundoTexto+"!");
console.log("Olá \n"+mundoTexto+"!");

let texto="Meu texto";
let num1 = 1;
let num2 = 20;
let num3 = 3;

console.log(texto + num1 + num2 + num3);//números não somam
console.log(num1+ texto + num2 + num3);//números não somam
console.log(num1 + num2 + texto + num3);//neste casos, os números somam
console.log(num1 + num2 + num3+ texto);//neste casos, os números somam
//Lembrete -> se os números vem primeiro na ordem, o js soma