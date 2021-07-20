import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';

import Register from './Register';
import { login } from '../../api/session_api_util.jsx';
import UserContext from '../../context/userContext';

const Login = ({ setModComp, history }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [save, setSave] = useState(false);
    const [err, setErr] = useState('');

    const { setUser } = useContext(UserContext);

    const handleReg = () => {
        setModComp(
            <Register setModComp={setModComp} />
        );
    }

    const handleChange = (e, type) => {
        const val = e.currentTarget.value;
        type === 'email' ? setEmail(val) : setPass(val);
    }

    const handleCheck = () => {
        save ? setSave(false) : setSave(true);
    }

    const handleSubmit = () => {
        if (!email.length) {
            setErr('Please Insert Email');
        } else if (!pass.length) {
            setErr('Please Insert Password');
        } else {
            const formData = new FormData();
            formData.append('user[email]', email);
            formData.append('user[password]', pass);

            login(formData).then(res => {
                save ? (
                    localStorage.setItem('user', res.id)
                ) : (
                    localStorage.removeItem('user')
                );

                setUser(res);
                setModComp();
            }).fail(err => setErr(err.responseJSON[0]));
        }
    }

    return (
        <div className="form">
            <div className="form-title">
                <h2>Login</h2>
                <p>or</p>
                <h6 onClick={handleReg}>Register</h6>
            </div>

            <form>
                <label> Email
                    <input 
                        onChange={(e) => handleChange(e, "email")} 
                        placeholder="Email"
                        type="text"/>
                </label>

                <label> Password
                    <input 
                        onChange={(e) => handleChange(e, "password")}
                        placeholder="Password"
                        type="password"/>
                </label>

                {/* <label>Remember me?
                    <input 
                        onChange={handleCheck} 
                        id="form-check"
                        type="checkbox" />
                </label> */}
            </form>

            { err &&
                <p className="form-err">{err}</p>
            }

            <div className="form-btn" onClick={handleSubmit}> 
                <p>Login</p>
            </div>

        </div>
    )
}

export default withRouter(Login);