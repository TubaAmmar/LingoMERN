import React from 'react'
import styled from 'styled-components'
import Ieltsteamdata from './Ieltsteamdata'

function Ieltsteam() {
  return (
<>
    <Ieltsteamcss>
    <div className='container-fluid c1 my-4'>
    <div className='row'>
      <div className='col-12'>
      <h1 className='text-center heading1'><span></span>IELTS TEAM<span></span></h1><br/>
      </div>
      <div>
     </div>
    </div>
    </div>

    <div className='container-fluid my-5 '> 
    {Ieltsteamdata.map((val, index)=>{
                    return(
           
            <div className='container'>
        <div className='row '>
            <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 '>
              <h2 className='c2'> {val.name} </h2>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'>
                <h4> {val.post} </h4>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'>
                <p> {val.icon} </p>
                </div>
        </div>
        <hr/>
        </div>

        
                           
    
                    )
                  
                })}
                </div>
 
    </Ieltsteamcss>
</>
  )
}
const Ieltsteamcss = styled.div`
.heading{font-size: 25px; margin-left: 1rem;}
.heading1{color:black; margin-top:3rem; font-size:3.5rem; font-weight:800;}
.c1{background-color:#E0E0F1; height:200px}
.c2{font-weight:900}

@media (max-width:1140px){
  .heading1{color:black; margin-top:3rem; font-size:2rem; font-weight:800;}
.c1{background-color:#E0E0F1; height:150px}
}
`

export default Ieltsteam