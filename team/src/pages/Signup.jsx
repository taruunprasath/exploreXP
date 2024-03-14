// Signup.js
import React, { useState } from 'react';
import '../Styles/signup.css';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../firebase.js';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => { 
    e.preventDefault();
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      if (user) {
        alert('Signup successful!');
        navigate('/login');
      }
    } catch (error) {
      alert('User already exists');
    }
  };

  return (
    <div className="align">
      <div className="grid align__item">
        <div className="register">
          <h2>Signup</h2>
          <form onSubmit={submit} className="form">
            <div className="form__field">
              <input type="text" value={name} placeholder="Username" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form__field">
              <input type="text" value={email} placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form__field">
              <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form__field">
              <input type="submit" value="Signup" />
            </div>
          </form>
          <p>
            Already have an account? <Link to="/Login"><span>Login Now</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
