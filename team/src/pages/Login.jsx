import React, { useState } from 'react';
import '../Styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../firebase.js';
import { useAuth } from '../AuthContext.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 


  const submit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      if (user) { 
        login(user)
        alert('Login Successful')
        navigate('/Home');
      }
    } catch (error) {
      alert("Invalid Login");
    }
  };

  return (
    <div className="align">
      <div className="grid align__item">
        <div className="register">
          <h2>Login</h2>
          <br></br>
          <form onSubmit={submit} className="form">
            <div className="form__field">
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form__field">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form__field">
              <input type="submit" value="Login" />
            </div>
          </form>
          <p>Don't have an account? <Link to="/signup"><span>Create Account</span></Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
