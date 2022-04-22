const { retornaProduto } = require('./produto');

const retornaCategoria = () => {
    const nomeDoProduto = retornaProduto();
    const nomeDaCategoria = 'Categoria XPTO';
        return `${nomeDoProduto} - ${nomeDaCategoria}`;
    
};

module.exports = { retornaCategoria };