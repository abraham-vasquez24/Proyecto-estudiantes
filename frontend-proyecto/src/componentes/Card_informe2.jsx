const Card_informe2 = ({matriculado,nombre,apellido})=>{
    return(
        <div className="card--informe">

            <p>Nombre : {nombre}</p>
            <p>Apellido : {apellido}</p>
            <p>Matriculado : {matriculado}</p>
            
        </div>
    )
}

export default Card_informe2