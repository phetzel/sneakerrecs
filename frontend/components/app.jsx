import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import ShoeContext from '../context/shoeContext';
import Splash from './splash/Splash';
import UserContext from '../context/userContext';
import { fetchUser } from '../api/user_api';

const App = () => {
    const [user, setUser] = useState();
    const [started, setStarted] = useState(false);
    const [question, setQuestion] = useState(1);
    const [style, setStyle] = useState();
    const [colorAmount, setColorAmount] = useState();
    const [colorPrimary, setColorPrimary] = useState();
    const [colorSecondary, setColorSecondary] = useState();

    useEffect(() => {
        const id = localStorage.getItem('user');

        if (id) {
            fetchUser(id).then(res => setUser(res));
        }
    }, [])
    
    return (
        <UserContext.Provider
            value={{
                user,
                setUser
            }}>
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
        </UserContext.Provider>
    )
}

export default App;