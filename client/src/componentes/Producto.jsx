import '../hojas-de-estilo/Producto.css'; 

function Producto(props){
  return(
    <div className='producto'>
      <img src={props.imagen} alt={`Producto ${props.id}`} className='producto__imagen'/>
      <button className='producto__boton'>AGREGAR</button>
      <div className='producto__parrafos'>
        <p className='producto__parrafos__parrafo'>{props.nombre_producto}</p>
        <p className='producto__parrafos__parrafo'>{props.precio_producto}</p>
      </div>
    </div>
  );
}

export default Producto; 