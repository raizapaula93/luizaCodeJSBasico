//continue: pular algum pedaço do fluxo de repetição sem sair do laço;
//break:interrompe o çao de repetição se caso uma condição for atendida

for(let i=0; i<=10; i++){
    if(i===4){
        continue
    }
    console.log(i);
};

for(let i=0; i<=10; i++){
    if(i===4){
        break
    }
    console.log(i);
};