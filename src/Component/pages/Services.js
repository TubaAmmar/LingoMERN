import React from 'react'
import styled from 'styled-components'
import Servicedata from '../Services/Servicedata'
import Servicestructure from '../Services/Servicestructure'

function Services() {
  return (
    <Servicecss>
  <div className='container-fluid'>
    <div className='row'>
        <div className='col-12 border'>

        </div>
    </div>
  </div>
 
 <div className='my-4'></div>
  <div className='container-fluid'>
  <div className='row'>
    <div className='col-12 text-center'>
    <h1 className='heading'>Services</h1> <br/> 

    </div>
  </div>

  </div>


  {Servicedata.map((val, index)=>{
                    return(
          <div className='container c2' >
    <div className='row'>
        <div className='col-12 col-md-6'>
        <h1 className='head2'>  {val.head}    </h1>

        <div className='my-3'></div>
  
            <p className='para'>{val.para}</p> 
           
        </div>

        <div className='col-12 col-md-6'>
       <img src={val.img} alt='img' className=' img1 img-fluid mx-md-5' />
            </div>
    </div>
  </div> 
                       
                    )
                  
                })}






  </Servicecss>

  
  )
}

const Servicecss = styled.div`
.border{height:100px; background-color:yellow;}
.heading{font-size:3.4rem; font-weight:900; margin-top:4rem}
.line{ color:yellow}
.img1{ margin-top:1rem}
.c2{margin-top:8rem}
.head2{font-size:2.5rem; font-weight:700; margin-bottom:3rem;}
.counsel{margin-top:1rem;}


@media (max-width:1140px){
    .c2{margin-top:5rem}
    .para{
      font-size:.8rem
    }
}
`

export default Services