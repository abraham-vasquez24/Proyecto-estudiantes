import logoArea from './imagenes/logo--area.png'

const Header = ()=>{
    return(
        <div className="header">
            <div className="cont--logoTitulo">
                 <img src={logoArea} className='logo--area'/> <h3 className="titulo">Administrador de Estudiantes - DSI</h3>
            </div>
        </div>
    )
}

export default Header;