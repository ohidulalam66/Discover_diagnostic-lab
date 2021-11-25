import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { error, setError, handleRegister, handleEmail, handlePassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleUserRegister = e => {
        e.preventDefault();
        handleRegister()
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
                        <h2 className="text-center text-danger my-5"><img src="https://i.ibb.co/2Sk6cVx/rod-of-asclepius.png" alt="" /> Register <img src="https://i.ibb.co/2Sk6cVx/rod-of-asclepius.png" alt="" /></h2>
                        <form onSubmit={handleUserRegister}>
                            <div className="mb-3 w-50 mx-auto">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name:</label>
                                <input type="name" className="form-control input-field" id="exampleFormControlInput1" placeholder="Your Name*" required />
                            </div>
                            <div className="mb-3 w-50 mx-auto">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email:</label>
                                <input onBlur={handleEmail} type="email" className="form-control input-field" id="exampleFormControlInput1" placeholder="Your Email*" required />
                            </div>
                            <div className="w-50 mx-auto">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Password:</label>
                                <input onBlur={handlePassword} type="password" className="form-control input-field" id="exampleFormControlInput1" placeholder="Your Password*" required />
                            </div>
                            <br />
                            <p className="text-center text-danger">{error}</p>
                            <input className="btn-login d-block mx-auto" type="submit" value="Register" />
                        </form>
                        <p className="text-center">Already have an account? <Link to="/login">Login Account</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;