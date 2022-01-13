import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";

import './assets/css/App.css';

import DappTest from "./views/DappTest";
import Game from "./views/Game";
import { AppContextProvider } from "./Context/AppContext";

class App extends React.Component {

    render() {
        return (
            <AppContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<DappTest/>}/>
                        <Route path="/game" element={<Game/>}/>
                    </Routes>
                </BrowserRouter>
            </AppContextProvider>
        );
    }
}

export default App;
