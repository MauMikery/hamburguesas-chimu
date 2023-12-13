import { useState } from 'react';
import '../hojas-de-estilo/Registrate.css'; 
import axios from 'axios'; 

export function Registrate(){
  const [formData, setFormData] = useState({
    username: '',
    email:'', 
    phone:'', 
    address:'',
    password:''  
  }); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value}); 
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try{
      const response = await axios.post("http://localhost:3000/api/register", formData);
      console.log(response.data); 
    } catch(error){
      console.error("Error al registar el usuario", error); 
    }
  }

  return(
    <>
      <main className='registrate'>
        <header className='registrate__header'>
          <h1 className='registrate__header__titulo'>Registrate</h1>
        </header>

        <form onSubmit={handleSubmit} className='registrate__form' name='registrateForm'>
          <p className='registrate__form__parrafo'>Ingresa los siguientes datos: </p>
          <input 
            type="text" 
            name='username' 
            value = {formData.name}
            onChange = {handleChange}
            id='nombre_usuario' 
            className='registrate__form__campo' 
            placeholder='Nombre de usuario'/>
          <input 
            type="email" 
            name='email' 
            value = {formData.email}
            onChange = {handleChange}
            id='correo_usuario' 
            className='registrate__form__campo' 
            placeholder='Correo electrónico'/>
          <input 
            type="text" 
            name='phone' 
            value = {formData.phone}
            onChange = {handleChange}
            id='telefono_usuario' 
            className='registrate__form__campo' 
            placeholder='Número telefónico'/>
          <input 
            type="text" 
            name='address' 
            value = {formData.address}
            onChange = {handleChange}
            id='direccion_usuario' 
            className='registrate__form__campo' 
            placeholder='Dirección'/>
          
          <p className='registrate__form__parrafo'>Ingresa una contraseña de 8 a 15 caracteres</p>
          
          <input 
            type="password" 
            name='password' 
            value={formData.password}
            onChange={handleChange}
            id='password_usuario' 
            className='registrate__form__campo' 
            placeholder='Contraseña'/>
          <input 
            type='submit' 
            value="Crear cuenta" 
            name='btnRegistrate' 
            id='btnRegistrate' 
            className='registrate__form__button'/>
        </form>
      </main>
    </>
  )
}

