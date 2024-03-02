import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

import { faGlobe} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Cardstructure from './Cardstructure';
import Carddata from './Carddata';



const Cards = () => {
  return (
 <>


<Cardcss>
<div className='part2'>
<div className='container-fluid c1'>
    <div className='row '>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
        <h1 className='text-center heading1'><span></span>Student Services<span></span></h1><br/>
        <h6 className='text-center heading2'>Study Abroad</h6>
        </div>
        </div>

        <div className='my-5'></div>

        <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 section1'>
            <div className='card text-center'>
            <div className='card-title text-center'>
            <NavLink to={'/services'}  className='link' >
            <Cardstructure
             name={Carddata[0].name} 
             detail = {Carddata[0].detail}
             detail2 = {Carddata[0].detail2}

             />
            </NavLink>
            </div>
            </div>
             </div>


             <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 section2'>
            <div className='card text-center'>
            <div className='card-title text-center'>
            <NavLink to={'/services'}  className='link' >
            <Cardstructure
             name={Carddata[1].name} 
             detail = {Carddata[1].detail}
             detail2 = {Carddata[1].detail2}

             />
            </NavLink>
            </div>
            </div>
             </div>


             <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 section3'>
            <div className='card text-center'>
            <div className='card-title text-center'>
            <NavLink to={'/services'}  className='link' >
            <Cardstructure
             name={Carddata[2].name} 
             detail = {Carddata[2].detail}
             detail2 = {Carddata[2].detail2}

             />
            </NavLink>
            </div>
            </div>
             </div>

</div>



<div className='row row2'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 section4'>
            <div className='card text-center'>
            <div className='card-title text-center'>
            <NavLink to={'/services'}  className='link' >
            <Cardstructure
             name={Carddata[3].name} 
             detail = {Carddata[3].detail}
             detail2 = {Carddata[3].detail2}

             />
            </NavLink>
            </div>
            </div>
             </div>


             <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 section5'>
            <div className='card text-center'>
            <div className='card-title text-center'>
            <NavLink to={'/services'}  className='link' >
            <Cardstructure
             name={Carddata[4].name} 
             detail = {Carddata[4].detail}
             detail2 = {Carddata[4].detail2}

             />
            </NavLink>
            </div>
            </div>
             </div>


             <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 section6'>
            <div className='card text-center'>
            <div className='card-title text-center'>
            <NavLink to={'/services'}  className='link' >
            <Cardstructure
             name={Carddata[5].name} 
             detail = {Carddata[5].detail}
             detail2 = {Carddata[5].detail2}

             />
            </NavLink>
            </div>
            </div>
             </div>

</div>






</div>
</div>
</Cardcss>



 </>
  )
}


const Cardcss = styled.div`

.link{color:black; text-decoration:none;}
.heading{font-size: 25px; margin-left: 1rem;}
.heading1{color:black; margin-top:5rem;}
.heading2{color:black; font-size:1.5rem;}
.part2{height: 800px; background-color:#E0E0F1; margin-top:rem }
.part{transition: transform 1s linear; transform: translateX(0px);}
.part:hover{transform: translateX(20px); transition: transform 1s linear;}

.cardtitlepart{display:flex}
.ieltspart{display:flex;}
.ieltspart li{list-style:none; text-align:center; font-size:2rem; font-weight:600; margin-top:2rem; margin-left:1rem }
.globe{color:orange; margin-right:.6rem;}
.card{margin-left:rem; transition: transform 1s linear;  transform: translateX(0px); background-color:#E0E0F1; outline:none; border:none}
.card:hover{border-left:7px solid orange; transition: transform 1s linear;  transform: translateX(10px); background-color:white; }
.paragraph2{font-size:1.1rem; font-weight:500; margin-top:-1.5rem; }
.row2{margin-top:4rem}


@media (max-width:1140px){
  
.part2{height:1350px; background-color:white}

.ieltspart li{font-size:1rem; font-weight:500; }
.paragraph2{font-size:1rem; font-weight:600;}
.section2,.section3,.section5, .section6{margin-top:1rem;}
.paragraph{font-size:1rem; font-weight:900;}
.globe{margin-right:0rem; font-size:1.5rem; font-weight:700; margin-top:.5rem; margin-left:-.1rem}
.row2{margin-top:1rem;}
  
  
    }

`

export default Cards