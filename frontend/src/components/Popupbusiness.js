import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function Popupbusiness() {
  const [form, setForm] = useState({ name: '', number: '', email: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!form.name || form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      valid = false;
    }

    if (!form.number || !/^\d{10}$/.test(form.number)) {
      newErrors.number = 'Phone number must be 10 digits';
      valid = false;
    }

    if (
      !form.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleClick = () => {
    if (validate()) {
      alert(`Hi \n${form.name}\nThank You!, For choosing InsuranceDekho! Our relationship manager will call you to guide you along with your purchase 
      `);
    }
  };

  return (
    <div>
      <Navbar />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-4 border rounded shadow-sm bg-light"
        style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}
      >
        <h3 className="text-center mb-4">
          <img
            src="https://static.insurancedekho.com/pwa/img/id-main-logo.svg"
            alt="Logo"
            style={{ width: 200 }}
          />
          <hr />
          <p>Enter Details</p>
        </h3>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter your phone number"
            value={form.number}
            onChange={(e) => setForm({ ...form, number: e.target.value })}
          />
          {errors.number && <small className="text-danger">{errors.number}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <button
          type="button"
          className="btn btn-danger w-100"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Popupbusiness;
