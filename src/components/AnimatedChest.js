import '../assets/css/AnimatedChest.css';
import React from "react";
import {ethers} from "ethers";
import {AppContext} from "../Context/AppContext";

import {Character } from "../config/contracts";

class AnimatedChest extends React.Component {

    state = {}
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    async componentDidMount() {
        if (typeof window.ethereum !== 'undefined') {
            const [account] = await window.ethereum.request({method: 'eth_requestAccounts'})
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const contract = new ethers.Contract(Character.address, Character.contract.abi, provider)
            const balance = await contract.balanceOf(account)

            if (balance > 0) {
                this.setState({isOpen: true})
                this.props.isAlreadyOpen()
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isOpen !== this.state.isOpen) {
            document.getElementsByClassName('chest')[0].classList.toggle('active');
        }
    }

    render() {

        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        }

        const transferCharacter = async () => {
            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                const signer = provider.getSigner()
                const contract = new ethers.Contract(Character.address, Character.contract.abi, signer)
                console.log(this.context)
                const transaction = await contract.mint(this.context.account.address, 1)
                await transaction.wait()

                console.log(`1 Character successfully sent to ${this.context.address}`)
                this.props.isAlreadyOpen()
            }
        }

        const toggleChest = async (e) => {
            e.preventDefault();
            if (!this.state.isOpen) {
                this.setState({isOpen: true});
            }
            sleep(2000).then(() => {
                transferCharacter()
            })
        }
        return (
            <div className="chest" onClick={toggleChest}>
                <div className="chest__top">
                    <div className="chest__top__front">
                        <div className="chest__top__front--wood"/>
                        <div className="chest__top__front--panel-bottom"/>
                        <div className="chest__top__front--panel-left"/>
                        <div className="chest__top__front--panel-right"/>
                        <div className="chest__top__front--lock">
                            <div className="chest__top__front--lock--keyhole"/>
                        </div>
                    </div>
                    <div className="chest__top__back">
                        <div className="chest__top__back--wood"/>
                        <div className="chest__top__back--panel-left"/>
                        <div className="chest__top__back--panel-right"/>
                        <div className="chest__top__back--panel-bottom">
                            <div className="chest__top__back--panel-bottom-inner"/>
                        </div>
                        <div className="chest__top__back--lock">
                            <div className="chest__top__back--lock--keyhole"/>
                        </div>
                    </div>
                </div>
                <div className="chest__lingots">
                    <div className="chest__lingots--lingot-1"/>
                    <div className="chest__lingots--lingot-2"/>
                    <div className="chest__lingots--lingot-3"/>
                </div>
                <div className="chest__bottom">
                    <div className="chest__bottom--wood"/>
                    <div className="chest__bottom--panel-bottom"/>
                    <div className="chest__bottom--panel-left"/>
                    <div className="chest__bottom--panel-right"/>
                </div>
                <div className="chest__shadow"/>
            </div>
        );
    }
}

export default AnimatedChest;
