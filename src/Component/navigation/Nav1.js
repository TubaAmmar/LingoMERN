import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Nav1data from "./Nav1data";
import './Nav1.css';


function Nav1(){

     const [sidebar, setSidebar] = useState(false);
     const showSidebar = ()=> setSidebar(!sidebar);
    return(
        <>
    

        <div className="navbar">
        <Link to='#' className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
        </Link>

        </div>

        <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' >
          

               <li >
               <div className="my-4"></div>
               <Link to='#' className="menu-bar1" onClick={showSidebar} >
            <div className="closee">
            <AiIcons.AiOutlineClose className="close1" /></div>
        
           </Link>
             
             <div className="my-3"></div>

           {Nav1data.map((val, index)=>{
                    return(
                        
                        <div key={index} className='val.cName'>
                    <Link to={val.path} className='link1' onClick={showSidebar} >
                       
                        <span> {val.title}</span>
                       
                    </Link>

                    </div>
                    )
                  
                })}
               </li>
                
            
           
         
            </ul>

        </nav>
        

        </>
    )
}

export default Nav1