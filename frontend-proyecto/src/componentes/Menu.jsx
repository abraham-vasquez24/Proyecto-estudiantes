import iconoRegistrar from './imagenes/matri.png'
import iconolista from './imagenes/alum.png'
import iconoinforme from './imagenes/matri.png'

import { Link } from 'react-router-dom'


const Menu = ()=>{
    return(

        <div className="contenedor--menu">

            <h4 className="titulo--menu">Administracion</h4>

            <div className="cont--enlace">
                <img src={iconoRegistrar}/>
                {/* <a href="/">Registro</a> */}
                <Link to="/">Registro</Link>
            </div>

            <div className="cont--enlace">
                <img src={iconolista}/>
                {/* <a href="#">Lista de estudiantes</a> */}
                <Link to="/lista">Lista de estudiantes</Link>
            </div>

            <div className="cont--enlace">
                <img src={iconoinforme}/>
                {/* <a href="#">Informe</a> */}
                <Link to="/informe" >Informe</Link>
            </div>

        </div>
    )
}

export default Menu;