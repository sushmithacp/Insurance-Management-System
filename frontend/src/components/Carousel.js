import React from 'react'
 import { useNavigate } from 'react-router-dom';

function Carousel() {
    const navigate = useNavigate();
  
  return (
    
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"  style={{ marginTop: '20px' }} >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
     </div>
  <div className="carousel-inner" >
    <div className="carousel-item active">
        <div className='container' onClick={() => navigate('/term-insurance')}>
      <img src="https://static.insurancedekho.com/pwa/img/nfo/lic-desktop-banner.png" className="d-block w-100" alt="..."  height="150" ></img>
    </div>
    </div>
    <div className="carousel-item">
    <div className='container'>
      <img src="https://gschfcl.org/wp-content/uploads/2024/home_ban1.jpg" className="d-block w-100" alt="..." height="150"></img>
    </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  
  )
}

export default Carousel
