import React from 'react'
import axios from 'axios'

class DiosesForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            
        }
    }


    //funcion para enviar request POST a endpoint
    submitNuevoDios( event ){
        //anular comportamiento por defecto del form
        event.preventDefault()
        //peticion con axios
        axios.post('http://localhost:5000/Dioses' , {
                                                           Dios: this.refs.dios.value,
                                                           Panteon:  this.refs.panteon.value,
                                                           Habilidad_Definitiva:  this.refs.habilidad.value,
                                                           Categoria:  this.refs.categoria.value,
                                                           
                                                       }
        ).then(  respuesta =>{ console.log(respuesta.data)
        window.location.reload()})
         .catch( error => console.log(error)  )

    }

    render(){
       return(
        <div className="row">
            <h5 className="center"> Nuevo Dios  </h5>  
            <form className="col s12" onSubmit={ this.submitNuevoDios.bind(this) }>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="nombre" ref="dios" type="text"  />
                        <label htmlFor="nombre">Dios</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="apellido" ref="panteon" type="text" />
                        <label htmlFor="apellido">Panteon</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="email" ref="habilidad" type="text" />
                        <label htmlFor="email">Habilidad Definitiva</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="telefono" ref="categoria" type="text" />
                        <label htmlFor="telefono">Categoria</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <button type="submit" className="btn waves-effect waves-light" name="action" >
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </div>
       )     
    }

}

export default DiosesForm