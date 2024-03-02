import React from 'react'
import styled from 'styled-components'
import Successdata from '../Homecomponent.js/Successdata'

export const Success = () => {
  return (
 <>
 <Successcss>
 <div className='container-fluid'>
    <div className='row'>
      <div className='col-12'>
      <h1 className='text-center heading1'>Success Stories</h1>
      </div>
      <div>
     </div>
    </div>
    </div>


   
                    <div className='container'>
                        <div className='row my-5'>
                            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 '>
                              <p className='p1'> {Successdata[0].para} </p>
                              <p className='p2'>  {Successdata[0].name} </p>
                              <i className='p3'>  {Successdata[0].training} </i>
                            </div>


                            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <p className='p1'> {Successdata[1].para} </p>
                              <p className='p2'>  {Successdata[1].name} </p>
                              <i>  {Successdata[1].training} </i>
                                </div>
                        </div>

                        <div className='row my-5'>
                            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                              <p className='p1'> {Successdata[6].para} </p>
                              <p className='p2'>  {Successdata[6].name} </p>
                              <i>  {Successdata[6].training} </i>
                            </div>


                            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <p className='p1'> {Successdata[7].para} </p>
                              <p className='p2'>  {Successdata[7].name} </p>
                              <i>  {Successdata[7].training} </i>
                                </div>
                        </div>


                        <div className='row my-5'>
                            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                              <p className='p1'> {Successdata[2].para} </p>
                              <p className='p2'>  {Successdata[2].name} </p>
                              <i>  {Successdata[2].training} </i>
                            </div>


                            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <p className='p1'> {Successdata[3].para} </p>
                              <p className='p2'>  {Successdata[3].name} </p>
                              <i>  {Successdata[3].training} </i>
                                </div>
                        </div>

                        <div className='row my-5'>
                            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                              <p className='p1'> {Successdata[4].para} </p>
                              <p className='p2'>  {Successdata[4].name} </p>
                              <p>  {Successdata[4].training} </p>
                            </div>


                            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <p className='p1'> {Successdata[5].para} </p>
                              <p className='p2'>  {Successdata[5].name} </p>
                              <i>  {Successdata[5].training} </i>
                                </div>
                        </div>
                    </div>    
             
 

  </Successcss>

 </>
  )
}
const Successcss = styled.div`
.heading1{color:black; margin-top:3rem; font-size:3.5rem; font-weight:800;}
.p1{padding:1.7rem; background-color:#E0E0F1;}
.p2{font-weight:700}
.p3{margin-top:0rem}
`
