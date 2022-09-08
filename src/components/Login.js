import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import "../styles/auth.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleUserSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className="form-container">
            <div>
                <h3 className="form-title">Login</h3>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="1" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="2" required />
                    </div>
                    <input  className="form-submit" type="submit" value="Login" />
                </form>
                <p className="form-query">
                    New here ?{" "}
                    <Link className="form-link" to="/register">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;