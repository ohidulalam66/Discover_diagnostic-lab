import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `./api/fakeservice${serviceId}.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    return (
        <>
            <h2>ServiceDetails{serviceId}</h2>
        </>
    );
};

export default ServiceDetails;