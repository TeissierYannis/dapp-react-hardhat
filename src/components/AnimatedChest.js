import '../assets/css/AnimatedChest.css';
import React from "react";

class AnimatedChest extends React.Component {

    state = {}

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isOpen !== this.state.isOpen) {
            document.getElementsByClassName('chest')[0].classList.toggle('active');
        }
    }

    render() {

        const toggleChest = (e) => {
            if (!this.state.isOpen) {
                this.setState({isOpen: true});
            }
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
