import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Login from './Login';

const Register = ({ setModComp, history }) => {
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [save, setSave] = useState(false);
    const [err, setErr] = useState('');

    const handleLogin = () => {
        setModComp(
            <Login setModComp={setModComp} />
        );
    }

    const handleChange = (e, type) => {
        const val = e.currentTarget.value;
        if (type === 'email') {
            setEmail(val);
        } else if (type === 'pass1') {
            setPass1(val);
        } else {
            setPass2(val);
        }
    }

    const handleCheck = () => {
        save ? setSave(false) : setSave(true);
    }

    const handleSubmit = () => {
        if (!email.length) {
            setErr('Please Insert Email');
        } else if (!pass1.length || !pass2.length) {
            setErr('Please Insert Passwords');
        } else if (pass1 != pass2) {
            setErr('Passwords Must Match');
        } else {
            save ? (
                localStorage.setItem('user', email)
            ) : (
                localStorage.removeItem('user')
            );

            const obj = { email: email };
            // setUser(obj.email);
            setModComp();
        }
    }

    return (
        <div className="form">
            <div className="form-title">
                <h2>Register</h2>
                <p>or</p>
                <h6 onClick={handleLogin}>Login</h6>
            </div>

            <form>
                <label>Email
                    <input 
                        onChange={(e) => handleChange(e, "email")} 
                        placeholder="Email"
                        type="text"/>
                </label>

                <label> Password
                    <input 
                    onChange={(e) => handleChange(e, "pass1")} 
                    placeholder="Password"
                    type="password"/>
                </label>

                <label>Repeat Password
                    <input 
                    onChange={(e) => handleChange(e, "pass2")} 
                    placeholder="Password"
                    type="password"/>
                </label>

                <label>Remember me?
                    <input 
                        onChange={handleCheck} 
                        id="form-check"
                        type="checkbox" />
                </label>
            </form>

            { err &&
                <p className="form-err">{err}</p>
            }

            <div className="form-btn" onClick={handleSubmit}>
                <p>Register</p>
            </div>
        </div>
    )
}

export default withRouter(Register);