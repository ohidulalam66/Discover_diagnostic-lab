import React from 'react';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { name, image, specialist } = doctor;
    return (
        <>
            <div className="col-md-3 col-12">
                <div className="col">
                    <div className="border p-3">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="">
                            <h5 className=""><i className="fas fa-user-md fs-4 my-3 text-danger me-2"></i>{name}</h5>
                            <p className=""><span className="fw-bold"><i className="fas fa-heart fs-4 text-danger me-2"></i>Specialist:</span> {specialist}</p>
                            <button className="d-block mx-auto service-btn fw-bold">APPOINTMENT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctor;