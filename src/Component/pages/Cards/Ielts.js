import React from 'react'
import styled from 'styled-components'
import Ieltsdata from '../../Homecomponent.js/Ieltsdata'
import Ieltsteam from '../../Homecomponent.js/Ieltsteam'
import { Prominent } from '../../Homecomponent.js/Prominent'

function Ielts(props) {
  return (
<>
<Ieltscss>
<div className='container-fluid'>
    <div className='row'>
      <div className='col-12'>
      <h1 className='text-center heading1'><span></span>IELTS<span></span></h1><br/>
      </div>
      <div>
     </div>
    </div>
    </div>
 
 <div className='container-fluid c1'>
    <div className='container  '>
      <div className='row '>
        <div className='col-12 col-lg-7 col-xl-7 my-5'>
           {Ieltsdata[0].paragraph} 
        </div>

        <div className='col-12 col-lg-5 col-xl-5 my-5 c2'>
        <iframe  height="280" src="https://www.youtube.com/embed/-nkwOxLwyQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
      </div>
    </div>
    </div>




</Ieltscss>
    <Prominent />
    <Ieltsteam />

</>
  )
}
const Ieltscss = styled.div`
.heading{font-size: 25px; margin-left: 1rem;}
.heading1{color:black; margin-top:3rem; font-size:3.5rem; font-weight:800;}
.c1{background-color:#E0E0F1; height:450px}
.c2 iframe{width:450px}

@media (max-width:1140px){
  .c1{
    height:950px
  }
  .c2 iframe{width:300px}
}

`

export default Ielts