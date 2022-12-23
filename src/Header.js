import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
            <Link to="/" className="navbar-brand">FSA Products</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div>
                <button className="btn btn-warning m-1">Signup</button>
                <Link to="/login" className="btn btn-success m-1">Login</Link>
                <button onClick={onLogout} className="btn btn-danger m-1">Logout</button>
            </div>
        </div >
    </nav>
};

export default Header;
