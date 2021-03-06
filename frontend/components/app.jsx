import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';
import Results from './results/results';
import ShoeContext from '../context/shoeContext';
import Splash from './splash/Splash';
import UserContext from '../context/userContext';
import { fetchUser } from '../api/user_api';

const App = () => {
    const id = localStorage.getItem('user');
    const [user, setUser] = useState();
    if (id) {
        fetchUser(id).then(res => {
            if (res.id) setUser(res);
        }).fail(() => localStorage.removeItem('user'));;
    }

    const [started, setStarted] = useState(false);
    const [question, setQuestion] = useState(1);
    const [maxQuestion, setMaxQuestion] = useState(1);
    const [style, setStyle] = useState();
    const [colorAmount, setColorAmount] = useState();
    const [colorPrimary, setColorPrimary] = useState();
    const [colorSecondary, setColorSecondary] = useState();
    const [price, setPrice] = useState();
    const [shoes, setShoes] = useState();
    const [searching, setSearching] = useState();
    
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
                    price,
                    setPrice,
                    shoes,
                    setShoes,
                    searching,
                    setSearching
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
                    <Footer />
                </div>

            </ShoeContext.Provider>
        </UserContext.Provider>
    )
}

export default App;