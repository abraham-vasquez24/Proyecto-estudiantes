const express = require('express');
const routes = require('./Routes/rutas')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//cors permite la conexion de un servidor a otro para el intercambio de recursos
const cors = require('cors')

//conectar mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/datos-estudiantes',{
    useNewUrlParser:true
});


//creando el servidor
const app = express();

//habilitar en body parer

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())

//rutas del servidor
app.use(routes())

//puerto
const puerto = 5000;



app.listen(puerto)