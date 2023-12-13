import React from 'react'; 
import { Link } from 'react-router-dom';
import hamburHawaina from '../imagenes/hamburguesa-hawaiana-home.png'; 
import hamburOriginal from '../imagenes/hamburguesa-original-home.png'; 
import hamburBarbecue from '../imagenes/hamburguesa-barbecue-home.png';
import Footer from '../componentes/Footer';
import '../hojas-de-estilo/Home.css'; 

//Pagina de bienvenida al e-commerce
export function Home(){
  return (
    <>   
      <div className='home__main'>
        {/* Titulo de bienvenida */}
        <header className='home__header'>
          <h1 className='home__header__titulo'>¡BIENVENIDO A HAMBURGUESAS CHIMU!</h1>
        </header>
        {/* Enlace a seccion ordena online */}
        <Link 
          className='home__enlace'
          to="/sobre-nosotros"
          > 
          SOBRE NOSOTROS         
        </Link>
        {/* Publicidad de algunos productos */}
        <section className='home__publicidad'>
          <div className='home__publicidad__producto'>
            <img 
              src={hamburHawaina}
              className='home__publicidad__producto__imagen'
              />
          </div>
          <div className='home__publicidad__producto'>
            <img 
              src={hamburOriginal}
              className='home__publicidad__producto__imagen'
              />
          </div>
          <div className='home__publicidad__producto'>
            <img 
              src={hamburBarbecue}
              className='home__publicidad__producto__imagen'
              />
          </div>
        </section>    
        {/* Enlace a seccion menu */}
        <Link 
          className='home__enlace'
          to="/menu"
          > 
          MENU      
        </Link>
        {/* Enlace a seccion promos */}
        <Link 
          className='home__enlace'
          to="/promos"
          >   
          PROMOS           
        </Link>
        {/* Enlace a seccion ubicacion */}
        <Link 
          className='home__enlace'
          to="/ubicacion"
          > 
          UBICACION            
        </Link>
        {/* Seccion para mostrar al usuario como puede hacer sus pedidos */}
        <section className='home__pedido'>
          <h3 className='home__pedido__subtitulo'>REALIZA TU PEDIDO</h3>
          <div className='home__pedido__tipos'>
            <div className='home__pedido__tipos__tipo'>
              <p>
                ENTREGAS A 
                <br/> DOMICILIO
              </p>
            </div>
            <div className='home__pedido__tipos__tipo'>
              <p>
                RECOGER EN 
                <br/>TIENDA
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

