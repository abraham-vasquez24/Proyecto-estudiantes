import { useState, useEffect } from 'react';
import Card from './Card';

// importar estudiante axios
import estudianteAxios from '../config/axios'

const Lista = ()=>{

    //trabajar con state

    const[estudiantes, guardarEstudiantes] = useState([])

    //funcion que trae los datos
    const consultarApi = async ()=>{
        const estudiantesConsulta = await estudianteAxios.get('/estudiantes')

        //colocamos el resultado en el state
       
        guardarEstudiantes(estudiantesConsulta.data)
        console.log(estudiantesConsulta.data);
    }

    //Aqui usamos useeffect para traer los datos de la Api rest cuando renderize el proyecto
    useEffect(()=>{
        consultarApi()
    }, [])

    return(
        <div className="lista">
            <h1>Lista de estudiantes</h1>

                    {estudiantes.map(estudiante =>{
                       
                       return(

                            <Card
                                key={estudiante._id}
                                nombre={estudiante.nombre}
                                apellido={estudiante.apellido}
                                edad={estudiante.edad}  
                                email={estudiante.email}
                                telefono={estudiante.telefono}
                                matriculado={String(estudiante.matriculado)}
                            ></Card>
                       )

                    })}
                

        </div>
    )
}

export default Lista;