import React, { useState } from 'react'
import './Login.css'
import logo from '../../CommonResource/Icons/amazon-png.png'
import { auth } from '../Firbase';
import {Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
function Login ()
{
  const navigate = useNavigate();
    
    const [ email, setEmail ] = useState( "" );
  const [ password, setPassword ] = useState( "" );
  
    const signIn = (e) =>
    {
      e.preventDefault(); 
      signInWithEmailAndPassword(auth, email, password)  // auth: (authenticate adergelgne email and password )
        .then((auth) => {
          if (auth) {
            navigate( "/" ); //yebrowserwun history access maderege
            //route maderegia. just like link, browserun swiche maderegia
          }
        })
        .catch((error) => console.log(error));   
  }
    const register = (e) =>
    {
      e.preventDefault(); 
    createUserWithEmailAndPassword(auth, email, password )
      .then( auth =>
      {
        console.log( auth );
        if ( auth )
        {
            navigate('/') // bezaw egeremengedehn wodewust geba
          }
        } )
        .catch(  erroe => console.log(erroe))
}
  return (
    <div className="login">
      <Link to = "/" ><img className="login__logo" src={logo} /></Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email} // setEmail(e.target.value)} after set ketederege buhala
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

            <button
            type="submit" // typu submit silehone submit sidereg refreshe yadergal, so use e.preventdefault();
            className="login__signInButton"
            onClick={ signIn } >
    
            Sign In
          </button>
        </form>
        <p>
         After Enter Your email and password you can register or creat you amazone account, by clicking the buttton below.
        </p>
        <button className="login__registeButton" onClick={register}>
          {" "}
          Creat Youre Amazone Account{" "}
        </button>
      </div>
    </div>
  );
}
export default Login










