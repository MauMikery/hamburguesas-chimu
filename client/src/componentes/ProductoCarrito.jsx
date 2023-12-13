import '../hojas-de-estilo/ProductoCarrito.css';

function ProductoCarrito(props){
  <div className='ProductoCarrito'>
    <img src={props.imagen} alt={props.descripcion_imagen} className='ProductoCarrito__imagen'/>
    <p>{props.nombre_producto}</p>
    <p>{props.precio_producto}</p>
    <button>-</button>
    <div></div>
    <button>+</button>
    <button>X</button>
  </div>
}

export default ProductoCarrito; 