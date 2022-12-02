import React, { useState } from 'react'
import "./Login.css"
import LOGO from "../images/logo_black.svg"
import {Link, useNavigate} from "react-router-dom"
import { auth } from '../firebase'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password, name)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    // firebase login



    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password, name)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className="login">
        <Link to="/">
            <img src={LOGO} alt="" className="login__logo" />
        </Link>
        <div className="login__container">
            <h1>Sign-in</h1>
            <form action="">
                <h5>Name</h5>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>
            <p>By continuing, you agree to Conditions of Use and Privacy Notice.</p>
            
            <button type='submit' onClick={register} className="login__registerButton">Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login