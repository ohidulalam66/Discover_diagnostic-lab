import React from 'react';
import { Link, useParams, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {

    const { serviceId } = useParams();
    const { error, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || `service/${serviceId}`;
    // console.log('came form', location.state?.form);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <>
            <div className="login-container">
                <div className="container">
                    <div className="py-4 right-container">
                        <h1 className="text-dark">Register</h1>
                        <hr />
                        <form>
                            <div className="mb-3 w-50 mx-auto">
                                <label for="exampleFormControlInput1" className="form-label">Name:</label>
                                <input type="name" className="form-control input-field" id="exampleFormControlInput1" placeholder="Your Name*" />
                            </div>
                            <div className="mb-3 w-50 mx-auto">
                                <label for="exampleFormControlInput1" className="form-label">Email:</label>
                                <input type="email" className="form-control input-field" id="exampleFormControlInput1" placeholder="Your Email*" />
                            </div>
                            <div className="w-50 mx-auto">
                                <label for="exampleFormControlInput1" className="form-label">Password:</label>
                                <input type="password" className="form-control input-field" id="exampleFormControlInput1" placeholder="Your Password*" />
                            </div>
                            <br />
                            <p className="text-center text-danger">{error}</p>
                            <input className="btn-login d-block mx-auto" type="submit" value="Submit" />
                        </form>
                        <hr />
                        <p className="text-center">or, social media reference</p>
                        <button
                            onClick={handleGoogleLogin}
                            className="btn-login d-block mx-auto"
                        ><i className="fab fa-google"></i> Google Sign in</button>
                        <p className="text-center">Already have an account? <Link to="/login">Login Account</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;