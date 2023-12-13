import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoMenu from '../imagenes/logoMenu.png'; 
import imgCarrito from '../imagenes/carrito.svg'; 
import imgUsuario from '../imagenes/imagen-usuario.svg'; 
import imgMenu from '../imagenes/menu.svg'; 
import '../hojas-de-estilo/MenuEnlaces.css'; 

// Enlaces de la landing page
export function MenuEnlaces(){
  /* 
  Usamos un variable mostrado (un estado) para saber
  cuando debemos mostrar u ocultar el menu de navegacion
  para la parte movil 
  */
  const [mostrado, setMostrar] = useState(false); 

  //Definimos una funcion para mostrar el div de navegacion 
  //para la parte movil
  const mostrarEnlaces = () => {
    if(!mostrado){
      setMostrar(true); 
    } else {
      setMostrar(false); 
    }
  }

  //Definimos una funcion para ocultar el div de navegacion 
  //para la parte movil   
  const ocultarEnlaces = () => {
    setMostrar(false); 
  }

  return(
    // Contenedor principal
    <ul className="menu-enlaces">
      {/* Boton mostrar para la navegacion en movile */}
      <div className="menu-enlaces__boton-mostrar" onClick={mostrarEnlaces}>
        <img 
          src={imgMenu}
          alt="opciones"
          className="boton-mostrar__imagen"
        />
      </div>

      {/* Logo redirecciona a Home*/}
      <NavLink 
        className="menu-enlaces__logo" 
        to="/"
        onClick={ocultarEnlaces}
        >
          <img
            className="logo__imagen"
            src={logoMenu}
            alt="hamburguesas chimu"
          />
      </NavLink>
      {/* Enlaces a las diferentes paginas */}
      {/* Aca tendra efecto la variable estado mostrado para mostrar enlaces o no */}
      <div className={`menu-enlaces__enlaces-paginas ${mostrado ? "mostrar-enlaces-paginas":null}`}>

        {/* Se usa la propiedad isActive del componente NavLink para cambiar su estilo 
        con To se redirecciona al usuario al enlace permitente*/}

        {/* Este enlace solo se mostrara en la parte de movil */}
        <NavLink 
          className={({isActive}) => isActive ? "enlace-activo enlaces-paginas__enlace-home" : "enlaces-paginas__enlace-home"} 
          to="/"
          onClick={mostrarEnlaces}
          >
          HOME
        </NavLink>

        <NavLink 
          className={({isActive}) => isActive ? "enlace-activo" : null} 
          to="/sobre-nosotros"
          onClick={mostrarEnlaces}
          >
          SOBRE NOSOTROS
        </NavLink>

        <NavLink 
          className={({isActive}) => isActive ? "enlace-activo" : null} 
          to="/menu"
          onClick={mostrarEnlaces}
          >
          MENU
        </NavLink>

        <NavLink 
          className={({isActive}) => isActive ? "enlace-activo" : null} 
          to="/promos"
          onClick={mostrarEnlaces}
          >
          PROMOS
        </NavLink>

        <NavLink 
          className={({isActive}) => isActive ? "enlace-activo" : null} 
          to="/ubicacion"
          onClick={mostrarEnlaces}
          >
          UBICACIÓN
        </NavLink>

        <NavLink 
          className={({isActive}) => isActive ? "enlace-sesion-activo enlaces-paginas__enlace-sesion" : "enlaces-paginas__enlace-sesion"} 
          to="/iniciar-sesion"
          onClick={mostrarEnlaces}
          >
          <img
            className="enlace-sesion__imagen"
            src={imgUsuario}
            alt="usuario"
          />
          INICIAR SESIÓN
        </NavLink>

      </div>
      {/* Enlace para ir a la pagina del carrito de compras */}
      <NavLink 
        className="menu-enlaces__enlace-carrito"
        to="/carrito"
        onClick={ocultarEnlaces}
        >
        <img
          className="enlace-carrito__imagen"
          src={imgCarrito}
          alt="carrito de compras"
        />
      </NavLink>

    </ul>
  );
} 

