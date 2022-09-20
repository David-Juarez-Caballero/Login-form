import { getValue } from '@testing-library/user-event/dist/utils'
import React, {useState} from 'react'

export const Submit = ({setNombreF, setApellidoF, setApodoF, setDeshabilitar}) => {

    const [nombre,setNombre] =useState('')
    const [apellido,setApellido] =useState('')
    const [apodo,setApodo] =useState('')
    
    const deshabilitar = (e) => {
        e.preventDefault();
        if(nombre !== "" && apellido !== "" && apodo !==""){
            setNombreF(nombre);
            setApellidoF(apellido);
            setApodoF(apodo);
            setDeshabilitar('');
        }
        else{
            setDeshabilitar("Faltan Datos");
        }
    } 



  return (
    <div>
        <form onSubmit={deshabilitar}>
        <br/>
        <label>Nombre:</label>
        <input  type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} placeholder = "Ingresa tu nombre"/>
        <br/>
        <br/>
        <label>Apellido:</label>
        <input  type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)} placeholder = "Ingresa tu apellido"/>
        <br/>
        <br/>
        <label>Apodo:</label>
        <input  type="text" value={apodo} onChange={(e)=> setApodo(e.target.value)} placeholder = "Ingresa tu apodo"/>
        <br/>
        <br/>
        <button  id="Enviar" type="submit"> Enviar</button>
        </form>
        <br/>
        <button   id="Limpiar" type="delete" onClick={e=>{setNombre(""), setApellido(""), setApodo(""),
        setNombreF(""), setApellidoF(""), setApodoF("")}}> Limpiar</button>
    </div>
  )
}
