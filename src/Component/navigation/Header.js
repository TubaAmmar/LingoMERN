import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome, faPhone, faBars} from '@fortawesome/free-solid-svg-icons';

import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import Nav1 from './Nav1';

import Backgroundimgs from '../Homecomponent.js/Backgroundimgs';



function Header() {
  return (

   <>

  <Headercss>
    <header className="header">
   <nav className='head  navbar '>
   <Nav1 />

   
   

   <img src='img/9.jpeg' alt='img' className='logo img1' />
   <img src='img/4.jpeg' alt='img' className='img2' />
   <img src='img/3.jpeg' alt='img' className='img3' />
   <img src='img/5.jpeg' alt='img' className='img4' />


   
   
   
   
   
  



    <ul className='navicons'>
        <li><NavLink to={'/contact'}><FontAwesomeIcon icon={faPhone } className=''></FontAwesomeIcon></NavLink></li>

        <li><NavLink to={'/'}><FontAwesomeIcon icon={faHome } className=''></FontAwesomeIcon></NavLink></li>

        <li><a href='https://m.facebook.com/linguisticskomplex'><FontAwesomeIcon icon={faFacebook} className=''></FontAwesomeIcon></a></li>
    </ul>
    </nav>
     </header>

    


 
         

    </Headercss>
   </>



  )
}

const Headercss = styled.div`


.header{height:200px;}

.head{display:flex; background-color:white; height:6.5rem;  }
.img1 {width:280px; height:100px;}
.img2{width:250px; position:absolute; top:20%; left:35% }
.img4{width:250px; position:absolute; top:20%; left:70%  }
.img3{width:250px; position:absolute; top:20%; left:50% }
.img1{position:absolute; top:30%; left:10%  }


 .navicons{display:none;}
 .bars{display:none;}



 @media (max-width:1140px){
  .header{height:130px}
  .header .logo{flex: 2; text-align: center; z-index: 1; font-size:1rem;}
  .img1{width:160px; height:50px; }
  .rightnav {display:none;}
  .navicons{display:block; display:flex; margin-right:.6rem; }
  .navicons li{ list-style:none; padding-right:1rem; padding-top:1.7rem;}
  .logo{position:absolute; left:15% }
   .img2, .img3, .img4{display:none}
   .nav2{display:none;}

  }




`

export default Header