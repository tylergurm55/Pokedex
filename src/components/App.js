import React, { Component } from 'react';
import Props from './Props';
import './css files/App.css';
import Header from './Header';
import RightView from './RightView';
import { Route, Switch } from "react-router-dom"
import PokeList from './PokeMap';
import About from './About';
import Axios from 'axios'




class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };

    this.OnClicks = this.OnClicks.bind(this);
  }

  async OnClicks(id) {
    try{
      const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      console.log(response)
      const pokemon = new Props(response.data);
      this.setState({ pokemon });
    
    }catch(error){
      console.log(error)
    }

  }

  render() {
    return (
      <div>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
          <div>
        <header className="header">
          <Header />
        </header>
                <PokeList OnClicks={this.OnClicks} />
                
                <RightView pokemon={this.state.pokemon} />
              </div>
            )
            } />
            <Route exact path="/path" render={() => (
              <div>
                <About />
              
              </div>
            )
            } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;