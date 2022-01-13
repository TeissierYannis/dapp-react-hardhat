import {useState} from "react";
import {ethers} from "ethers";

import '../assets/css/DAppTest.css';
import Nav from "../components/Nav";

import { Greeter, Token } from "../config/contracts";

function DappTest() {
    const [greeting, setGreetingValue] = useState('');
    const [userAccount, setUserAccount] = useState('');
    const [myAccount, setMyAccount] = useState('');
    const [amount, setAmount] = useState(0);
    const [balance, setBalance] = useState(0);

    async function requestAccount() {
        await window.ethereum.request({method: 'eth_requestAccounts'});
    }

    async function getBalance() {
        if (typeof window.ethereum !== 'undefined') {
            const [account] = await window.ethereum.request({method: 'eth_requestAccounts'})
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const contract = new ethers.Contract(Token.address, Token.contract.abi, provider)
            const balance = await contract.balanceOf(account)
            console.log("Balance : ", balance.toString())
            setBalance(balance)
            setMyAccount(account)
        }
    }

    async function sendCoins() {
        if (typeof window.ethereum !== 'undefined') {
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(Token.address, Token.contract.abi, signer)
            const transaction = await contract.transfer(userAccount, amount)
            await transaction.wait()

            console.log(`${amount} coins successfully sent to ${userAccount}`)

        }
    }

    async function fetchGreeting() {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(Greeter.address, Greeter.contract.abi, provider);

            try {
                const data = await contract.greet()
                console.log('data : ', data)
                setGreetingValue(data)
            } catch (e) {
                console.error('Error : ', e)
            }
        }
    }

    async function setGreeting() {
        if (!greeting) return

        if (typeof window.ethereum !== 'undefined') {
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(Greeter.address, Greeter.contract.abi, signer)
            const transaction = await contract.setGreeting(greeting)
            setGreetingValue('')
            await transaction.wait()
            await fetchGreeting()
        }
    }

    return (
        <div className="App">
            <header className="App-header">

                <Nav/>

            </header>

            <div className="greeting">
                <button className="btn-base" onClick={fetchGreeting}>Fetch Greeting</button>
                <button className="btn-base" onClick={setGreeting}>Set Greeting</button>
                <input
                    onChange={e => setGreetingValue(e.target.value)}
                    placeholder="Set Greeting"
                    value={greeting}
                />
            </div>

            <br/>

            <div className="coins">
                <button className="btn-success" onClick={getBalance}>Get Balance</button>
                <button className="btn-base" onClick={sendCoins}>Send Coins</button>
                <input onChange={e => setUserAccount(e.target.value)} placeholder="Account ID"/>
                <input onChange={e => setAmount(e.target.value)} placeholder="Amount"/>
            </div>

            <div className="accountInformations">
                <h1>My account</h1>
                <p>Account : {myAccount}</p>
                <p>Balance : { balance.toString() }</p>
            </div>


        </div>
    );
}

export default DappTest;
