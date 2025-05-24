import React from 'react'
import Navbar from '../components/Navbar'
import POSP from '../pages/POSP'


function Hyderabad() {
  return (
    <div>      
        <Navbar/>
            <div className='container mt-5'>
    <div className="card mb-3" style={{maxwidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://cdn.theorg.com/4c92dbf5-b725-4c4d-9641-465f82a76d98_thumb.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Bhageerath</h5>
        <p className="card-text">Experience 3 Yrs | Rating: 4.5</p>
        <p className="card-text"><small className="text-muted">Hyderabad</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://media.licdn.com/dms/image/v2/D5603AQGuyALULVhpEg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719155124898?e=2147483647&v=beta&t=N8mtxYLDUkzhvgYyP1KX5NsuPHRgXdtiALFou7YTXNg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Pramodh</h5>
        <p className="card-text">Experience 2 Yrs | Rating: 4</p>
        <p className="card-text"><small className="text-muted">Hyderabad</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqhGMWpLzgfi-YcSBY20_oum6p8rBLyZMBg&s" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Ramesh</h5>
        <p className="card-text">Experience 5 Yrs | Rating: 5</p>
        <p className="card-text"><small className="text-muted">Hyderabad</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
      <POSP/>
</div>
  )
}

export default Hyderabad