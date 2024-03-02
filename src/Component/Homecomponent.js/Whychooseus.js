import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowAltCircleRight, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

export const Whychooseus = () => {
  return (
    <>
    <Chooseus>
        <div className='my-5'></div>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8'>
                <h4>WHY CHOOSE US</h4> 
                <hr className='line1' ></hr>
                <br/>
                <p className='paragraph'>Cras mattis consectetur purus sit amet fermen. Lorem ipsum dolor sit amet, consec adipiscing elit.<br/> Maecenas sed diam eget risus varius bland sit amet non fringilla ullamcorper magna. Nulla eu mi <br/>magna. Etiam  suscipit commodo ad gravida.</p> 
                <br/>

                <div className='chooseus1'>
                    <FontAwesomeIcon icon={faArrowAltCircleRight } className='arrow'></FontAwesomeIcon>
                   <p>Donec convallis, metus nec tempus aliquet ujyuyr</p>
                </div>

                <div className='chooseus1'>
                    <FontAwesomeIcon icon={faArrowAltCircleRight } className='arrow'></FontAwesomeIcon>
                   <p>Donec convallis, metus nec tempus aliquet hytrye</p>
                </div>
               
               
                <div className='chooseus1'>
                    <FontAwesomeIcon icon={faArrowAltCircleRight } className='arrow'></FontAwesomeIcon>
                   <p>Donec convallis, metus nec tempus aliquet ujnyrujyr</p>
                </div>

                
                <div className='chooseus1'>
                    <FontAwesomeIcon icon={faArrowAltCircleRight } className='arrow'></FontAwesomeIcon>
                   <p>Donec convallis, metus nec tempus aliquet bgehyy</p>
                </div>
                
                <div className='chooseus1'>
                    <FontAwesomeIcon icon={faArrowAltCircleRight } className='arrow'></FontAwesomeIcon>
                   <p>Donec convallis, metus nec tempus aliquet ytjh</p>
                </div>
               </div>

                <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4 clientpart'>
                <h4 className='client'>WHAT CLIENT SAYS?</h4> 
                <hr className='line1'/> 

                <div className='my-5'></div>
                 
        <div class="stats">
        <div class="stats0">70%</div>
        <div class="stats01"><p>System Design</p></div> </div>

        <div className='my-3'></div>
        <div class="stats1">
        <div class="stats02">80%</div>
        <div class="stats03"><p>DATA ANALYSIS</p></div>

</div>
 <div className='my-3'></div>
    <div class="stats2">
    <div class="stats04">90%</div>
    <div class="stats05"><p>LINK-LEVEL ANALYSIS</p></div></div>
    <div className='my-3'></div>

        <div class="stats3">
        <div class="stats06">80%</div>
        <div class="stats07">
        <p> COVERAGE MODELLING</p></div></div>
        <div className='my-3'></div>

<div class="stats4">
            <div class="stats08">70%</div>
            <div class="stats09"><p>STRATEGY SOLUTIONS</p></div></div>
</div> 

</div>
    </div>

     
        
       
        </Chooseus>
    </>
  )
}

const Chooseus = styled.div`
.container{ }
.line1{width:90%; margin-top:0rem;}
.arrow{font-size:1.1rem; color: blue; margin-right:.6rem; outline:black;}
.chooseus1{display:flex; margin-top:0rem; line-height:.5rem}
.paragraph{font-weight:500}

.chooseus1 p{font-weight:500}

.stats, .stats1, .stats2,.stats3,.stats4{display: flex; flex-direction: row;}
.stats01 p,.stats03 p,.stats05 p,.stats07 p,.stats09 p{font-size: 15px; margin-left: 0.5rem;}
.stats0{background-color: rgb(49, 50, 51); width: 40px; border-radius: 10px 0px 0px 10px; padding: 3px;  color:white; text-align:center; border: 1px solid; height:35px}
.stats01{background-color: #f5b300; width: 250px; border-radius: 0px 10px 10px 0px; padding: 3px;  color:black; text-align:left; border: 1px solid white; height:35px }
.stats01:hover{background-color: white; font-weight:600; border: 1px solid black;}

.stats02{background-color: rgb(49, 50, 51); width: 40px; border-radius: 10px 0px 0px 10px; padding: 3px;  color:white; text-align:center; border: 1px solid; height:35px;  }
.stats03{background-color:#f5b300; width: 300px; border-radius: 0px 10px 10px 0px; padding: 3px;  color:black; text-align:left; border: 1px solid white;  height:35px; }
.stats03:hover{background-color:white; border: 1px solid black; }

.stats04{background-color: rgb(49, 50, 51); width: 40px; border-radius: 10px 0px 0px 10px; padding: 3px;  color:white; text-align:center; border: 1px solid; height:35px;}
.stats05{background-color:#f5b300; width: 370px; border-radius: 0px 10px 10px 0px; padding: 3px;  color:black; text-align:left; border: 1px solid white; height:35px; }
.stats05:hover{background-color: white; border: 1px solid black;}

.stats06{background-color: rgb(49, 50, 51); width: 40px; border-radius: 10px 0px 0px 10px; padding: 3px;  color:white; text-align:center; border: 1px solid; height:35px;}
.stats07{background-color:#f5b300; width: 310px; border-radius: 0px 10px 10px 0px; padding: 3px;  color:black; text-align:left; border: 1px solid white; height:35px; }
.stats07:hover{background-color: white; border: 1px solid black;}

.stats08{background-color: rgb(49, 50, 51); width: 40px; border-radius: 10px 0px 0px 10px; padding: 3px;  color:white; text-align:center; border: 1px solid white; height:35px;}
.stats09{background-color: #f5b300; width: 270px; border-radius: 0px 10px 10px 0px; padding: 3px;  color:black; text-align:left; border: 1px solid white; height:35px; }
.stats09:hover{background-color:white; border: 1px solid black;}






@media (max-width:1140px){
  
    .chooseus1 p{font-weight:400; font-size:.9rem;}
    .client{margin-top:2rem}
  
  
    }

`
