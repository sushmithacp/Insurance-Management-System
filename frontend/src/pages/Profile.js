import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      console.log("Profile API Response:", res.data);
      setData(res.data);
    }).catch(() => alert("Unauthorized"));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>User Profile</h2>

      {data ? (
        <>
         
          <table style={{ width: '100%', border: '1px solid #ddd', marginBottom: '30px', backgroundColor: '#fefefe' }}>
            <tbody>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={cellStyle}>Username</th>
                <td style={cellStyle}>{data.user.username}</td>
              </tr>
              <tr>
                <th style={cellStyle}>Role</th>
                <td style={cellStyle}>{data.user.role}</td>
              </tr>
            </tbody>
          </table>

          
          <h2>Purchased Insurance Policies</h2>
          {data.policies.length > 0 ? (
            <table style={{ width: '100%', border: '1px solid #ddd', backgroundColor: '#fefefe' }}>
              <thead>
                <tr style={{ backgroundColor: '#e6f2ff' }}>
                  <th style={cellStyle}>Policy ID</th>
                  <th style={cellStyle}>Policy Number</th>
                  <th style={cellStyle}>Premium</th>
                  <th style={cellStyle}>Coverage Amount</th>
                  <th style={cellStyle}>Purchase Date</th>
                </tr>
              </thead>
              <tbody>
                {data.policies.map((item, idx) => (
                  <tr key={idx}>
                    <td style={cellStyle}>{item.policid}</td>
                    <td style={cellStyle}>{item.policnum}</td>
                    <td style={cellStyle}>₹{item.amount}</td>
                    <td style={cellStyle}>₹{item.policov}</td>
                    <td style={cellStyle}>{new Date(item.purchaseDate).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No policies purchased.</p>
          )}
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
}


const cellStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  textAlign: 'left'
};

export default Profile;
