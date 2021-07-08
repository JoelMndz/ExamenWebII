const mongoose = require("mongoose");
const express = require("express");
const cron = require("node-cron");
const faker = require('faker');
const path = require ('path');
const morgan = require('morgan');

const {Alumno} = require('./controllers')

const app = express();
 
//Variables de entorno
const {MONGO_URI} = require('./config')
const {PORT} = require('./config')

//Rutas
const {AlumnoRoutes} = require("./routes");


//PORT
app.set('port', PORT);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Conexion DB
mongoose.connect(MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true});

//Usamos las rutas
app.use(AlumnoRoutes);

//empezando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

//Para que se ejecute cada media hora
cron.schedule("49 * * * *",
    async ()=>{
        const a = new Alumno();
        console.log(new Date().toString());
        //Conectar a la página web y obtener el HTML
        const nota1 = Math.floor(Math.random()*10)+1;
        const nota2 = Math.floor(Math.random()*10)+1;
        const recuperacion = Math.floor(Math.random()*10)+1;
        const alumno = faker.name.findName();
        const asignatura = "Fisica";
        a.agregar2({alumno,asignatura,nota1,nota2,recuperacion});
    });