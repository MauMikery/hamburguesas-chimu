import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
//Paginas
import { Home } from './paginas/Home'; 
import { SobreNosotros } from './paginas/SobreNosotros';
import { Menu } from './paginas/Menu'; 
import { Promos } from './paginas/Promos';
import { Ubicacion } from './paginas/Ubicacion';
import { IniciarSesion } from './paginas/IniciarSesion';
import { Carrito } from './paginas/Carrito';
import { Registrate } from './paginas/Registrate';
//Componentes
import { MenuEnlaces } from './componentes/MenuEnlaces';
import './App.css';

//Aplicacion principal 
function App() {
  return(
    <div className="App">
      {/* Ruteo a las diferentes vistas  */}
      <BrowserRouter>
        <nav className='nav-enlaces'>
          <MenuEnlaces />
        </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sobre-nosotros' element={<SobreNosotros />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/promos' element={<Promos />}/>
          <Route path='/ubicacion' element={<Ubicacion />}/>
          <Route path='/iniciar-sesion' element={<IniciarSesion />}/>
          <Route path='/carrito' element={<Carrito />}/>
          <Route path='/registrate' element={<Registrate />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
