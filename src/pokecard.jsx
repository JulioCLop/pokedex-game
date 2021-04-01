import React, { Component } from 'react';
import './pokecard.css';


const poke_Api = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)

class PokeCard extends Component {
    render() {

        let imgSrc =`${poke_Api}${padToThree(this.props.id)}.png`
        return (
            <div className="pokecard">
                <h1 className="pokedex-title">{this.props.name}</h1>
                <div className="pokecard-image">
                <img src={imgSrc} alt={this.props.name} />
                </div>
                <div className="pokecard-data"> Type:{this.props.type} </div>
                <div className="pokecard-data">Exp: {this.props.base_experiece}</div>
            </div>
        )
    }
}
     
    

export default PokeCard;