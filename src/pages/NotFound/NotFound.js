import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className="not-found-bg">
                <div className="d-flex justify-content-center">
                    <Link to="/"><button className="my-3 mx-2 service-btn ">Back Home</button></Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;