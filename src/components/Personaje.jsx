import React,{useState} from 'react'
import './cartas.css'
import HacerFetch from './HacerFetch'


const Personaje = ({artista}) => {


  // let idTargeta=document.getElementById("back")
  const[eliminar,setEliminar]= useState(true) 
  const[traer,setTraer]= useState(false) 
  


  return (

   <div className='container'>



           { eliminar && <div   className='vuelta'>
      {/* <h2 className='r'>{artista.name}</h2>  */}
          
            <img className='imgn' src={eliminar && artista.image} alt={ eliminar && artista.name} />
            {/* <input className="back" src={artista.name}/> */}
            
             <div className='back'>
            <p> {eliminar &&  `Name:${artista.name}`}</p>  
            <p>{eliminar && `Status:${artista.status}`}</p>  
            <p>{eliminar && `Specie:${artista.species}`}</p>  

          <div>

          
           <button  onClick={()=>{setEliminar(false) }}>Eliminar</button>
          
          </div>
         
             </div>
               
          </div>}
   
                  

   </div>
  )
}

export default Personaje