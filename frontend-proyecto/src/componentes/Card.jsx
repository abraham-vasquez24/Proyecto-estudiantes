
const Card=({_id, nombre, apellido, edad, email, telefono, matriculado})=>{


    return (
    
    <div className="card--estudiante">
           
           <p className="nombre">Nombre : {nombre}</p>
           <p className="apellido">Apeliido : {apellido}</p>
           <p className="edad">Edad : {edad}</p>
           <p className="email">Email : {email}</p>
           <p className="telefono">Telefono : {telefono}</p>
           <p className="matriculado">Matriculado : {matriculado}</p>

        </div>
    )
}
export default Card