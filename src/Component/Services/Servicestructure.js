import React from 'react'

function Servicestructure(props) {
  return (
 
    <div className='container c2' >
    <div className='row'>
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
        <h1 className='head2'>      {props.head} </h1>

        <div className='my-3'></div>
  
            <p className='para'>{props.para}</p> 
           
        </div>

        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
       <img src={props.img} alt='img' className=' img-fluid'/>
            </div>
    </div>
  </div>
  )
}

export default Servicestructure