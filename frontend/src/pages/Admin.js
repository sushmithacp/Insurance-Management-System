import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Admin.css'

function Admin() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);
   const [policy, setPolicy] = useState([]);
  const [editingPolicy, setEditingPolicy] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
const [newPolicy, setNewPolicy] = useState({
  policy_id: '',
  policy_number: '',
  status: 'active',
  start_date: '',
  end_date: '',
  coverage_amount: '',
  premium: '',
  currency: ''
});



  useEffect(() => {
    axios.get('http://localhost:5000/api/users/admin', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      setUser(res.data.user);
      setAuthorized(true);
      alert("You are Authorized!!!");

      
      return axios.get('http://localhost:5000/api/policies');
    }).then(res => {
      setPolicy(res.data);
      console.log("Fetched policies:", res.data);
    }).catch(err => {
      setAuthorized(false);
      console.error("Authorization or policy fetch failed:", err);
      alert("You are not authorized to view this page.");
      navigate('/');
    });
  }, [navigate]);

  if (!authorized) return null; 

  //delete
const handleAction = (action, policy) => {
  if (action === 'update') {
    setEditingPolicy(policy); 
  } else if (action === 'delete') {
    const confirmDelete = window.confirm(`Are you sure you want to delete Policy ${policy.policy_number}?`);
    if (confirmDelete) {
      axios.delete(`http://localhost:5000/api/policies/${policy.policy_id}`)
        .then(() => {
          alert('Policy deleted successfully!');
          setPolicy(prev => prev.filter(p => p.policy_id !== policy.policy_id));
        })
        .catch(err => {
          console.error("Delete failed:", err);
          alert('Failed to delete policy.');
        });
    }
  }
};
//update
const handleUpdate = (e) => {
  e.preventDefault();

  axios.put(`http://localhost:5000/api/policies/${editingPolicy.policy_id}`, editingPolicy)
    .then(() => {
      alert('Policy updated successfully!');
      setPolicy(prev =>
        prev.map(p => p.policy_id === editingPolicy.policy_id ? editingPolicy : p)
      );
      setEditingPolicy(null);
    })
    .catch(err => {
      console.error("Update failed:", err);
      
    });
};

  return (
    <div>
     
      {policy && policy.length > 0 && (
  <div className="mt-3 text-center">
    <h2 style={{ color: "grey" }}><b>Top Car Insurance Policies</b></h2>
    <button onClick={() => setShowAddForm(true) } style={{ backgroundColor: 'paleyellow', marginBottom: '10px' }}>
    Add Policy
  </button>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr style={{ backgroundColor: 'lightblue' }}>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Policy ID</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Policy Number</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Start Date</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>End Date</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Coverage</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Premium</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Currency</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {policy.map((p, index) => (
          <tr key={index} style={{ textAlign: 'center' }}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{p.policy_id}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{p.policy_number}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{p.status}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{p.start_date}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{p.end_date}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>₹{p.coverage_amount}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>₹{p.premium}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{p.currency}</td>
           <td style={{ border: '1px solid #ddd', padding: '8px' }}>
  <select
    onChange={(e) => handleAction(e.target.value, p)}
    defaultValue=""
    style={{ borderRadius: '4px' }}
  >
    <option value="" disabled>Select</option>
    <option value="update">Update</option>
    <option value="delete">Delete</option>
  </select>
</td>

          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
{/* update */}
{editingPolicy && (
 <div className="form-container">
  <h2>Update Policy</h2>
  <form className="policy-form" onSubmit={handleUpdate}>
    <label>
      Policy Number:
      <input
        type="text"
        value={editingPolicy.policy_number}
        onChange={(e) => setEditingPolicy({ ...editingPolicy, policy_number: e.target.value })}
      />
    </label>

    <label>
      Status:
      <select
        value={editingPolicy.status}
        onChange={(e) => setEditingPolicy({ ...editingPolicy, status: e.target.value })}
      >
        <option value="active">Active</option>
        <option value="expired">Expired</option>
      </select>
    </label>

    <label>
      Start Date:
      <input
        type="date"
        value={editingPolicy.start_date}
        onChange={(e) => setEditingPolicy({ ...editingPolicy, start_date: e.target.value })}
      />
    </label>

    <label>
      End Date:
      <input
        type="date"
        value={editingPolicy.end_date}
        onChange={(e) => setEditingPolicy({ ...editingPolicy, end_date: e.target.value })}
      />
    </label>

    <label>
      Coverage:
      <input
        type="number"
        value={editingPolicy.coverage_amount}
        onChange={(e) => setEditingPolicy({ ...editingPolicy, coverage_amount: parseFloat(e.target.value) })}
      />
    </label>

    <label>
      Premium:
      <input
        type="number"
        value={editingPolicy.premium}
        onChange={(e) => setEditingPolicy({ ...editingPolicy, premium: parseFloat(e.target.value) })}
      />
    </label>

    <label>
      Currency:
      <input
        type="text"
        value={editingPolicy.currency}
        onChange={(e) => setEditingPolicy({ ...editingPolicy, currency: e.target.value })}
      />
    </label>

    <div className="form-buttons">
      <button type="submit">Save</button>
      <button type="button" onClick={() => setEditingPolicy(null)}>Cancel</button>
    </div>
  </form>
</div>

)}
{/* add */}
{showAddForm && (
  <div className="form-container">
    <h2>Add New Policy</h2>
 <form
    className="policy-form"
    onSubmit={(e) => {
      e.preventDefault();

      if (
        !newPolicy.policy_number.trim() ||
        !newPolicy.start_date ||
        !newPolicy.end_date ||
        !newPolicy.currency.trim() ||
        isNaN(newPolicy.coverage_amount) ||
        isNaN(newPolicy.premium)
      ) {
        alert("Please fill out all fields correctly.");
        return;
      }

      const payload = {
        ...newPolicy,
        coverage_amount: Number(newPolicy.coverage_amount),
        premium: Number(newPolicy.premium)
      };

      axios
        .post("http://localhost:5000/api/policies", payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then((res) => {
          alert("Policy added successfully!");
          setPolicy((prev) => [...prev, res.data]);
          setShowAddForm(false);
          setNewPolicy({
            policy_number: "",
            status: "active",
            start_date: "",
            end_date: "",
            coverage_amount: "",
            premium: "",
            currency: ""
          });
        })
        .catch((err) => {
          console.error("Add failed:", err.response?.data || err.message);
          alert(`Failed to add policy: ${err.response?.data?.error || "Unknown error"}`);
        });
    }}
  >
    <label>
      Policy ID:
      <input
        type="text"
        value={newPolicy.policy_id}
        onChange={(e) => setNewPolicy({ ...newPolicy, policy_id: e.target.value })}
      />
    </label>

    <label>
      Policy Number:
      <input
        type="text"
        value={newPolicy.policy_number}
        onChange={(e) => setNewPolicy({ ...newPolicy, policy_number: e.target.value })}
      />
    </label>

    <label>
      Status:
      <select
        value={newPolicy.status}
        onChange={(e) => setNewPolicy({ ...newPolicy, status: e.target.value })}
      >
        <option value="active">Active</option>
        <option value="expired">Expired</option>
      </select>
    </label>

    <label>
      Start Date:
      <input
        type="date"
        value={newPolicy.start_date}
        onChange={(e) => setNewPolicy({ ...newPolicy, start_date: e.target.value })}
      />
    </label>

    <label>
      End Date:
      <input
        type="date"
        value={newPolicy.end_date}
        onChange={(e) => setNewPolicy({ ...newPolicy, end_date: e.target.value })}
      />
    </label>

    <label>
      Coverage:
      <input
        type="number"
        value={newPolicy.coverage_amount}
        onChange={(e) => setNewPolicy({ ...newPolicy, coverage_amount: parseFloat(e.target.value) })}
      />
    </label>

    <label>
      Premium:
      <input
        type="number"
        value={newPolicy.premium}
        onChange={(e) => setNewPolicy({ ...newPolicy, premium: parseFloat(e.target.value) })}
      />
    </label>

    <label>
      Currency:
      <input
        type="text"
        value={newPolicy.currency}
        onChange={(e) => setNewPolicy({ ...newPolicy, currency: e.target.value })}
      />
    </label>

    <div className="form-buttons">
      <button type="submit">Add</button>
      <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
    </div>
  </form>
  </div>
)}


    </div>
  );
}

export default Admin;
