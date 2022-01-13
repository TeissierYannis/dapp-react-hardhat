import '../assets/css/Nav.css';
import {Link} from "react-router-dom";

function Nav() {

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/dapp">DApp Test</Link>
            <Link to="/game">Game Test</Link>
        </nav>
    );
}

export default Nav;
