var express = require("express");
var router = express.Router();

var gameController = require("../controllers/gameController");

router.post("/cadastrarPonto", function (req, res) {
    gameController.cadastrarPonto(req, res);
});

router.post("/autenticar", function (req, res) {
    gameController.autenticar(req, res);
});



router.post("/classificacao", function (req, res) {
    gameController.classificacao(req, res);
});










module.exports = router;