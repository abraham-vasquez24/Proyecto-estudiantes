const Estudiantes = require('../models/Estudiantes');

//Aagrega un nuevo estudiante

exports.nuevoEstudiante = async (req, res, next) =>{
   const estudiante = new Estudiantes(req.body)

   try {

        //almacenar el registro
        await estudiante.save();
        res.json({mensaje: 'se agrego un nuevo estudiante'})
   } catch (error) {

        console.log(error);
        next()
   }    
}

// Muestra todos los clientes

exports.mostrarEstudiantes = async(req, res, next)=>{
    try {

        const estudiantes = await Estudiantes.find({});
        res.json(estudiantes)
        
    } catch (error) {
        console.log(error);
        next()
    }
}

//Muestra un estudiante por su id

exports.mostrarEstudianteId = async (req, res, next) =>{
    const estudiante = await Estudiantes.findById(req.params.idestudiante)

    if(!estudiante){
        res.json({mensaje: 'Ese estudiante no existe'})
        next(); 
    }

    //Mostrar el estudiante
    res.json(estudiante)
}


//Actualiza un estudiante por su id
exports.actualizarEstudiante = async(req, res, next)=>{
    try {

        const estudiante = await Estudiantes.findOneAndUpdate({ _id : req.params.idestudiante },
            req.body, {
                new : true
            }
        )

        res.json(estudiante)
        
    } catch (error) {
        console.log(error);
        next()
    }
}

exports.eliminarEstudiante = async(req, res, next)=>{
    try {

        await Estudiantes.findOneAndDelete({_id:req.params.idestudiante})
        res.json({mensaje : 'El estudiante se a eliminado'})
        
    } catch (error) {
         console.log(error);
         next()
    }

}