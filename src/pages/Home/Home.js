import React from 'react';
import Banner from './Banner/Banner';
import Doctors from './Doctors/Doctors';
import Questions from './Questions/Questions';
import Services from './Services/Services';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <Questions />
            <Doctors />
        </>
    );
};

export default Home;