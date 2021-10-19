import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="contact-bg py-3">
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <h3 className="text-center py-5 fw-bold">Discover Diagnostic  Laboratory (Pte) Ltd</h3>
                        <div className="contact-icons">
                            <h5 className="py-3">
                                <i className="fas fa-phone-square-alt d-block contact-icon"></i>01755 666969, 01713 487903, 0241355691 & 02 41355692
                            </h5>
                            <h5 className="py-3">
                                <i className="fas fa-globe-americas d-block contact-icon"></i>
                                info@chevronlab.com, admin@chevronbd.com
                            </h5>
                            <h5 className="py-3">
                                <i className="fas fa-map-marked-alt d-block contact-icon"></i>
                                12/12 O. R. Nizam Road, Panchlaish, Chattogram
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;