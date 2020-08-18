import React, { Component } from 'react';
import firebase from './connectfb';
import Home from './Components/home';
import './style.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            user: null

        };
       
        this.cadastrar = this.cadastrar.bind(this);
        this.logar = this.logar.bind(this);
        this.auth = this.auth.bind(this);
        this.sair = this.sair.bind(this);
       firebase.auth().signOut();

    }


    componentDidMount() {
        this.auth();
        
       
    }



    auth() {
        firebase.auth().onAuthStateChanged((userid) => {
            if (userid) {
                this.setState({ user: userid });
            }
        })
    }



    cadastrar() {

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .catch((error) => {

                alert('senha incorreta' + error.code);

            })

    }
    logar() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .catch((error) => {
                alert('Codigo de ERROR' + error.code)
            });
    }


    sair() {
        firebase.auth().signOut()
            .then(() => {
                this.setState({ user: null });
                alert('deslogado com sucesso');

            })
    }


    render() {

        return (

            <div>
                {
                    this.state.user ?
                        <div id='paineladm'>
                         painel admin
                        <button onClick={this.sair}>sair</button>
                        
                            <div>
                                <Home  />
                            </div>
                        </div>
                        :
                        <div>
                            
                            <img id='logo'alt='dmo' src={require('./assets/img/695497.png')} />
                            <div id='home'>

                                <h4  > Seja bem vindos ao mundo digimon</h4>

                                <h4>email:</h4>
                                <input type='text'  id='text' value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                <h4>senha:</h4>
                                <input type='text'  id='text' value={this.state.senha} onChange={(e) => { this.setState({ senha: e.target.value }) }} />
                                <br />
                                <button id='but' onClick={this.logar}>Logar</button>
                                <br />
                                <button id='but' onClick={this.cadastrar}>  cadastrar</button>

                                <button id='but' onClick={()=>{this.setState({ senha : 'evolution'})}}>  senha</button>

                                <h3>{this.state.email} CONECTANDO AO DIGIMUNDO</h3>
                            </div>
                            
                            <embed  width='1' height='1' type="audio/mp3"  src={require('./assets/music/digimon.mp3')} volume="60"  autostart="true" />

                        </div>
                }
            </div>

        );
    }
}

export default App;