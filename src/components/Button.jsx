import React, { useState } from 'react'
import HacerFetch from './HacerFetch'
import '../../style.css'





function Button() {

  

  // inicializa en cero
  const[mostrar,setMostrar]= useState(false) 
  

const handleMostrarComponente = () => {
  setMostrar(!mostrar);

}

return (


  <div>
    <button hidden={mostrar} className='buttMostrar btn btn-outline-danger' onClick={handleMostrarComponente}>Rick and Morty</button>

    { mostrar && <HacerFetch/> }
  </div>
);
}

export default Button

// className='buttMostrar btn btn-outline-danger'
// 
