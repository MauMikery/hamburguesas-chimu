import"../hojas-de-estilo/Ubicacion.css";

export function Ubicacion(){
  return(
    <>
     <main className="Ubicaciones__main">
        <header className="Ubicaiones__header">
            <h1 className="Ubicaciones__header__titulo">UBICACION</h1> 
        </header>

       <section className="Ubicaciones__Ubicacion">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3855.981908926584!2d-92.267179!3d14.88229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDUyJzU2LjIiTiA5MsKwMTYnMDEuOCJX!5e0!3m2!1ses-419!2smx!4v1701520154528!5m2!1ses-419!2smx"  loading="lazy"className="Ubicacion__frame" ></iframe>
       </section>

      </main>
    </> 
);
}

export default Ubicacion;