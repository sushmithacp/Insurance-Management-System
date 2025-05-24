import React from 'react'
import Navbar from '../components/Navbar'
import POSP from '../pages/POSP'


function Kolkata() {
  return (
    <div>
           <Navbar/>
       <div className='container mt-5'>
    <div className="card mb-3" style={{maxwidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYaFmngFFQ1pdUItBAOR08yjQ9bOjPIVMExQ&s" className="img-fluid rounded-start" alt="..."/>

      </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Akash</h5>
        <p className="card-text">Experience 6 Yrs | Rating: 5</p>
        <p className="card-text"><small className="text-muted">Kolkata</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZZWBx2O5-PSlI2q0T9D0O5X3dQcCTlKuhw&s" className="img-fluid rounded-start" alt="..."/>
   </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Sunil</h5>
        <p className="card-text">Experience 8 Yrs | Rating: 3</p>
        <p className="card-text"><small className="text-muted">Kolkata</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tGrohJaWB8Psb4huFqbVMQ4LdrscwNCbHQ&s" className="img-fluid rounded-start" alt="..."/>
       </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Puneeth</h5>
        <p className="card-text">Experience 4 Yrs | Rating: 4</p>
        <p className="card-text"><small className="text-muted">Kolkata</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
      <POSP/>
    </div>
  )
}

export default Kolkata