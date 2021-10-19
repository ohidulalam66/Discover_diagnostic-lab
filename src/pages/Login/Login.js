import React from 'react';
import { Link, useParams, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
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
                        <h1 className="text-dark">login</h1>
                        <hr />
                        <form>
                            <div className="mb-3 w-50 mx-auto">
                                <label for="exampleFormControlInput1" className="form-label">Email:</label>
                                <input type="email"
                                    className="form-control input-field" id="exampleFormControlInput1" placeholder="Your Email" required />
                            </div>
                            <div className="w-50 mx-auto">
                                <label for="exampleFormControlInput1" className="form-label">Password:</label>
                                <input type="password"
                                    className="form-control input-field" id="exampleFormControlInput1" placeholder="Your Password" required />
                            </div>
                            <br />
                            <p>{error}</p>
                            <input className="btn-login d-block mx-auto" type="submit" value="Submit" />
                        </form>
                        <hr />
                        <p className="text-center">or, social media reference</p>
                        <button
                            className="btn-login d-block mx-auto"
                            onClick={handleGoogleLogin}
                        ><i className="fab fa-google"></i> Google Sign in</button>
                        <p className="text-center">New to Discover Diagnostic lab? <Link to="/register">Create Account</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;