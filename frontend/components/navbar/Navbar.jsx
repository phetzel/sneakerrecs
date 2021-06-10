import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import shoeContext from '../../context/shoeContext';

import Modal from '../modal/modal';
import Login from './Login';
import Register from './Register';

const Navbar = ({ history }) => {
    const { setQuestion, setStarted } = useContext(shoeContext);
    const [modComp, setModComp] = useState();

    const handleHome = () => {
        setStarted(false);
        setQuestion(1);
        history.pushState('/')
    }

    const handleRight = comp => {
        if (comp === 'login') {
            setModComp(
                <Login setModComp={setModComp} />
            )
        } else {
            setModComp(
                <Register setModComp={setModComp} />
            )
        }
    }
    
    return (
        <div>
            <div className="navbar">
                <h1 onClick={handleHome}>Sneaker Recs</h1>
                <ul>
                    <li onClick={() => handleRight('login')}>Sign In</li>
                    <li onClick={() => handleRight('register')}>Sign Up</li>
                </ul>
            </div>

            <Modal component={modComp} func={setModComp} />
        </div>
    )
}

export default withRouter(Navbar);