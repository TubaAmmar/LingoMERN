import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import Storydata from './Storydata';
import Storystructure from './Storystructure';

function Carousel() {
    const settings = {
        arrow: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrow: false,
            }
          },
       
          {
            breakpoint: 370,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrow: false,
            }
          }
        ]
      };

  return (
    
<>
<Carouselcss>

<div className='part'>
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-12'>
      <h1 className='text-center heading1'><span></span>Stories of Success<span></span></h1>
        <p className='text-center heading2'>just some of our achievements ! it continues</p>
      </div>
      <div>
     </div>
    </div></div></div>


<div className='container-fluid part4 my-5'>
<div className='container'>
    <div className='row '>
    <div className='my-4'></div>
        <div className='col-lg-8 col-sm-12'></div>
        <Slider {...settings}>

        <div className=''>
        <img src='img/3.avif' alt='img' className='img1' />
        <div className='card'>
        <Storystructure detail = {Storydata[0].detail}
                            name = {Storydata[0].name}/></div>
           
         </div>
    
        
          <div>

          <div className=''>
          <img src='img/2.avif' alt='img' className='img1' />
          <div className='card'>
          <Storystructure detail = {Storydata[0].detail}
                            name = {Storydata[0].name}/></div>
         </div>
          </div>
          
          
          <div>
          <div className=''>
          <img src='img/1.avif' alt='img' className='img1' />
          <div className='card'>
          <Storystructure detail = {Storydata[0].detail}
                            name = {Storydata[0].name}/></div>
         </div>
          </div>
       
          <div>
          <div className=''>
          <img src='img/3.avif' alt='img' className='img1' />
          <div className='card'>
          <Storystructure detail = {Storydata[0].detail}
                            name = {Storydata[0].name}/></div>
         </div>
          </div>
        
          <div>
          <div className=''>
          <img src='img/3.avif' alt='img' className='img1' />
          <div className='card'>
          <Storystructure detail = {Storydata[0].detail}
                            name = {Storydata[0].name}/></div>
         </div>
          </div>
        
          <div>
          <div className=''>
          <img src='img/3.avif' alt='img' className='img1' />
          <div className='card'>
                
          <Storystructure detail = {Storydata[0].detail}
                            name = {Storydata[0].name}/></div>
         </div>
          </div>
   
        </Slider>
    </div>
</div>
</div>
</Carouselcss>

</>
  )
}
const Carouselcss = styled.div`

.part{ }
.heading{font-size: 25px; margin-left: 1rem;}
.heading1{color:black; margin-top:3rem; font-size:3.5rem; font-weight:800;}
.heading2{color:black; font-size:1.3rem;font-weight:600}
.part{background-color:cream; height:px;}
.part4{background-image: url('img/8.avif'); background-size: cover; background-repeat: no-repeat; background-position: center; background-attachment: fixed; margin-top: 1.5rem; height:300px}
.card{width:450px; height:200px; margin-top:rem; margin-left:8rem; padding-left:1.5rem;}


.img1{width:70px; height:70px; border-radius:50% 50%; position:absolute; top:-2%; margin-left:6rem; z-index:999; margin-top:.2rem }

@media (max-width:1140px){
  .part4{overflow-x:hidden; }
  .card{width:375px; height:200px; margin-top:rem; margin-left:0rem; padding-left:0rem; }
  .img1{display:none}
  .heading1{color:black; margin-top:3rem; font-size:1.8rem; font-weight:800;}
.heading2{color:black; font-size:1rem;font-weight:700}
}
`

export default Carousel