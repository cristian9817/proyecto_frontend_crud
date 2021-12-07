import axios from 'axios'
import React from 'react'
import foto from './smite.jpg'

const DiosesDetalle = (  {  Dios }  ) => {

     const borrarDios=()=>{
        
       axios.delete(`http://localhost:5000/Dioses/${Dios._id}`)
       .then(  respuesta => {console.log(respuesta.data)
       window.location.reload()})
       .catch(error => console.log(error))
         
   }
   

    return(
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue darken-4">
                <div className="card-image">
                <img src={foto}/>
                </div>
                    <div className="card-content white-text">
                        <span className="card-title"> { Dios.Dios } </span>
                        <p>Panteon: { Dios.Panteon  }</p>
                        <p>Habilidad Definitiva: { Dios.Habilidad_Definitiva  }</p>
                        <p>Categoria: { Dios.Categoria  }</p>
                    </div>
                    <div className="card-action">
                        <a href="#!" onClick={borrarDios}>Eliminar</a>
                    
                    </div>
                </div>
            </div>
      </div>
    )
}


export default DiosesDetalle

