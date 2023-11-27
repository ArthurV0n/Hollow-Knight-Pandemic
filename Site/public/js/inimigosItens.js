var tempoChamar = 3000

var inimigoHornedHusk = "./css/img/game/inimigos/huskHorned.gif";


function start() {
    if (stopedgame == 0) stopedgame = 1
    else if (stopedgame == 1) {
        stopedgame = 0
        loopChamar();
        loop();
    }

    inimigo.style.display = 'none';
    item.style.display = 'none';


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

