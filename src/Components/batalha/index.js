import React, { Component } from 'react';
import './style.css';

import {waterCannon , compPokemon} from './atacks.js';


class Modobatalha extends Component{
render(){

  return(
<div>
<div className="game">
  <div className="opponent">
    <div className="stats">
      <div className="top">
    
        <div id = "apHP" className="hp-count">100</div>
      </div>
      <span className="name">
        kimeramon
      </span>
      <span className="level">
        100
      </span>
    </div>
    <img className="pokemon" src={require('../../assets/img/digimon/agumon/kimera.gif')} alt ="A sprite of pikachu" id = "photopika"/>
  </div>
  <div className="player">
    <div className="stats">
      <div className="top">
   
        <div id = "myHP" className="hp-count">100</div>
      </div>
      <span className="name">
       Agumon
      </span>
      <span className="level">
        100
      </span>
    </div>
    <img className="pokemon" src={require('../../assets/img/digimon/agumon/metalgreymon.gif')} alt="A gif from blastoises back sprite" />
  </div>
</div>
<div className="box">
  <div id = "message" className="message">
    O que o Digigimon deve fazer?
  </div>
  <div className="actions">
    <button className='button' onClick ={waterCannon}>Chama nenem</button>
    <button onClick ='{teste}'>Chama nenem</button>
    <button onClick ='{teste}'>Chama nenem</button>
    <button onClick ='{teste}'>Chama nenem</button>
 
  </div>
  <div className = "continue">
    <button onClick ={compPokemon}>Continue</button>
  </div>
</div>


</div>


);


}
}



export default Modobatalha ;