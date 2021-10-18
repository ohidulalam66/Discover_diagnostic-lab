import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="banner-container">
                <div className="row container">
                    <div className="col-md-6 col-12 d-flex justify-content-center left-container">
                        <div>
                            <h1>We Care <span className="fw-bold text-danger">forYou</span> <a href="#services"><i className="fas fa-plus-square text-success"></i> </a></h1>
                            <p>
                                We place our patients and their needs in the center of all we do. Discover strives to always remain the most trusted partner in tomorrow’s healthcare industry. Our dedication to Quality, Customer Service, Innovation, Advanced Technology and Research is what separates us from our competition.
                            </p>
                            <button className="my-3 all-btn">Emergency</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;