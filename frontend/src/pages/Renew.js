import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, Outlet } from 'react-router-dom';

function Renew() {
  const [form, setForm] = useState({ policy: '', phone: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!form.policy || form.policy.trim().length < 5) {
      newErrors.policy = 'Policy number must be at least 5 characters';
      valid = false;
    }

    if (!form.phone || !/^\d{10}$/.test(form.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Thank you!\nPolicy Number: ${form.policy}\nPhone: ${form.phone}\nOur relationship manager will call you regarding your renew process.`);
      // Optionally reset form
      setForm({ policy: '', phone: '' });
      setErrors({});
    }
  };

  return (
    <div>
      <Navbar />

      <div className='container'>
        <form 
          className="p-4 border rounded shadow-sm bg-light" 
          style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}
          onSubmit={handleSubmit}
        >
          <h3 className="text-center mb-4">Renew Policy</h3>

          <div className="mb-3">
            <label className="form-label">Policy Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Policy Number"
              value={form.policy}
              onChange={(e) => setForm({ ...form, policy: e.target.value })}
            />
            {errors.policy && <small className="text-danger">{errors.policy}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && <small className="text-danger">{errors.phone}</small>}
          </div>

          <button type="submit" className="btn btn-danger w-100">Continue</button>

          <Link 
            className="nav-link active mt-3" 
            to="/" 
            style={{ color: "darkblue" }}
          >
            Don't have Policy Number? <i>Click me</i>
          </Link>
        </form>
      </div>

      <Outlet />
    </div>
  );
}

export default Renew;
