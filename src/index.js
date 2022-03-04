import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <>
    <div className='marco'>
   <div className='encabezado'>
     <img src='http://187.216.2.135/tutorias/logo/itesrc.png'/>
   <h1>Catálogo de carreras</h1>  
   </div>
   <div>
   <App style="display:block;"/>
     <FormAgregar style="display:block;" /><br/>
 
   </div>

   </div>  
    </>
    
  </React.StrictMode>,
  document.getElementById('root')
);

function FormAgregar(){
  return (
    <form >
        
      <label for="name">Nombre de la carrera:</label>
      <input type="text" placeholder='Nombre de la carrera' name='name'  className="form-control" />
      <label for="Correo Electrónico">Correo electrónico del coordinador:</label>
      <input type="email" placeholder='ejemplo@hotmail.com' name='email' className="form-control"/>
      <label for="password">Contraseña</label>
      <input type="password" placeholder='Contraseña' name='password' className='form-control'></input>
      <input type="submit" className="btn btn-success" ></input>
   </form>
  );
  }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
