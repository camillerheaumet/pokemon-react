import React from 'react'
import Pokemon from './Pokemon'

class PokemonContainer extends React.Component{
 render(){
     return (
     <div>
        {this.props.pokemons.map(pokemon => <Pokemon selectPokemon={this.props.selectPokemon} pokemon={pokemon} />)}
     </div>
    )}
}

export default PokemonContainer