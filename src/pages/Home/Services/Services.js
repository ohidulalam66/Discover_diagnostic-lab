import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = "/services.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <>
            <div className="container my-5">
                <h2 id="services" className="text-center text-danger my-5"><img src="https://i.ibb.co/2Sk6cVx/rod-of-asclepius.png" alt="" /> Our Services <img src="https://i.ibb.co/2Sk6cVx/rod-of-asclepius.png" alt="" /></h2>
                <div className="row g-4">
                    {
                        services.map(service =>
                            <Service
                                key={service.price}
                                service={service}
                            ></Service>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;

/*


*/