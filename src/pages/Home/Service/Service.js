import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, image, name, decs } = service;

    const url = `/service/${id}`;
    return (
        <>
            <div className="col-md-4 col-12">
                <div className="cards">
                    <div className="card">
                        <h2 className="card-title">{name}</h2>
                        <img src={image} alt="" />
                        <p className="card-desc">{decs}
                            <br />
                            <Link to={url} className="text-decoration-none"><button className="d-block my-5 mx-auto all-btn fw-bold">Details</button></Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;