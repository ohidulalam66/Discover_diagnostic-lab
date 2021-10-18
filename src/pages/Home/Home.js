import React from 'react';
import Banner from './Banner/Banner';
import Questions from './Questions/Questions';
import Services from './Services/Services';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <Questions />
        </>
    );
};

export default Home;