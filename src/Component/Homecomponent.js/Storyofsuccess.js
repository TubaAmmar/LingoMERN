import React from 'react'
import styled from "styled-components";
import Storydata from './Storydata';
import Storystructure from './Storystructure';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowAltCircleLeft, faArrowAltCircleRight, } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";


function Storyofsuccess() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    }
 


  return (
    <Successcss>
   <div className='my-5'></div>
<div className='part'>
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-12'>
      <h1 className='text-center heading1'>Stories of Success</h1><br/>
        <h6 className='text-center heading2'>just some of our achievements ! it continues</h6>
      </div>
      <div>
     </div>
    </div>

 
    

  <div className='container container1'>
        <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 part1 '>
        <img src='img/3.avif' alt='img' className='img1' />
            <div className='card '>
            <div className='card-body'>
            
            <Storystructure

            detail = {Storydata[0].detail}
           detail2 = {Storydata[0].detail2}
           detail3 = {Storydata[0].detail3}
           detail4 = {Storydata[0].detail4}
           name = {Storydata[0].name}

              />
            </div>
            </div>
             </div>

             <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 part2'>
             <img src='img/3.avif' alt='img' className='img1' />
            <div className='card  '>
            <div className='card-body'>
            
            <Storystructure

            detail = {Storydata[0].detail}
           detail2 = {Storydata[0].detail2}
           detail3 = {Storydata[0].detail3}
           detail4 = {Storydata[0].detail4}
           name = {Storydata[0].name}

              />
            </div>
            </div>
             </div>

        
   


        </div>


       
       </div>


       <div className='container container1'>
        <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 part1'>
        <img src='img/3.avif' alt='img' className='img1' />
            <div className='card '>
            <div className='card-body'>
          
            <Storystructure

            detail = {Storydata[0].detail}
           detail2 = {Storydata[0].detail2}
           detail3 = {Storydata[0].detail3}
           detail4 = {Storydata[0].detail4}
           name = {Storydata[0].name}

              />
            </div>
            </div>
             </div>

             <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 part2'>
             <img src='img/3.avif' alt='img' className='img1' />
            <div className='card '>
            <div className='card-body'>
            
            <Storystructure

            detail = {Storydata[0].detail}
           detail2 = {Storydata[0].detail2}
           detail3 = {Storydata[0].detail3}
           detail4 = {Storydata[0].detail4}
           name = {Storydata[0].name}

              />
            </div>
            </div>
             </div>

        
   


        </div>


       
       </div>

     
  

      



     
   


  </div>
</div>

</Successcss>
  )
}





const Successcss = styled.div`
.heading{font-size: 25px; margin-left: 1rem;}
.heading1{color:black; margin-top:3rem; font-size:3.5rem; font-weight:800;}
.heading2{color:black; font-size:1.5rem;}
.part{background-color:cream; height:px;}
.card{ box-shadow:2px 2px 50px 2px #f5b300; color:white; width:350px    }
.para1{padding-top:2.2rem; padding-left:1.9rem; font-size:.8rem;}
.para2{padding-right:1.7rem; text-align:right;}
.part1{position:relative; left:10%;}
.part2{position:relative; left:20%;}

.img1{width:70px; height:70px; border-radius:50% 50%; position:relative; top:17%; left:-7%; z-index:999;}





@media (max-width:1140px){
 
.heading1{color:black; margin-top:3rem; font-size:2rem; font-weight:700;}
.heading2{color:black; font-size:1.1rem;}
.para1{padding-top:rem; padding-left:rem; font-size:.7rem; }
.part1{position:relative; left:0%;}
.part2{position:relative; left:0%;}


}
`

export default Storyofsuccess









