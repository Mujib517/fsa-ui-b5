import React, { useState } from 'react';

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const onLogin = (evt) => {
        console.log("logging in...");
        evt.preventDefault();
        console.log(user);
    };

    const onInputChange = (evt) => {
        const newUser = { ...user, [evt.target.name]: evt.target.value };
        setUser(newUser);
    };

    return <div className="container">
        <h1>Login</h1>
        <div className="col-5">
            <form onSubmit={onLogin}>
                <div>
                    <label for="email" className="form-label">Email</label>
                    <input onChange={onInputChange} name="email" id="email" className="form-control" type="text" placeholder="email" />
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
