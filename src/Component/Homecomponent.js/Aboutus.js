import React from 'react'
import styled from 'styled-components'

function Aboutus() {
  return (
  <>
  <Homecss>
      <div className='my-5'></div>
      <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 aboutus text-center'><h1><span style={{marginRight:'.5rem'}}>-</span>About Us<span>-</span></h1></div>
          </div>
         </div>
            
        
            <div className='my-5'></div>
           <div className='container '>
            <div className='row aboutuspart'>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 '><img src='img/1.jpeg ' className='aboutusimg img-fluid' alt='error' /></div>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 paragraph'>
                <p>
                TELL PEC. Foreign Education Consultants is services provider organization which aaaaaa<br />
                Gujranwala and Muridke which are the largest industrial cities of Pakistan. We are aaaa <br/>
                to advice students in selecting courses and institutions which will be beneficial for aaaa<br/>
                achieve their career goals. Our preference is to provide students exceptional and aaaa<br/>
                achieve their career goals. Our preference is to provide students exceptional and aaaa <br/>
                achieve their career goals. Our preference is to provide students exceptional and aaaa<br/>
                achieve their career goals. Our preference is to provide students exceptional and aaaa<br/>
                achieve their career goals. Our preference is to provide students exceptional and aaaa<br/>
                TELL PEC. Foreign Education Consultants is services provider organization which aaaaaa<br/>
                TELL PEC. Foreign Education Consultants is services provider organization which aaaaaa<br/>
                TELL PEC. Foreign Education Consultants is services provider organization which aaaaaa<br/>
                TELL PEC. Foreign Education Consultants is services provider organization which aaaaaa<br/>
                TELL PEC. Foreign Education Consultants is services provider organization which aaaaaa<br/>
                TELL PEC. Foreign Education Consultants is services provider organization which aaaaaa<br/>
                TELL PEC. Foreign Education Consultants is services provider organization which aaaaaa<br/>
                TELL PEC. Foreign Education Consultants is services provider organization which aaaaaa<br/>
                TELL PEC. Foreign Education Consultants is services provider organization which aaaaaa
                </p>
              </div>
            </div>
           </div>


           

         </Homecss>
  </>
  )
}
const Homecss = styled.div`
.aboutuspart{margin-top:7rem;}
.aboutus h1{font-size:4rem; font=weight:1000; margin-top:4rem; color:#4c6dbe;}
.aboutus span{color:red; width:30px; font-weight:600; margin-left:.5rem}
.aboutusimg{width:630px; height:410px;}
.paragraph p{font-size:1rem; font-weight:500; color:#746e6e}



@media (max-width:1140px){
  
.aboutus h1{font-weight:500; font-size:2.5rem;}


  }
`

export default Aboutus