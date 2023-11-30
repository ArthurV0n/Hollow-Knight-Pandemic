
var idUsuario = sessionStorage.ID_USUARIO;
var pdpular = 1
var qtdGeo = 0
var stopedgame = 1
var pontosRecord = 0;



var pontosClassificar = sessionStorage.LISTAPONTOS

function loop() {

    if (stopedgame == 1) return


    var inimigoPosition = Number(window.getComputedStyle(inimigo).left.replace('px', ''));
    var playerPosition = Number(window.getComputedStyle(player).bottom.replace('px', ''));
    var itemPosition = Number(window.getComputedStyle(item).left.replace('px', ''));

    if (inimigoPosition <= 110 && inimigoPosition > 0 && playerPosition < 150) {
        start()
    }
    if (itemPosition <= 130 && itemPosition > 0 && playerPosition < 20) {

        if (item.style.display != 'none') {
            qtdGeo += 1
            console.log(qtdGeo)
        }

        item.style.display = `none`;
    }



    setTimeout(loop, 10);
}


function jump() {
    if (stopedgame == 1) {
        player.src = './css/img/game/player/hollowKnightIdle.png'

    }

    player.style.animation = 'jump 850ms ease-in-out';
    player.src = './css/img/game/player/HollowKnightJump.gif'

    setTimeout(() => {
        player.style.animation = 'none';
        player.src = './css/img/game/player/HollowKnightRun.gif';
        if (stopedgame == 1) {
            mortePlayer()

        }
    }, 850);
}


function podePular() {
    if (stopedgame == 1) {
        start()
    } else if (pdpular == 1) {
        pdpular = 0
        jump()
        setTimeout(() => { pdpular = 1 }, 850)
    }
}

function mortePlayer() {
    player.src = './css/img/game/player/morte.png'
}


function cadastrarPonto() {

    var idUsuario = sessionStorage.ID_USUARIO


    fetch("/gameRoute/cadastrarPonto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            pontuacaoServer: qtdGeo,
            idUsuarioServer: idUsuario

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {


            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;

}


function buscarPontosBD() {


    var idUser = sessionStorage.ID_USUARIO


    fetch("/gameRoute/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUserServer: idUser,

        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.PONTOS_GAME = json.pontos;
            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);

            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function updatePonto() {

    var idUsuario = sessionStorage.ID_USUARIO


    fetch("/gameRoute/updatePonto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pontuacaoServer: qtdGeo,
            idUsuarioServer: idUsuario

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {


            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;

}

var dados = [];

function classificar() {


    var idUser = sessionStorage.ID_USUARIO


    fetch("/gameRoute/classificacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUserServer: idUser,

        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log('JEISON', JSON.stringify(json));
                sessionStorage.LISTAPONTOS = JSON.stringify(json);
                dados = json;
                console.log("dados: ", dados)
            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);

            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}












