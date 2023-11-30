var gameModel = require("../models/gameModel");


function cadastrarPonto(req, res) {

    var pontuacao = req.body.pontuacaoServer;
    var idUsuario = req.body.idUsuarioServer;


    if (pontuacao == undefined) {
        res.status(400).send("Sua pontuação está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {


        gameModel.cadastrarPonto(pontuacao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function updatePonto(req, res) {

    var pontuacao = req.body.pontuacaoServer;
    var idUsuario = req.body.idUsuarioServer;


    if (pontuacao == undefined) {
        res.status(400).send("Sua pontuação está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {


        gameModel.updatePonto(pontuacao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function autenticar(req, res) {
    var idUser = req.body.idUserServer;


    gameModel.autenticar(idUser)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
                if (resultadoAutenticar.length > 0) {

                    // console.log('asdasdasdasd' + stringify(resultadoAutenticars));]

                    console.log(resultadoAutenticar[0].pontosMax)

                    res.json({
                        // idUser: resultadoAutenticar[0].idUser,
                        pontos: resultadoAutenticar[0].pontosMax

                    });
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );


}

function classificacao(req, res) {



    gameModel.classificacao()
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
                if (resultadoAutenticar.length > 0) {


                    var listaSemJson = [resultadoAutenticar[0].listapontos, resultadoAutenticar[1].listapontos, resultadoAutenticar[2].listapontos];

                    console.log("SEM JEISON", listaSemJson)

                    res.json(
                        resultadoAutenticar
                    );
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );


}











module.exports = {
    classificacao,
    updatePonto,
    cadastrarPonto,
    autenticar

}