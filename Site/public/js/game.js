
var pdpular = 1
var qtdGeo = 0
var stopedgame = 1


function loop() {

    if (stopedgame == 1) return


    var inimigoPosition = Number(window.getComputedStyle(inimigo).left.replace('px', ''));
    var playerPosition = Number(window.getComputedStyle(player).bottom.replace('px', ''));
    var itemPosition = Number(window.getComputedStyle(item).left.replace('px', ''));

    if (inimigoPosition <= 110 && inimigoPosition > 0 && playerPosition < 150) {
        inimigo.style.animation = 'none'
        inimigo.style.display = 'none';
        item.style.display = `none`;
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

    player.style.animation = 'jump 850ms ease-in-out';
    player.src = './css/img/game/player/HollowKnightJump.gif'

    setTimeout(() => { player.style.animation = 'none'; player.src = './css/img/game/player/HollowKnightRun.gif'; }, 850);
}


function podePular() {

    if (pdpular == 1) {
        pdpular = 0
        jump()
        setTimeout(() => { pdpular = 1 }, 850)
    }
}









