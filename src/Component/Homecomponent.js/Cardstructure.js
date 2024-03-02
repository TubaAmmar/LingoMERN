import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { faGlobe} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

function Cardstructure(props) {
  return (
 <>
 <Cardcss>
 
    <ul className=' ieltspart text-center'>
              <li><FontAwesomeIcon icon={faGlobe } className='globe'></FontAwesomeIcon></li>
              <li>  <p className='paragraph'> {props.name} </p></li>
             </ul>
             <div className='card-body'>
             <p className='paragraph2'> {props.detail} <br/> {props.detail2} </p>
             </div>
            <ul/>
    </Cardcss>
 </>
  )
}

const Cardcss = styled.div`
.heading{font-size: 25px; margin-left: 1rem;}
.heading1{color:black; margin-top:3rem;}
.heading2{color:black; font-size:1.5rem;}
.part2{height: 800px; }
.part{transition: transform 1s linear; transform: translateX(0px);}
.part:hover{transform: translateX(20px); transition: transform 1s linear;}
.part2{margin-top:3rem;}
.cardtitlepart{display:flex}
.ieltspart{display:flex;}
.ieltspart li{list-style:none; text-align:center; font-size:2rem; font-weight:600; margin-top:2rem; margin-left:1rem }
.globe{ margin-right:.4rem; color:#f5b300; }
.card{margin-left:rem; transition: transform 1s linear;  transform: translateX(0px); background-color:#f5b300;}
.card:hover{border-left:7px solid black; transition: transform 1s linear;  transform: translateX(10px);}
.paragraph2{font-size:1.1rem; font-weight:500; margin-top:-1.5rem; }
.row2{margin-top:4rem}
.paragraph{font-size:1.3rem; padding-top:.5rem; font-weight:700}

@media (max-width:1140px){
  
.part2{height:1200px; background-color:white}

.ieltspart li{font-size:1rem; font-weight:500; }
.paragraph2{font-size:1rem; font-weight:600;}
.section2,.section3,.section5, .section6{margin-top:1rem;}
.paragraph{font-size:1.1rem; font-weight:800;}
.globe{margin-right:0rem; font-size:1.5rem; font-weight:700; margin-top:.5rem; margin-left:-.2rem}
.row2{margin-top:1rem;}
  
  
    }

`

export default Cardstructure