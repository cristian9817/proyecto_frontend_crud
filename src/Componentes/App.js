import React from 'react'
import DiosesLista from './Dioses/DiosesLista';
import DiosesDetalle from './Dioses/DiosesDetalle';
import DiosesForm from './Dioses/DiosesForm';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
       Dioses : [],
       DiosActual: {}
    }

    //vincular la funcion actualizarDios al objeto
    this.actualizarDios = this.actualizarDios.bind(this)
   
  }

  componentDidMount(){
      const url="http://localhost:5000/Dioses"
      axios.get(url)
            .then( (respuesta)=> {   
                this.setState({
                      Dioses: respuesta.data
                })  
            })
            .catch( (error) => {console.log(error)}  )
  }


  //funcion para asignar DiosActual
  actualizarDios(Dios) {
      this.setState({
          DiosActual: Dios
      })
  }


  render(){
    return (
      <div className="container-fluid">
          <div className="row">
              <div className="col s12">
                <nav>
                    <div className="nav-wrapper blue darken-4">
                    <a href="#!" className="brand-logo ">Dioses</a>
                   
                    </div>
                </nav>
              </div>
          </div>
          <div className="row">
              <div className="col s3">
                  <DiosesLista  
                            listaDioses={ this.state.Dioses } 
                            actualizarDios = { this.actualizarDios }
                  />
              </div>
              <div className="col s9">
                  <DiosesDetalle  Dios={ this.state.DiosActual }  />
              </div>
             
          </div>
          <div className="row">
              <div className="col s12">
                  <DiosesForm />
              </div>
          </div>
      </div>
    ); 
  }
}

export default App;
