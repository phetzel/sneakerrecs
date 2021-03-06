import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';

import Login from './Login';
import { signup } from '../../api/session_api_util';
import UserContext from '../../context/userContext';

const Register = ({ setModComp, history }) => {
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [save, setSave] = useState(false);
    const [err, setErr] = useState('');

    const { setUser } = useContext(UserContext);

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

    const handleSubmit = () => {
        if (!email.length) {
            setErr('Please Insert Email');
        } else if (!pass1.length || !pass2.length) {
            setErr('Please Insert Passwords');
        } else if (pass1 != pass2) {
            setErr('Passwords Must Match');
        } else {
            const formData = new FormData();
            formData.append('user[email]', email);
            formData.append('user[password]', pass1);
            formData.append('user[admin]', false);

            signup(formData).then(res => {
                save ? (
                    localStorage.setItem('user', res.id)
                ) : (
                    localStorage.removeItem('user')
                );

                setUser(res);
                setModComp();
                history.push('/profile');
            }).fail(err => setErr(err.responseJSON[0]));
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