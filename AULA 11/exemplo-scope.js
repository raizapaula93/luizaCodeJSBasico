//scope - contexto atual do código
//escopo global - variáveis, funções que podem ser acessadas de qualquer parte do código
//escopo local - variáveis, funções que podem ser acessadas e manipuladas apenas dentro do contexto/codigo específico


//variavel global

let universo = "Solar";

function exibirPlanetas(){
    //variável local
    let planetas=["Marte","Terra","Júpiter"]
    console.log(planetas);
    console.log(universo);    
};

console.log(universo);
//console.log(planetas); dá erro porque tá só dentro do escopo local