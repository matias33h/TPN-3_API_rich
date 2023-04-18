import React from 'react'
import { useEffect, useState } from 'react'
import Personaje from './Personaje'
import '/style.css'


const ListarPersonajes = () => {


    const [personajes, setpersonajes] = useState([])

    const page = 2;
   
    useEffect(() => {

        async function fetchData() {

            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
           
            const data = await response.json()
            setpersonajes(data.results)

        }

        fetchData()



    }, [])



    return (

        
         <div className='container-center'>
        <div className='container '>
           <div className='row'>
           {/* <h1 className='text-center display-3 py-4'>kljdssajkldlkas</h1> */}
                   

           {
                personajes.map(artista => {

                    return (
                      
                    
                      
                      <div className='col-md-4' key={artista.id} >

                        <br> 
                        </br>
                        <br> 
                        </br>


                       <Personaje key={artista.id} artista={artista} />

                       </div>




                    )
                })
            }

           </div>
    
        </div>
        </div>
    )
}

export default ListarPersonajes