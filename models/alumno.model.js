const mongoose = require("mongoose");
const {Schema} = mongoose;

const alumnoSchema = new Schema({
    alumno: String,
    asignatura: String,
    nota1: Number,
    nota2: Number,
    recuperacion: Number,
    estado: String
});

 module.exports = mongoose.model('Alumnos',alumnoSchema);