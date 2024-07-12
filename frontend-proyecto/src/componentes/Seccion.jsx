import Registro from "./Registro";
import Lista from "./Lista";
import Informe from "./Informe";
import Titulos_informe from "./Titulos_informe";
import {Routes, Route} from "react-router-dom"


const Seccion = ()=>{
    return(
        <div className="seccion">
            
            <Routes>
                <Route path="/" element={<Registro></Registro>}></Route>
                <Route path="/lista" element={<Lista></Lista>}></Route>
                <Route path="/informe" element={<Informe></Informe>}></Route>
            </Routes>

        </div>
    )
}

export default Seccion;