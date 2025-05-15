import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({ username: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/users/login', form);
    localStorage.setItem('token', res.data.token);
    alert('Logged in!');
     navigate('/');
  };
       

  return (
  
    <form onSubmit={handleLogin} className="p-4 border rounded shadow-sm bg-light" style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px'}}>
  <h3 className="text-center mb-4">Login</h3>

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

  <button type="submit" className="btn btn-info w-100">Login</button>
    <div className="text-center mt-3">
    <span>Don't have an account? </span>
    <Link to="/register">Sign Up</Link>
  </div>
</form>

  );
}

export default Login;
