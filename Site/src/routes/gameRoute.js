var express = require("express");
var router = express.Router();

var gameController = require("../controllers/gameController");

router.post("/cadastrarPonto", function (req, res) {
    gameController.cadastrarPonto(req, res);
});

router.post("/buscarPorPontosBD", function (req, res) {
    gameController.buscarPorPontosBD(req, res);
});










module.exports = router;