import axios from '../utils/axios';
import React, { useEffect, useState, useRef, useContext } from 'react';
import ShouldRender from '../common/ShouldRender';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const userState = useContext(AppContext);

    const emailRef = useRef(null);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    const [hasError, setError] = useState(false);

    const navigate = useNavigate();

    const onLogin = async (evt) => {
        try {
            evt.preventDefault();
            const res = await axios().post('/api/users/signin', user);
            localStorage.setItem('user', JSON.stringify(res.data));
            userState.setAuthenticated(true);
            // navigate
            navigate('/products');
        } catch (err) {
            setError(true);
        }
    };

    const onInputChange = (evt) => {
        const newUser = { ...user, [evt.target.name]: evt.target.value };
        setUser(newUser);
    };

    return <div className="container">
        <h1>Login</h1>

        <div className="col-5">
            <ShouldRender cond={hasError}>
                <div className="alert alert-danger">
                    Wrong username or password
                </div>
            </ShouldRender>
            <form onSubmit={onLogin}>
                <div>
                    <label for="email" className="form-label">Email</label>
                    <input ref={emailRef} onChange={onInputChange} name="email" id="email" className="form-control" type="text" placeholder="email" />
                </div>
                <div>
                    <label for="password" className="form-label">Password</label>
                    <input onChange={onInputChange} name="password" id="password" className="form-control" type="password" placeholder="Password" />
                </div>
                <div className="m-2">
                    <button className="btn btn-sm btn-success" type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
}


export default Login;
