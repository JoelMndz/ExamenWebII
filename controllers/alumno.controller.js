const {Alumnos} = require("../models")

class Alumno{

    async listar(req, res){
        const data = await Alumnos.find();
        res.render('alumnos',{data});
    }

    async agregar(req, res){
        const nota1 = parseInt(req.body.nota1);
        const nota2 = parseInt(req.body.nota2);
        if((nota1 + nota2) >= 14){
            await Alumnos.create({alumno: req.body.alumno,
                asignatura: req.body.asignatura,
                nota1: parseInt(req.body.nota1),
                nota2: parseInt(req.body.nota2),
                recuperacion: 0,
                estado: "Aprobado"});
        }
        else{
            const recuperacion = parseInt(req.body.recuperacion);
            if(recuperacion >= 7){
                await Alumnos.create({alumno: req.body.alumno,
                    asignatura: req.body.asignatura,
                    nota1: parseInt(req.body.nota1),
                    nota2: parseInt(req.body.nota2),
                    recuperacion: recuperacion,
                    estado: "Aprobado"});
            }     
            else{
                await Alumnos.create({alumno: req.body.alumno,
                    asignatura: req.body.asignatura,
                    nota1: parseInt(req.body.nota1),
                    nota2: parseInt(req.body.nota2),
                    recuperacion: recuperacion,
                    estado: "Reprobado"});
            }       
        }
       console.log(req.body);
       res.redirect('/');
    }

    async agregar2(alumno){
        const nota1 = alumno.nota1;
        const nota2 = alumno.nota2;
        if((nota1 + nota2) >= 14){
            await Alumnos.create({alumno: alumno.alumno,
                asignatura: alumno.asignatura,
                nota1: parseInt(alumno.nota1),
                nota2: parseInt(alumno.nota2),
                recuperacion: 0,
                estado: "Aprobado"});
        }
        else{
            const recuperacion = alumno.recuperacion;
            if(recuperacion >= 7){
                await Alumnos.create({alumno: alumno.alumno,
                    asignatura: alumno.asignatura,
                    nota1: alumno.nota1,
                    nota2: alumno.nota2,
                    recuperacion: alumno.recuperacion,
                    estado: "Aprobado"});
            }     
            else{
                await Alumnos.create({alumno: alumno.alumno,
                    asignatura: alumno.asignatura,
                    nota1: alumno.nota1,
                    nota2: alumno.nota2,
                    recuperacion: alumno.recuperacion,
                    estado: "Reprobado"});
            }       
        }
    }

}

module.exports = Alumno;