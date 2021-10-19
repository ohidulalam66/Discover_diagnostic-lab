import React from 'react';
import { Link } from 'react-router-dom';
import './Questions.css';

const Questions = () => {
    return (
        <>
            <div className="question-bg">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4 col-12 pb-4">
                            <h1 className="text-dark text-start question-header"><span className="fw-bold">Accuracy</span> Is Our Hallmark!</h1>
                            <Link to="/"><button className=" ms-4 service-btn fw-bold">View our Services</button></Link>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="row g-4">
                                <div className="col-md-6 col-12">
                                    <div className="d-flex">
                                        <i className="fas fa-plus-square me-3 icon"></i>
                                        <div>
                                            <h3>WHO WE ARE</h3>
                                            <p>Next Generation Diagnostics Lab for Disease Stratification and Therapy Selection</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="d-flex">
                                        <i className="fas fa-briefcase-medical  me-3 icon"></i>
                                        <div>
                                            <h3>WHAT WE DO</h3>
                                            <p>We are Focused on Bringing Advanced Testing Techniques & Expertise to Bangladesh.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="d-flex">
                                        <i className="fas fa-user-md me-3 icon"></i>
                                        <div>
                                            <h3>WHY DISCOVER</h3>
                                            <p>Richest Menu of High-end Tests, Second Opinion on Every Test, Shortest Turn Around Time</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="d-flex">
                                        <i className="fas fa-heartbeat me-3 icon"></i>
                                        <div>
                                            <h3>CORE BELIEF</h3>
                                            <p>Veritable: Unique Diagnostics with Second Opinion on Every Test</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Questions;