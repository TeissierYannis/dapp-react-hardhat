import '../assets/css/Game.css';
import Nav from "../components/Nav";
import AnimatedChest from "../components/AnimatedChest";
import React from "react";
import Stats from "../components/Stats";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAlreadyOpen: false
        }
    }

    isAlreadyOpen = () => {
        this.setState({
            isAlreadyOpen: true
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Nav/>
                </header>

                <div className="gameContainer">
                    {!this.state.isAlreadyOpen ?
                        <div className="chestContainer">
                            <AnimatedChest isAlreadyOpen={this.isAlreadyOpen}/>
                        </div>
                        : <div className="mainContainer">
                            <Stats/>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Game;
