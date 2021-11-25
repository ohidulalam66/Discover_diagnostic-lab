import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer-container text-color">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-4 col-12 text-start">
                            <img src="https://i.ibb.co/GJLL1Q4/logo.png" className="img-fluid header-logo mb-3" alt="" />
                            <p><span className="fw-bold">Discover Diagnostic Lab</span> is one of the leading private healthcare providers in Bangladesh having an impressive 'Reach', providing superior quality diagnostics services to its patients through a very efficient network of outreach centers and collection points located strategically across the greater Chittagong division.
                            </p>
                        </div>
                        <div className="col-md-4 col-12 text-start">
                            <h5 className="text-white">Recent Posts</h5>
                            <hr />
                            <p>
                                Post-COVID conditions are referred to by a wide range of names, including “long COVID.
                                <hr />
                                Post-COVID conditions (i.e., long COVID and PASC) were first described in adults. But several studies.
                                <hr />
                                Reports indicate some patients may develop post-acute COVID-19 syndrome, in which they experience persistent symptoms after recovering.
                            </p>

                        </div>
                        <div className="col-md-4 col-12 text-start">
                            <h5 className="text-white">Categories</h5>
                            <hr />
                            <p className="link">
                                Environment
                                <hr />
                                Health Basics
                                <hr />
                                Lifestyle
                                <hr />
                                Motivation
                                <hr />
                                Uncategorized
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex  justify-content-between">
                        <p>© Copyright 2021. All Rights Reserved by Discover Diagnostic Laboratory (Pte.) Ltd.</p>
                        <div className="">
                            <i className="fab fa-twitter mx-3 icon-footer "></i>
                            <i className="fab fa-facebook-square mx-3 icon-footer "></i>
                            <i className="fab fa-youtube mx-3 icon-footer "></i>
                            <i className="fab fa-skype mx-3 icon-footer "></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;