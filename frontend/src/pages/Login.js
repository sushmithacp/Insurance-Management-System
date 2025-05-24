import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'

function Login() {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({ username: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
    const res = await axios.post('http://localhost:5000/api/users/login', form);
    
    localStorage.setItem('token', res.data.token);
    alert('Logged in!');
     navigate('/');
       } catch (error) {
   
    if (error.response && error.response.data && error.response.data.error) {
      alert(error.response.data.error); 
    } else {
      alert(`Please try again with valid credentials.
(don't have an account? Please Register!)`);
    }
  }
  };
       

  return (
    <div>
      <Navbar/>
  
    <form onSubmit={handleLogin} className="p-4 border rounded shadow-sm bg-light" style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px'}}>
  <h3 className="text-center mb-4"><img src="https://static.insurancedekho.com/pwa/img/id-main-logo.svg" alt="" style={{width: 200}} ></img><hr/><p>Login</p></h3>

  <div className="mb-3">
    <label className="form-label">Username</label>
    <input
      type="text"
      className="form-control"
      placeholder="Enter username"
      onChange={e => setForm({ ...form, username: e.target.value })}
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Password</label>
    <input
      type="password"
      className="form-control"
      placeholder="Enter password"
      onChange={e => setForm({ ...form, password: e.target.value })}
    />
  </div>

  <button type="submit" className="btn btn-danger w-100">Login</button>
    <div className="text-center mt-3">
    <span>Don't have an account? </span>
    <Link to="/register">Sign Up</Link>
  </div>
</form>
</div>
  );
}

export default Login;
