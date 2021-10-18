import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css';

const Menubar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-fixed">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="https://i.ibb.co/86MnRyt/logo.png" className="img-fluid header-logo" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  fw-bold ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Menubar;