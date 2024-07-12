import { useEffect, useState, Fragment} from "react";
import Card_informe from "./Card_informe";
import Card_informe2 from "./Card_informe2";
import Titulos_informe from './Titulos_informe'

// importar estudiante axios
import estudianteAxios from '../config/axios'

const Informe = ()=>{

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

      <div>
            <Titulos_informe/>
        <div className="informe">

           <div className="articulo1">

              

                    {estudiantes.map(estudiante =>{

                      if (estudiante.matriculado === "si") {


                    return(
                    
                        <Card_informe
                        
                        nombre={estudiante.nombre}
                        apellido={estudiante.apellido}
                        matriculado={String(estudiante.matriculado)}

                        ></Card_informe>
                   )
                    
                }
                       
                    })}
           </div>

             <div className="articulo2">

                    {estudiantes.map(estudiante =>{

                      if (estudiante.matriculado === "no") {

                    // estudiante.matriculado = "No"

                    return(
                    
                        <Card_informe
                        
                        nombre={estudiante.nombre}
                        apellido={estudiante.apellido}
                        matriculado={String(estudiante.matriculado)}

                        ></Card_informe>
                   )
                    
                }
                       
                    })}
           </div>



       
        </div>
        </div>     
    )
}


export default Informe;