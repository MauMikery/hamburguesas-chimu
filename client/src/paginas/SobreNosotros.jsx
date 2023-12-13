import React from 'react'; 
import imgSonrisa from '../imagenes/sonrisa__img__sn.png'; 
import imgHamburguesa from '../imagenes/hamburguesa__img__sn.png'; 
import imgEntregas from '../imagenes/entregas__sn.svg'; 
import imgSoporte from '../imagenes/soporte__sn.svg';
import imgDescuentos from '../imagenes/descuentos__sn.svg';
import '../hojas-de-estilo/SobreNosotros.css';

//Pagina de sobre nosotros del e-commerce
export function SobreNosotros(){
  return (
    <>
      <main className='sn__main'>
        <header className='sn__header'>
          <h1 className='sn__header__titulo'>SOBRE NOSOTROS</h1>
        </header>
        {/* Informacion sobre la empresa */}
        <section className='sn__info'>
          <article className='sn__info__article'>
            <img src={imgSonrisa} className="sn__info__article__img" alt="Regalamos sonrisas" />
            <p className='sn__info__article__parrafo'>
              Somos una empresa enfocada en el comercio electrónico de hamburguesas. Nuestro principal objetivo es dar al cliente un servicio de calidad y un producto que enriquezca su paladar. <strong>Buscamos regalar sonrisas y compartir experiencias agradables</strong> 
            </p>
          </article>
          <article className='sn__info__article'>
            <img src={imgHamburguesa} className="sn__info__article__img" alt="Hamburguesas al carbón" />
            <p className='sn__info__article__parrafo'>
              Tenemos diferentes sucursales distribuidas en la ciudad de Tapachula, Chiapas y ya <strong>contamos con 15 años en este mercado</strong>. Nuestras deliciosas y originales hamburguesas hechas al carbón te sorprenderán. Su delicioso sabor y exquisitos ingredientes te harán querer comer más de una. 
            </p>
          </article>
          <article className='sn__info__article-servicios'>
            <div className='sn__info__article-servicios__iconos'>
              <img src={imgEntregas} className="sn__info__article-servicios__icono" alt="Entregas a domicilio" />
              <img src={imgSoporte} className="sn__info__article-servicios__icono" alt="Soporte al cliente" />
              <img src={imgDescuentos} className="sn__info__article-servicios__icono" alt="Descuentos impresionantes" />
            </div>
            <p className='sn__info__article-servicios__parrafo'>
             Contamos con servicios a domicilio a diferentes partes de la ciudad de Tapachula, atención al cliente y ofertas especiales que te harán alucinar. Te animamos a probar y deleitarte con nuestros productos, <br /><strong>¡No te arrepentirás!</strong>
            </p>
          </article>
        </section>
        {/* Formulario para contactarnos */}
        <section className='sn__contacto'>
          <form className='sn__contacto__form'>
            <h2 className='sn__form__titulo'>Contáctanos</h2>
            <input type="text" id="nombre" name="nombre" className='sn__form__campo' placeholder='Ingresa tu nombre'/>
            <input type="text" id='correo' name='correo' className='sn__form__campo' placeholder='Ingresa tu correo'/>
            <textarea id='mensaje' name='mensaje' className='sn__form__mensaje' placeholder='Ingresa tu mensaje'></textarea> 
            <input type="submit" className='sn__form__boton'/>
          </form>
        </section>
      </main>
    </>
  );
}

