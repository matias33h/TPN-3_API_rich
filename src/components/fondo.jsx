import React from 'react'
import '/style.css'
// import HacerFetch from './HacerFetch'
import Button from './Button'

function Fondo() {



  return (


   <header className='header content '>

    {/* vamos acrear 3 secciones video es el elemnto que esta alfondo la segunda capa es un  fondo transparente y el primero es la informacion*/}
     {/* capa para el fondo que contiene el video */}
    <div className='header-video'>
     
     <video src="/public/pexels-engin-akyurt-1943483-2560x1440-25fps.mp4" muted autoPlay="true"loop ></video>

    </div>
    
     {/* capa para el color */}
    <div className='header-overlay'>


    </div>

{/* capa que contendra las tarjetas */}
    <div className='header-content'>

      <Button />

    </div>

   </header>








  )
}

export default Fondo