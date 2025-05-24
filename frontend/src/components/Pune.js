import React from 'react'
import Navbar from '../components/Navbar'
import POSP from '../pages/POSP'


function Pune() {
  return (
    <div>   
           <Navbar/>
            <div className='container mt-5'>
    <div className="card mb-3" style={{maxwidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbrPf9yIh7XaCVhsFd2yHD7UXZ9Jyxrwg3xQ&s" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Ashish</h5>
        <p className="card-text">Experience 4 Yrs | Rating: 5</p>
        <p className="card-text"><small className="text-muted">Pune</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdU26wYvAOA0ITNKJ6kcNM1oDk1RDTgVHa1Q&s" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Parmesh Singh</h5>
        <p className="card-text">Experience 2 Yrs | Rating: 4</p>
        <p className="card-text"><small className="text-muted">Pune</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXAuab4m8vib2JFipoKeCZLlbpFw05c8sDBg&s" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Dayakar</h5>
        <p className="card-text">Experience 6 Yrs | Rating: 5</p>
        <p className="card-text"><small className="text-muted">Pune</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
      <POSP/>
</div>
  )
}

export default Pune