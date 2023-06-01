import React from 'react';
import playerX from '../../img/playerX';
import playerO from '../../img/playerO';
import './styles.css'

const Player = (props) => {
    const players = [];
    players['x'] = playerX
    players['o'] = playerO

    
    return (<button className="player">
        <img src={props.players} alt={`Jogador ${props.player}`}/>
    </button>)
}

export default Player