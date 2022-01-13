import '../assets/css/Nav.css';
import {Link} from "react-router-dom";
import React from "react";
import {ethers} from "ethers";
import Token from "../artifacts/contracts/TestToken.sol/TestToken.json";

const tokenAddress = "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318"

class Nav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            balance: 0,
            account: null,
        }
    }

    /**
     * Get the balance and the address of the user's account
     * @returns {Promise<void>}
     */
    async getAccount() {
        if (typeof window.ethereum !== 'undefined') {
            const [account] = await window.ethereum.request({method: 'eth_requestAccounts'})
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const contract = new ethers.Contract(tokenAddress, Token.abi, provider)
            const balance = await contract.balanceOf(account)

            this.setState({
                balance: balance,
                account: account
            })
        }
    }

    componentDidMount() {
        this.getAccount().then();
    }

    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/dapp">DApp Test</Link>
                <Link to="/game">Game Test</Link>
                <div className="right-align">
                    <div className={`${this.state.account !== null ? "isLoggedIn" : "isLoggedOut"}`}/>
                    <p className="wallet-amount">
                        Wallet : <span>{this.state.balance.toString()}</span>
                    </p>
                </div>
            </nav>
        );
    }
}

export default Nav;
