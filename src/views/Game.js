import '../assets/css/Game.css';
import Nav from "../components/Nav";
import AnimatedChest from "../components/AnimatedChest";
import React from "react";

class Game extends React.Component {

    // get children from Nav

    state = {
        children: null
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Nav ref={(nav) => {
                        this.children = nav
                    }}/>
                </header>

                <div className="gameContainer">
                    <div className="chestContainer">
                        <AnimatedChest/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Game;
