import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const url = "./doctors.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <>
            <div className="doctors-container pb-5">
                <div className="container">
                    <h2 id="services" className="text-center my-5"><img src="https://i.ibb.co/CwFbCwJ/heart-beat-2.png" className="heart-beat" alt="" /> Meet Our <span className="fw-bold text-danger">Doctors</span> <img src="https://i.ibb.co/tZkdnKW/heart-beat.png" className="heart-beat" alt="" /></h2>
                    <div className="row g-4">
                        {
                            doctors.map(doctor =>
                                <Doctor
                                    key={doctor.name}
                                    doctor={doctor}
                                ></Doctor>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctors;