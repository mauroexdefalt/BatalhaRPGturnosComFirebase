import React from 'react';
import { Component } from 'react';
import './style.css';
import Modobatalha from '../batalha';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            digivolucao: [
             'Agumon.gif'  
            ,'greymon1.gif'
            ,'metalgreymon.gif'
            ,'war3.gif'],

            valor : 0 ,

            batalha : null

        }
        this.digivolver = this.digivolver.bind(this);
        this.voltar = this.voltar.bind(this);
        this.procurarbatalha=this.procurarbatalha.bind(this);
    }

    digivolver(){
      
        let state = this.state ;
        state.valor += 1 ;
        if(this.state.valor <= 3){
          this.setState(state);
        }else{
            alert('voce ainda nao tem espirito de equipe o suficiente para o proximo nivel')
        }
          
    }
    voltar(){
  let state = this.state ;
  state.valor = 0 ;
  this.setState(state);
    }

    procurarbatalha(){
        let state = this.state ;
        state.batalha =  true;
        this.setState(state);

    }

    render() {
        return (
            <div>
            

                        
                            { this.state.batalha ?
                            <div>
                         <Modobatalha/>
                         </div>
                              :
                              <div id='mestre'>  
                             
                            <img alt='digimon'src={require(`../../assets/img/digimon/agumon/${this.state.digivolucao[this.state.valor]}`)} />
                            <button id='digivolve' onClick={this.digivolver} >digivolver</button>
                             <button id='digivolve' onClick={this.voltar} >voltar ao normal</button>
                             <button id='batalhar' onClick={this.procurarbatalha} >procurar batalha</button>
                             <embed  width='1' height='1' type="audio/mp3"  src={require('../../assets/music/digimon.mp3')} volume="60"  autostart="true" />
                            </div>
                        }
                     
               
            </div>
        );
    }


}


export default Home;