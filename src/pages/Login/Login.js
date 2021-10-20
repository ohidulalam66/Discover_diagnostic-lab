import React from 'react';
import { Link, useParams, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { serviceId } = useParams();
    const { error, setError, handleLogin, handleEmail, handlePassword, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || `service/${serviceId}`;
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const handleUserLogin = e => {
        e.preventDefault();
        handleLogin()
            .then(result => {
                const user = result.user;
                history.push(redirect_uri)
                console.log(user)
                setError('');
            })
            .catch(error => {
                setError(error.message)
            });
    }
    return (
        <>
            <div className="login-container">
                <div className="container">
                    <div className="py-4 right-container">
                        <h2 className="text-center text-danger my-5"><img src="https://i.ibb.co/CwFbCwJ/heart-beat-2.png" className="heart-beat" alt="" /> Login <img src="https://i.ibb.co/tZkdnKW/heart-beat.png" className="heart-beat" alt="" /></h2>
                        <form onSubmit={handleUserLogin}>
                            <div className="mb-3 w-50 mx-auto">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email:</label>
                                <input onBlur={handleEmail} type="email"
                                    className="form-control input-field" id="exampleFormControlInput1" placeholder="Your Email" required />
                            </div>
                            <div className="w-50 mx-auto">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Password:</label>
                                <input onBlur={handlePassword} type="password"
                                    className="form-control input-field" id="exampleFormControlInput1" placeholder="Your Password" required />
                            </div>
                            <br />
                            <p className="text-center text-danger">{error}</p>
                            <input className="btn-login d-block mx-auto" type="submit" value="Login" />
                        </form>
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