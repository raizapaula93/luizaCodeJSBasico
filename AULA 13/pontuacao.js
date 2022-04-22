const { retornaProduto } = require('./produto');

const retornaPontuacao = () => {
    const nomeDoProduto = retornaProduto();
    const pontuacao = '5 estrelas';
        return `${nomeDoProduto} - ${pontuacao}`;
    
};

module.exports = { retornaPontuacao };