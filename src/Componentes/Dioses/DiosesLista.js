import React from 'react'


const DiosesLista = (props) => {
    return(
        <ul className="collection with-header">
            <li className="collection-header"><h4>Dioses</h4></li>
            {
                 props.listaDioses.map( ( elemento ) => {
                           return (  
                                <li 
                                    className="collection-item"
                                    key={ elemento._id }
                                    onClick={ props.actualizarDios.bind(this , elemento   ) }
                                >
                                    { elemento.Dios}  
                                </li>
                           ) 
                 } )   

            }
      </ul>
    )
}

export default DiosesLista
