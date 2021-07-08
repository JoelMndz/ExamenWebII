const express = require("express");

const router = express.Router();
const {Alumno} = require("../controllers");
const alumno = new Alumno();

router.get('/',alumno.listar);

router.post('/add', alumno.agregar);

module.exports = router;