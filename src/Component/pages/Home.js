import React from 'react'


import Cards from '../Homecomponent.js/Cards'
import Recentwork from '../Homecomponent.js/Recentwork'
import Aboutus from '../Homecomponent.js/Aboutus'
import { Whychooseus } from '../Homecomponent.js/Whychooseus'
import Storyofsuccess from '../Homecomponent.js/Storyofsuccess'
import Backgroundimgs from '../Homecomponent.js/Backgroundimgs'
import Carousel from '../Homecomponent.js/Carousel'
import styled from 'styled-components'


function Home() {
  return (
    <>
    <Homecss>
     <Backgroundimgs />
     <Cards />

      <Carousel />
      </Homecss>
     

     
      
    </>

  )
}

const Homecss = styled.div`
body{ background-color:#E0E0F1; }
`



export default Home