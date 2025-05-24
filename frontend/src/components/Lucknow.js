import React from 'react'
import Navbar from '../components/Navbar'
import POSP from '../pages/POSP'


function Lucknow() {
  return (
    <div>
           <Navbar/>
  <div className='container mt-5'>
    <div className="card mb-3" style={{maxwidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzRvAGargpTfOfpQ4V68kh6xuR4dUvUANDMA&s" className="img-fluid rounded-start" alt="..."/>

      </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Shivam</h5>
        <p className="card-text">Experience 6 Yrs | Rating: 5</p>
        <p className="card-text"><small className="text-muted">Lucknow</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4dhRtaXoWOrJg7UKBILiv6apZGbP5F_nIg&s" className="img-fluid rounded-start" alt="..."/>
  </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Partha</h5>
        <p className="card-text">Experience 8 Yrs | Rating: 4.5</p>
        <p className="card-text"><small className="text-muted">Lucknow</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdU9SpoMKc5g2jTYIYxd_W6xzU44q2v3gOA&s" className="img-fluid rounded-start" alt="..."/>
  
  </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Naveen</h5>
        <p className="card-text">Experience 4 Yrs | Rating: 4</p>
        <p className="card-text"><small className="text-muted">Lucknow</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
      <POSP/>
    </div>
  )
}

export default Lucknow