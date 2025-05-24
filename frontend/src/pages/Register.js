
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users/register', form);
    alert('Registration successful!!');
  };

  return (
   <div>
      <Navbar/>
    <form
      onSubmit={handleRegister}
      className="p-4 border rounded shadow-sm bg-light"
      style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}
    >
      <h3 className="text-center mb-4"><img src="https://static.insurancedekho.com/pwa/img/id-main-logo.svg" alt="" style={{width: 200}} ></img><hr/><p>Register</p></h3>

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

      <button type="submit" className="btn btn-success w-100">Register</button>

      <div className="text-center mt-3">
        <span>Already have an account? </span>
        <a href="/login">Login</a>
      </div>
    </form>
    </div>
  );
}

export default Register;
