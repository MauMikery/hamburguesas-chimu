import React from 'react'; 
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/IniciarSesion.css'; 

//Pagina de bienvenida al e-commerce
export function IniciarSesion(){
  return (
    // Contenedor principal inses = iniciar sesion
    <div className='inses'>
      <div className="inses__main">
        {/* Header */}
        <header className='inses__header'>
          <h1 className='inses__header__titulo'>Iniciar Sesión</h1>
        </header>
    
        {/* Contenedor de formulario */}
        <div className='inses__contenedor'>
          {/* Formulario de iniciar sesion*/}
          <form className='inses__contenedor__form' action="">
            {/* correo */}
            <label for="correo" className='inses__contenedor__form__label'>Correo electrónico:</label>
            <input type="text" name="correo" id="correo" className='inses__contenedor__form__campo'/>
            {/* contraseña */}
            <label for="contra" className='inses__contenedor__form__label'>Contraseña:</label>
            <input type="text" name="contra" id="contra" className='inses__contenedor__form__campo'/>
            {/* Enlace para ayudar al usuario a recuperar contraseña */}
            <Link className='inses__contenedor__form__enlace'>¿Olvidaste tu contraseña?</Link>
            <Link className='inses__contenedor__form__enlace enlace-registro' to="/registrate">¿No tienes cuenta? Registrate</Link>
            {/* Boton para evitar que se cierre la sesion */}
            <label for="noCerrarSesion" className='inses__contenedor__form__nocerrarsesion'>
              <input type="checkbox" name="noCerrarSesion" id="noCerrarSesion" className='inses__contenedor__form__nocerrarsesion__check'/>
              No cerrar sesión
            </label>
            {/* Boton para enviar el formulario e iniciar sesión */}
            <button type="submit" name='btnIniciarSesion' id='btnIniciarSesion' placeholder="INICIAR SESIÓN" className='inses__contenedor__form__boton'>
              INICIAR SESIÓN
            </button>
          </form>
          <hr className='inses__contenedor__separador'/>
          {/* Boton para iniciar sesion con google */}
          <button type='button' className='inses__contenedor__insesgoogle'>INICIAR SESIÓN CON GOOGLE</button>
        </div>
      </div>
    </div>
  );
}

