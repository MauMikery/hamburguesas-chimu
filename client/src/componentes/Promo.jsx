
import "../hojas-de-estilo/Promo.css";
// crear el compomente

function Promo(props){

return(
  //Etiqueta contenedor
  <div>

    <div className="promo">
      <p className="promo__parrafo"><strong>{props.nombre1_promo}</strong></p>
      <p className="promo__parrafo2">{props.nombre_promo}</p>
    </div>
    <div>
      <img src={props.imagen} alt={`Promo ${props.id}`} className="Promo__imagen" />
    </div>
    
  </div>
);

}

//exportar el componente
export default Promo;

