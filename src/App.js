import React, { Component } from 'react';
import PokemonContainer from './PokemonContainer'
import './App.css';

import pokemonData from './pokemons.js'

class App extends Component {
  state = {
    pokemons : pokemonData,
    filter: '',
    selectedPokemon: false
  }

  updateFilter = newFilter => {
    this.setState({ filter: newFilter })
  }

  filterPokemon = () => {
    const pokemons = this.state.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.state.filter.toLowerCase())
    )
    return pokemons
  }

  render() {
    return (
      <div className="block">
        <img id="pokemon-logo" src="https://i5.walmartimages.com/asr/6eff8d94-594c-4435-8ef4-a4fa33e0a691_1.c04cc9fbff7fa4ece7ddce2f2f7a8474.jpeg" alt="new"/>
        <div id="pokemon-search-form">
          {
            <input id='pokemon-search-input'
              onKeyUp={event => this.updateFilter(event.target.value)}
              placeholder='filter by pokeName'
            />
          }</div>

        {<PokemonContainer pokemons={this.state.pokemons} pokemons={this.filterPokemon()}/>}
      </div>
    );
  }
}

export default App;
