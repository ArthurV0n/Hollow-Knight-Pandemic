var database = require("../database/config")

function cadastrarPonto(pontuacao, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontuacao, idUsuario);


    var instrucao = `
          INSERT INTO pontuacao (pontos, fkusuario) VALUES (${pontuacao},${idUsuario} );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}
function updatePonto(pontuacao, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontuacao, idUsuario);


    var instrucao = `
    update pontuacao set pontos = ${pontuacao} where fkusuario=${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function autenticar(idUser) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUser)
    var instrucao = `
    select max(pontos) as pontosMax from pontuacao where fkusuario = ${idUser};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);


}

function classificacao() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    select pontos as listapontos from pontuacao order by pontos desc limit 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);


}




module.exports = {
    classificacao,
    updatePonto,
    cadastrarPonto,
    autenticar
};