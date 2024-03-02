import React from 'react'
import styled from 'styled-components'

function Recentwork() {
  return (
   <>
   <Recentcss>

   <div className='container'>
    <div className='row1'>
        <div className='col-12'>
        <h2>Recent Work</h2> <br/>
        <hr className='line'/>
        </div>
    </div>
   
   <div className='my-3'></div>
   <div className='row row1'>
    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2'>
    <img src="img/1.jpg" width="200px" height="200px" className='img1'/>
     </div>

    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2'>
    <img src="img/2.jpg" width="200px" height="200px" className='img2'/>
    </div>

    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2'>
    <img src="img/3.jpg" width="200px" height="200px" className='img3'/>
    </div>

    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2'>
    <img src="img/4.jpg" width="200px" height="200px" className='img4'/>
    </div>

    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2'>
    <img src="img/5.jpg" width="200px" height="200px"className='img5'/>
    </div>

    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2'>
    <img src="img/1.jpg" width="200px" height="200px"className='img6'/>
    </div>

   </div>

   </div>
  
   </Recentcss>
   
   </>
  )
}
const Recentcss = styled.div`
.line{width: 99%; margin-top: 0rem; margin-right: rem;}


@media (max-width:1140px){
  
    .img1, .img2, .img3, .img4, .img5, .img6{width:350px; height:300px;}
     .img2, .img3, .img4, .img5, .img6{margin-top:1rem; margin-left:1rem }
     .row1{margin-top:1rem}
     .h2{margin-top:1rem; font-size:1.1rem; font-weight:600}
     .line{margin-top:0rem; color:black}
    
    
      }
`

export default Recentwork