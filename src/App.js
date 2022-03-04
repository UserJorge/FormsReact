import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from "reactstrap";
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state={
    data:data
  }
  render(){
    return(
      <>
      <Container>
        <Button color="primary">Insertar nueva carrera</Button>
        <br/>
<Table>
    <thead>
    <tr>
    <th>Nombre de carrera</th>
    <th>Correo electrónico</th>   
    <th>Contraseña</th>
    </tr>
    </thead>
    
  <tbody>
   {this.state.data.map((elemento)=>(
     <tr>
       <td>{elemento.nombre}</td>
       <td>{elemento.correo}</td>
       <td>{elemento.password}</td>
       <td><Button color='primary'>Editar</Button></td>
       <td><Button color='danger'>Eliminar</Button></td>
     </tr>
   ))}
  </tbody>
  </Table>
      </Container>
     
      </>

    )
  }
}
const data=[
  { nombre: 'Ingeniería Mecatrónica',correo:'mecatronica@rcarbonifera.tecnm.mx',password:'******'},
  { nombre: 'Ingeniería en Sistemas Computacionales',correo:'sistemas@rcarbonifera.tecnm.mx',password:'******'},
  { nombre: 'Ingeniería Electromecánica',correo:'electromecanica@rcarbonifera.tecnm.mx',password:'******'},
  { nombre: 'Ingeniería Industrial',correo:'industrial@rcarbonifera.tecnm.mx',password:'******'},
  { nombre: 'Ingeniería Petrolera',correo:'petrolera@rcarbonifera.tecnm.mx',password:'******'},
  { nombre: 'Ingeniería en Administración',correo:'administracion@rcarbonifera.tecnm.mx',password:'******'},
];
export default App;
