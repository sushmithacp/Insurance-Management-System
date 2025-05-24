import React from 'react'
import Navbar from '../components/Navbar'
import POSP from '../pages/POSP'


function Bangaluru() {
  return (
    <div>
        <Navbar/>
             <div className='container mt-5'>
    <div className="card mb-3" style={{maxwidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9K8YfcxecGqn2_YswX2CjH3r08V3Ry78KA&s" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Vignesh</h5>
        <p className="card-text">Experience 6 Yrs | Rating: 5</p>
        <p className="card-text"><small className="text-muted">Bangaluru</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1VF5EsnE0WMTYiaV1eq7HOUeQLQ9cX3IwNw&s" className="img-fluid rounded-start" alt="..."/>
</div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Shailesh</h5>
        <p className="card-text">Experience 8 Yrs | Rating: 5</p>
        <p className="card-text"><small className="text-muted">Bangaluru</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr4cNMkgmpcFi2axKFBMGHe7fQogZOW6SMYw&s" className="img-fluid rounded-start" alt="..."/>
       </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Dinesh</h5>
        <p className="card-text">Experience 4 Yrs | Rating: 5</p>
        <p className="card-text"><small className="text-muted">Bangaluru</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
      <POSP/>
        </div>
  )
}

export default Bangaluru