import React from 'react'

class Pokemon extends React.Component{
    state = {
        facing: "back"
    }
    render(){
        return(
            <div className="pokemon-container">
                <div className="pokemon-frame">
                    <h1 className="center-text">{this.state.facing === "back" ?
                    this.props.pokemon.name.split("").reverse().join(""):
                    this.props.pokemon.name}</h1>
                    <div className="pokemon-inside-div">
                        <div className="pokemon-inside-div-div">
                            <img 
                                src={this.props.pokemon.sprites[this.state.facing]} 
                                onMouseEnter={() => this.setState({facing: "front"})}
                                onMouseOut={() => this.setState({facing: "back"})}
                                alt="new"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

Pokemon.defaultProps = {
    pokemon: {name: 'Cambizarre'}
}

export default Pokemon