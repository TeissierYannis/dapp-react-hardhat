import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route
} from "react-router-dom";
import {Routes} from 'react-router';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DappTest from "./views/DappTest";
import Game from "./views/Game";

const rootElement = document.getElementById('root')
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/dapp" element={<DappTest/>}/>
                <Route path="/game" element={<Game/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
