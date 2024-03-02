import React from 'react'
import styled from 'styled-components'

function Slider() {
  return (
  <>
     <Slidercss>
     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="img/3.avif" className="d-block img1 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="img/2.avif" className="d-block  img2 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="img/1.avif" className="d-block img3 img-fluid" alt="..."/>
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
 
    </Slidercss>
  </> 
  

  )
}

const Slidercss = styled.div`
.img1{height:500px; width:100%}
.img2{height:500px; width:100%}
.img3{height:500px; width:100%}

`

export default Slider