import { useState } from "react"
import Boton from "./Boton"
import { Link } from "react-router-dom"

const Contador = ()=>{

    const [valor, setvalor] = useState(0)

    const aumentar = ()=>{
        setvalor(valor + 1)
    }

    const disminuir = ()=>{
        setvalor(valor - 1)
    }

    const borrar = ()=>{
        setvalor(0)
    }

    return(
        <div className="contador">

            <p>{valor}</p>

            <Link to="/">Haz click para ir a inicio</Link>

            <Boton onClick={aumentar} value="Aumentar"></Boton>
            <Boton onClick={disminuir} value="Disminuir"></Boton>
            <Boton onClick={borrar} value="Limpiar"></Boton>

        </div>

        
    )
}


export default Contador;