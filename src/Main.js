import React, {useState} from 'react'
import { Submit } from './Submit'

import './Main.css'

export const Main = () => {
  
  const [nombre,setNombre] =useState('')
  const [apellido,setApellido] =useState('')
  const [apodo,setApodo] =useState('')
  const [deshabilitar,setDeshabilitar] =useState('')
  
  
    return (
    <>
    <div className='main'>
    <Submit setNombreF={setNombre} setApellidoF={setApellido} setApodoF={setApodo} setDeshabilitar={setDeshabilitar}/>
    <h2> {deshabilitar} </h2> 
    Tus Datos
    <h3>{nombre},{apellido},{apodo}</h3>
    </div>
    </>
    
  )
}
