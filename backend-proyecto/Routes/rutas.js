const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/controladores')


module.exports = function () {
    
    //Agrega nuevos clientes via POST
    router.post('/estudiantes', estudianteController.nuevoEstudiante)
    
    //Obtener todos los clientes
    router.get('/estudiantes', estudianteController.mostrarEstudiantes)

    //muestra un cliente en especifico (id)
    router.get('/estudiantes/:idestudiante', estudianteController.mostrarEstudianteId)

    //Acualizar un estudiante (id)
    router.put('/estudiantes/:idestudiante', estudianteController.actualizarEstudiante)

    //Eliminar un estudiante (id)
    router.delete('/estudiantes/:idestudiante', estudianteController.eliminarEstudiante)

    return router

}