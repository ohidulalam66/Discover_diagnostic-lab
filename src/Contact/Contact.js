import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="contact-bg py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://i.ibb.co/z7rGyfs/medical-contact.jpg" className="w-100 py-5" alt="" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="text-center py-5 fw-bold">Discover Diagnostic  Laboratory (Pte) Ltd</h3>
                            <div className="contact-box p-3 m-2">
                                <h6><i className="fas fa-phone-square-alt icon-contact"></i><span className="mx-2">01755 666969, 01713 487903, 0241355691 & 02 41355692</span></h6>
                            </div>
                            <div className="contact-box p-3 m-2">
                                <h6><i className="fas fa-envelope-square icon-contact"></i><span className="mx-2">info@discoverlab.com, admin@discoverbd.com</span></h6>
                            </div>
                            <div className="contact-box p-3 m-2">
                                <h6><i className="fas fa-globe-americas icon-contact"></i><span className="mx-2">www.discoverlab.com, www.discoverbd.com</span></h6>
                            </div>
                            <div className="contact-box p-3 m-2">
                                <h6><i className="fas fa-map-marked-alt icon-contact"></i><span className="mx-2">12/12 O. R. Nizam Road, Panchlaish, Chattogram</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;


/*

*/