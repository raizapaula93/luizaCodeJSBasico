let menu=3;
let mensagem="";

switch (menu) {
    case (1):
        mensagem="Pizza com borda de queijo!";
        break;
    case (2):
        mensagem="Pizza com borda de catupiry!";
        break;
    default:
        mensagem="Pizza sem borda!";
        break;
}

console.log(mensagem);