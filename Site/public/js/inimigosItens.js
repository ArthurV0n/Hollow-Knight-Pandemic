var tempoChamar = 3000

var inimigoHornedHusk = "./css/img/game/inimigos/huskHorned.gif";


function start() {
    if (stopedgame == 0) {
        stopedgame = 1
        if (sessionStorage.PONTOS_GAME == 'undefined') {
            cadastrarPonto()
            console.log('CADASTRAR 0')
            console.log(sessionStorage.PONTOS_GAME)

        }
        buscarPontosBD()
        mortePlayer()
        classificar()
        if (sessionStorage.PONTOS_GAME < qtdGeo || sessionStorage.PONTOS_GAME == undefined) {
            cadastrarPonto()
            console.log(sessionStorage.PONTOS_GAME)

        }


    }
    else if (stopedgame == 1) {
        stopedgame = 0
        loopChamar();
        loop();
        player.src = './css/img/game/player/HollowKnightRun.gif'
        setInterval(Ground, 100)

        setInterval(() => {
            startID.style.display = 'none'
        }, 300)


    }





    item.style.display = 'none';

    ground2.style.animation = 'none'
    ground1.style.animation = 'none'

    inimigo.style.animation = 'none'
    inimigo.style.display = 'none';
    roof2.style.animation = 'none'
    roof1.style.animation = 'none'
}

function loopChamar() {
    if (stopedgame == 1) return


    inimigo.style.display = 'none'
    inimigo.style.animation = 'none'

    var Naleatorio = parseInt(1 + Math.random() * 10)


    if (Naleatorio > 5) {

        inimigo.style.display = 'block'
        inimigo.style.animation = 'inimigosAnim 3s linear forwards '
    }
    if (Naleatorio < 3) {
        item.style.display = 'block'
        item.style.animation = 'itemAnim 10s ease-in-out forwards'
    }


    setTimeout(
        loopChamar

        , tempoChamar);
}

function Ground() {
    if (stopedgame == 1) return


    ground1.style.animation = 'groundAnim 5s linear infinite'
    ground2.style.animation = 'groundAnim2 5s linear infinite'
    roof2.style.animation = 'groundAnim 5s linear infinite'
    roof1.style.animation = 'groundAnim2 5s linear infinite'



}


