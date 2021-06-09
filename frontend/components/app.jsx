import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ShoeContext from '../context/shoeContext';
import Splash from './splash/Splash';

const App = () => {
    const [question, setQuestion] = useState(1);
    const [style, setStyle] = useState();
    const [colorAmount, setColorAmount] = useState();
    const [colorPrimary, setColorPrimary] = useState();
    const [colorSecondary, setColorSecondary] = useState();
    
    return (
        <ShoeContext.Provider
            value={{ 
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
                <Switch>
                    <Route exact path="/" component={Splash} />
                </Switch>
            </div>

        </ShoeContext.Provider>
    )
}

export default App;