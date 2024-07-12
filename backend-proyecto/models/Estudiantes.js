const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estudiantesSchema = new Schema({
    nombre:{
        type: String,
        trim: true
    },

    apellido:{
        type: String,
        trim: true
    },

    edad:{
        type: Number,
        trim: true
    },


    email:{
        type: String,
        unique: true,
        lowercase:true,
        trim:true
    },

    telefono:{
        type:Number,
        trim:true
    },

    matriculado :{
        type: String,
        trim:true
    }

})


module.exports = mongoose.model('Estudiantes', estudiantesSchema)