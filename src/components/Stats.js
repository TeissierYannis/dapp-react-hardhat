import React from "react";

import "../assets/css/Stats.css"

import character from "../assets/images/0_Citizen_Walk_000.png";
import knife from "../assets/images/knife.png";

class Stats extends React.Component {

    state = {}

    constructor(props) {
        super(props);
        this.state = {
            stats: {
                level: 12,
                xp: 24,
                life: 243,
                strength: 24,
                defense: 18,
                agility: 36,
                speed: 13
            },
            character: character,
            item: {
                name: "knife",
                description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
                image: knife,
                bonus: {
                    life: 0,
                    strength: 4,
                    defense: 3,
                    agility: -2,
                    speed: 0
                }
            }
        }
    }

    render() {
        // html code for inventory game
        return (
            <div className="statsContainer">
                <div className="level">
                    Niveau: {this.state.stats.level}
                    <progress value={this.state.stats.xp} max="100"/>
                </div>
                <div className="character">
                    <img src={this.state.character} alt="Character name"/>
                </div>
                { this.state.item.bonus.life !== 0 ?
                    <div className={this.state.item.bonus.life > 0 ? 'bonus-life bonus-positive' : 'bonus-life bonus-negative'}>{this.state.item.bonus.life}</div>
                    : null
                }
                <div className="stat life">
                    Vie: <span>{this.state.stats.life} ❤️</span>
                </div>
                { this.state.item.bonus.strength !== 0 ?
                    <div className={this.state.item.bonus.strength > 0 ? 'bonus-strength bonus-positive' : 'bonus-strength bonus-negative'}>{this.state.item.bonus.strength}</div>
                    : null
                }
                <div className="stat strength">
                    Force: <span>{this.state.stats.strength} ⚔️</span>
                </div>
                { this.state.item.bonus.defense !== 0 ?
                    <div className={this.state.item.bonus.defense > 0 ? 'bonus-defense bonus-positive' : 'bonus-defense bonus-negative'}>{this.state.item.bonus.defense}</div>
                    : null
                }
                <div className="stat defense">
                    Défense: <span>{this.state.stats.defense} 🛡️</span>
                </div>
                { this.state.item.bonus.agility !== 0 ?
                    <div className={this.state.item.bonus.agility > 0 ? 'bonus-agility bonus-positive' : 'bonus-agility bonus-negative'}>{this.state.item.bonus.agility}</div>
                    : null
                }
                <div className="stat agility">
                    Agilité: <span>{this.state.stats.agility} ⚡</span>
                </div>
                { this.state.item.bonus.speed !== 0 ?
                    <div className={this.state.item.bonus.speed > 0 ? 'bonus-speed bonus-positive' : 'bonus-speed bonus-negative'}>{this.state.item.bonus.speed}</div>
                    : null
                }
                <div className="stat speed">
                    Vitesse: <span>{this.state.stats.speed} 🚄</span>
                </div>
                <div className="reset">
                    <button>Redistribuer</button>
                </div>
                <div className="item">
                    <img src={this.state.item.image} alt={this.state.item.description}/>
                    <span className="item-info">
                        <h1 className="item-title">{this.state.item.name}</h1>
                        <br/>
                        <p className="item-description">{this.state.item.description}</p>
                    </span>
                </div>
            </div>
        );
    }
}

export default Stats;