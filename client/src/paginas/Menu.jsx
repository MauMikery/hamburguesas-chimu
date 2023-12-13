import React from 'react'; 
import '../hojas-de-estilo/Menu.css'; 
import Producto from '../componentes/Producto';
import menuImagenHamOriginal from "../imagenes/menu-hamburguesa-original.png";
import menuImagenHamDoblecarne from "../imagenes/menu-hamburguesa-doblecarne.png"; 
import menuImagenHamHawaiana from "../imagenes/menu-hamburguesa-hawaiana.png"; 
import promo_Hamburguesa_super from "../imagenes/promo_Hamburguesa_super.png";
import promo_Hamburguesa_doble_mas_doble_papas from "../imagenes/promo_Hamburguesa_doble_mas_doble_papas.png";
import menuImagenHamBarbecue from "../imagenes/menu-hamburguesa-barbecue.png"; 

//Pagina de menu al e-commerce
export function Menu(){
  return (
    <>  
      {/* Contenedor principal */}
      <main className='menu__main'>
        {/* Contenedor de titulo */}
        <header className='menu__header'>
          <h1 className='menu__header__titulo'>MENU</h1>
        </header>

        <section className='menu__productos'>
          <Producto 
            imagen={menuImagenHamOriginal}
            id="1"
            nombre_producto="Original"
            precio_producto="65$"
            />
          <Producto 
            imagen={menuImagenHamDoblecarne}
            id="2"
            nombre_producto="Extra Carne"
            precio_producto="90$"
            />
          <Producto 
            imagen={menuImagenHamHawaiana}
            id="3"
            nombre_producto="Hawaiana"
            precio_producto="80$"
            />
          <Producto 
            imagen={promo_Hamburguesa_super}
            id="4"
            nombre_producto="Super"
            precio_producto="110$"
            />
          <Producto 
            imagen={promo_Hamburguesa_doble_mas_doble_papas}
            id="5"
            nombre_producto="Doble"
            precio_producto="75$"
          />
          <Producto 
            imagen={menuImagenHamBarbecue}
            id="6"
            nombre_producto="Barbecue"
            precio_producto="70$"
          />
        </section>
      </main>
    </>

  );
}

