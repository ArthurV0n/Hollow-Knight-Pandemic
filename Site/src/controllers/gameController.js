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

function buscarPontosBD(req, res) {

    var idUsuario = req.body.idUsuarioServer;

    gameModel.buscarPorPontosBD(idUsuario)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
                if (resultadoAutenticar.length == 1) {


                    res.json({


                        pontos: resultadoAutenticar[0].pontos

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










module.exports = {

    cadastrarPonto,
    buscarPontosBD

}