function animacao() {


    var position = Number(window.getComputedStyle(obj_anim1).right.replace('px', ''));
    obj_anim1.style.animation = "none"

    obj_anim1.style.right = `${position}px`;


    img_anim.src = "./css/img/forgottencrossroads/HUSKSUSTO.gif"
    setInterval(animVoltar, 500);

}
function animVoltar() {
    var position = Number(window.getComputedStyle(obj_anim1).right.replace('px', ''));
    img_anim.src = "./css/img/forgottencrossroads/HuskRun.gif"
    obj_anim1.style.animation = "huskrun 3s linear";

    if (position > 1500) {
        obj_anim1.style.display = "none"
        obj_anim1.style.animation = "none"

    }
}   