import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import ShoeContext from '../../context/shoeContext';
import UserContext from '../../context/userContext';

import Modal from '../modal/modal';
import Login from './Login';
import { logout } from '../../api/session_api_util';
import Register from './Register';

const Navbar = ({ history }) => {
    const { setQuestion, setStarted } = useContext(ShoeContext);
    const { user, setUser } = useContext(UserContext);
    const [modComp, setModComp] = useState();

    const handleHome = () => {
        setStarted(false);
        setQuestion(1);
        history.push('/');
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

    const handleLogout = () => {
        localStorage.removeItem('user');
        logout().then(res => setUser());
    }

    const list = user ? (
        <ul>
            <li onClick={() => history.push('/profile')}>Home</li>
            <li onClick={handleLogout}>Sign Out</li>
        </ul>
    ) : (
        <ul>
            <li onClick={() => handleRight('login')}>Sign In</li>
            <li onClick={() => handleRight('register')}>Sign Up</li>
        </ul>
    )
    
    return (
        <div>
            <div className="navbar">
                <h1 onClick={handleHome}>Sneaker Recs</h1>
                { list }
            </div>

            <Modal component={modComp} func={setModComp} />
        </div>
    )
}

export default withRouter(Navbar);