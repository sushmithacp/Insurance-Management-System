import React from 'react'
import Navbar from '../components/Navbar'

function Renew() {
  return (
    <div>
      <Navbar/>

      <div className='container'>
  
 <form className="p-4 border rounded shadow-sm bg-light" style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
  <h3 className="text-center mb-4">Sign in to InsuranceDekho<br/>
 </h3>
<p>Login using Mobile Number</p>
  <div className="mb-3">
    
    <input
      type="text"
      className="form-control"
      placeholder="Mobile Number"
   
    />
  </div>
<button type="submit" className="btn btn-info w-100">Continue</button>
 

 
</form>




      </div>
      
    </div>
  )
}

export default Renew
