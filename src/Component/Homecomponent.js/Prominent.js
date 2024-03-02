import React from 'react'
import styled from 'styled-components'

export const Prominent = () => {
  return (
<>
<Prominentcss>
<div className='container-fluid c1 my-5'>
<div className='container'>
    <div className='row'>
      <div className='col-12 my-5'>
      <h1 className=' heading1'><span></span>Prominent Features<span></span></h1><br/>
      </div>
      <div>
     </div>
    </div>
    </div>
    </div>

    <div className='container'>
    <div className='row'>
        <div className='col-12'>
  
        <ul className='feature'>
            <li>Small batch size to give individual attention to each student</li>
            <li>Expert Faculties and well-equipped classrooms</li>
            <li>Flexible batch timings and personal attention to each student</li>
            <li>Free English Support Classes</li>
            <li>Availability of full-time faculties to solve any query or doubt promptly</li>
            <li>Exclusive weekly tests of all the Modules as in actual test environment</li>
            <li>Special attention to boost the performance of each student</li>
            <li>Free student kit (including bag & pens)</li>
            <li>Best- quality Computerized audio system</li>
            <li>Natural atmosphere to converse foreign language</li>
            <li>Special guidance in filling Exam forms and selecting exam dates</li>
            <li>Special entertaining events to improve confidence, vocabulary, communication skills and overall personality</li>
        </ul>
        </div>
    </div>
    </div>
</Prominentcss>
</>
  )
}
const Prominentcss = styled.div`
.heading1{color:black;  font-size:3rem; font-weight:700;}
.c1{background-color:#E0E0F1; height:230px}
.feature li{font-size:1.2rem}

@media (max-width:1140px){
  .heading1{color:black;  font-size:2rem; font-weight:700;}
  .c1{background-color:#E0E0F1; height:150px}
}

`
