import { Fragment } from "react"

const Boton = ({value, onClick})=>{
    return(

        <Fragment>

            <button onClick={onClick}>{value}</button>

        </Fragment>

    )
}

export default Boton;