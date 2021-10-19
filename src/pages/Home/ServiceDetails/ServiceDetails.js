import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { image, name, price, description } = service;

    useEffect(() => {
        const url = `/api/fakeService${serviceId}.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <>
            <div className="service-bg pb-5">
                <div className="container">
                    <h2 id="services" className="text-center text-danger pt-3"><img src="https://i.ibb.co/CwFbCwJ/heart-beat-2.png" className="heart-beat" alt="" /> Service Detail <img src="https://i.ibb.co/tZkdnKW/heart-beat.png" className="heart-beat" alt="" /></h2>
                    <hr />
                    <div className="row d-flex justify-content-evenly  align-items-center border-4">
                        <div className="col-md-6 col-12">
                            <img src={image} className="img-fluid w-75" alt="" />
                        </div>
                        <div className="col-md-6 col-12">
                            <h1 className="text-success">{name}</h1>
                            <h4 className="">Price: ${price}</h4>
                            <p className="description">{description}</p>
                            <button className="my-3 service-btn">Confirm Service</button>
                            <Link to="/"><button className="my-3 mx-2 service-btn">Back Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;