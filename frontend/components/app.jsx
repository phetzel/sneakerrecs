import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';
import Results from './results/Results';
import ShoeContext from '../context/shoeContext';
import Splash from './splash/Splash';
import UserContext from '../context/userContext';
import { fetchUser } from '../api/user_api';

const App = () => {
    const [user, setUser] = useState();
    const [started, setStarted] = useState(false);
    const [question, setQuestion] = useState(1);
    const [maxQuestion, setMaxQuestion] = useState(1);
    const [style, setStyle] = useState();
    const [colorAmount, setColorAmount] = useState();
    const [colorPrimary, setColorPrimary] = useState();
    const [colorSecondary, setColorSecondary] = useState();
    const [shoes, setShoes] = useState();

    useEffect(() => {
        const id = localStorage.getItem('user');
        if (id) {
            fetchUser(id)
                .then(res => setUser(res))
                .fail(() => localStorage.removeItem('user'));
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
                    maxQuestion,
                    setMaxQuestion,
                    style,
                    setStyle,
                    colorAmount,
                    setColorAmount,
                    colorPrimary,
                    setColorPrimary,
                    colorSecondary,
                    setColorSecondary,
                    shoes,
                    setShoes
                    }}>

                <div className="app">
                    <Navbar />
                    
                    <Switch>
                        <Route exact path="/" component={Splash} />
                        <Route exact path="/results" component={Results} />

                        <Route exact path="/profile" render={() => (
                            user ? (
                                <Profile />
                            ) : (
                                <Redirect to="/" />
                            )
                        )} />

                    </Switch>
                </div>

            </ShoeContext.Provider>
        </UserContext.Provider>
    )
}

export default App;