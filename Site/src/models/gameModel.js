var database = require("../database/config")

function cadastrarPonto(pontuacao, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontuacao, idUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
          INSERT INTO pontuacao (pontos, fkusuario) VALUES (${pontuacao},${idUsuario} );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}
function buscarPorPontosBD(pontos) {
    instrucaoSql = `select max(pontos) from pontuacao join usuario on usuario.id = pontuacao.fkusuario where usuario.id = 1; = ${pontos}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}







module.exports = {
    cadastrarPonto,
    buscarPorPontosBD
};