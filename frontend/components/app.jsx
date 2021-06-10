import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import ShoeContext from '../context/shoeContext';
import Splash from './splash/Splash';

const App = () => {
    const [started, setStarted] = useState(false);
    const [question, setQuestion] = useState(1);
    const [style, setStyle] = useState();
    const [colorAmount, setColorAmount] = useState();
    const [colorPrimary, setColorPrimary] = useState();
    const [colorSecondary, setColorSecondary] = useState();
    
    return (
        <ShoeContext.Provider
            value={{ 
                started,
                setStarted,
                question, 
                setQuestion,
                style,
                setStyle,
                colorAmount,
                setColorAmount,
                colorPrimary,
                setColorPrimary,
                colorSecondary,
                setColorSecondary
                }}>

            <div className="app">
                <Navbar />
                
                <Switch>
                    <Route exact path="/" component={Splash} />
                </Switch>
            </div>

        </ShoeContext.Provider>
    )
}

export default App;