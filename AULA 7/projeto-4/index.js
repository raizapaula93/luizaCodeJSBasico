let exemploDois = new Array("João","José","Maria");

exemploDois.pop("Maria");//remove elementos no final da fila
console.log(exemploDois);

exemploDois = new Array("João","José","Maria");

exemploDois.shift();//remove elementos do início da fila
console.log("");
console.log(exemploDois);

exemploDois = new Array("João","José","Maria");
exemploDois.splice(1,1);//1remove o valor a partir index específico, e 1 quantidade removida
console.log("");
console.log(exemploDois);

