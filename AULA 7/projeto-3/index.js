let exemploDois = new Array("João","José","Maria");

exemploDois.push("Marta");//adiciona elementos no final da fila
console.log(exemploDois);

exemploDois = new Array("João","José","Maria");

exemploDois.unshift("Marta","Marcos");
console.log("");
console.log(exemploDois);

exemploDois = new Array("João","José","Maria");
exemploDois.splice(2,0,"Marta");//coloca o valor em um index específico, e 0 não remove, 1 remove
console.log("");
console.log(exemploDois);

exemploDois = new Array("João","José","Maria");
exemploDois.splice(2,1,"Marta");//coloca o valor em um index específico, e 0 não remove, 1 remove
console.log("");
console.log(exemploDois);