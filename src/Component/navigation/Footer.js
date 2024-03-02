import React from 'react'
import styled from 'styled-components';
import { faEnvelope, faLocationDot, faPhone, faVoicemail} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
<>
<Footercss>
<div className='my-5'></div>
    <div className='container-fluid c1'>
    <div className='container'>
     <div className='row'>
     <div className='my-5'></div>
            <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
              <h2 className='heading'> ADDRESS</h2>
              <hr/>
              
              <div className='my-1'></div>
                <p className='location'>
                <FontAwesomeIcon icon={faLocationDot } className='dot' ></FontAwesomeIcon>
              381-B, Near Billa Pan Chowk, Satellite Town, Gujranwala, PAKISTAN
                </p>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
            <h2 className='heading '> SOCIAL SITES</h2>
            <hr/>
            <div className='my-1'></div>
            <ul className='icons'>
                <li><a href='https://www.facebook.com/linguisticskomplex'><FontAwesomeIcon icon={faFacebook} className='icon1'></FontAwesomeIcon></a></li>
                <li><NavLink to={'/'}><FontAwesomeIcon icon={faInstagram} className='icon2'></FontAwesomeIcon></NavLink></li>
         
                <li><NavLink to={'/'}><FontAwesomeIcon icon={faEnvelope} className='icon3' ></FontAwesomeIcon></NavLink></li>
            </ul>

         
            </div>
            <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
            <h2 className='heading '> CONTACT NO.</h2>
            <hr/>
            <div className='my-1'></div>

                <p className='phone'>
                <FontAwesomeIcon icon={faPhone }  className='phoneicon'></FontAwesomeIcon>
                 03074606997 <br/>
                <p className='number'> 03254975812</p>
                </p>
            </div>
        </div>
    </div>
    </div>
    </Footercss>
</>
  )
}

const Footercss = styled.div`
.c1{height:350px; background-color:#070754;  position: ; left: 0;
  bottom: 0;}
.heading{color:white}
hr{color:white; height:3px; width:95%}
.location , .phone { padding-top:1rem; font-size:1.2rem; font-weight:500; color:white }
.dot  {margin-right:.5rem; color:white}
.phoneicon {margin-right:.9rem; color:white}
.icons{display:flex}
.icons li{list-style:none; font-size:2rem; font-weight:500; padding-left:3rem; }
.icon1,.icon2,.icon3{color:white}
.icon1:hover{color:#afc0f1}
.icon2:hover{color:red}
.icon3:hover{color:yellow}
.number{padding-left:1.9rem}


@media (max-width:1140px){

    .c1{height:570px; background-color:#070754}
 }

`

export default Footer