import React from "react";
import {createContext} from "react";


const account = {
    address: '',
    balance: 0
};

const setAccount = (value) => {
    account.address = value.address;
    account.balance = value.balance;
};

// AppContext
// This is the context that will be used by the application.
export const AppContext = createContext(
    {
        account,
        setAccount
    }
);

export class AppContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account,
            setAccount
        };
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}