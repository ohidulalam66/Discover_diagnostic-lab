import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Menubar.css';

const Menubar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="https://i.ibb.co/GJLL1Q4/logo.png" className="img-fluid header-logo" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  fw-bold ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {
                                user.email ?
                                    <li className="nav-item">
                                        <Link to="/login" onClick={logOut}>Log out</Link>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <Link to="/login">Login</Link>
                                    </li>
                            }
                            {user.email && <span className="px-2">{user.displayName || user.email}</span>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Menubar;