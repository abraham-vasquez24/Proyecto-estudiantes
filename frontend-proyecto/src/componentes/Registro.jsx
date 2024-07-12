import { useState ,useEffect } from "react";
import estudianteAxios from "../config/axios";

const Registro = ()=>{

    //estudiante = estado , guardarEstudiantes = funcion para guardar el estudiate

    const [estudiante, guardarEstudiantes] = useState({
        nombre:'',
        apellido:'',
        edad:'',
        email:'',
        telefono:'',
        matriculado:''
    })

    //leer los datos del formulario
    const actualizarState = (e)=>{
        //Almacenar lo que el usuario escriba en el state
        guardarEstudiantes({

            ...estudiante,
            [e.target.name] : e.target.value
        })

        console.log(estudiante);
    }

    //Añada en la Rest Api un estudiante nuevo
    const agregarEstudiante = (e)=>{
        e.preventDefault();

        //enviar peticion
        estudianteAxios.post('/estudiantes', estudiante)
            .then(res =>{
                console.log(res);
            })

            alert("Estudiante guardado")
    }



    //validar formulario
    const validarEstudiante = ()=>{
        const {nombre, apellido, edad, email, telefono, matriculado} = estudiante

        //revisar que las propeidades del objeto tengan contenido
        let validar = !nombre.length || !apellido.length || !edad.length || !email.length || !telefono.length || !matriculado.length

        return validar
    }

    return(

        <div className="registro">
            <h1>Registro de estudiantes</h1>

            <div className="formulario">

                <form action="" method="post" onSubmit={agregarEstudiante}>
                        
                    <div>
                        <label>Nombre : </label>
                        <input type="text" placeholder="Nombre" name="nombre" onChange={actualizarState}/>
                    </div>

                    <div>
                        <label>Apellido : </label>
                        <input type="text" placeholder="Apellido" name="apellido" onChange={actualizarState}/> 
                    </div>

                    <div>
                        <label>Edad : </label>
                        <input type="number" placeholder="Edad" name="edad" onChange={actualizarState}/>
                    </div>

                    <div>
                        <label>Email : </label>
                        <input type="text" placeholder="Email" name="email" onChange={actualizarState}/>
                    </div>
                    
                    <div>
                        <label>Telefono : </label>
                        <input type="number" placeholder="Telefono" name="telefono" onChange={actualizarState}/>
                    </div>

                    <div>
                        <label>Matriculado : </label>
                        <input type="text" placeholder="Si o No" name="matriculado" onChange={actualizarState}/>
                    </div>

                    <button disabled={validarEstudiante()}>Registrar estudiante</button>

                </form>
            </div>
        </div>
    )
}


export default Registro;