import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

function Storystructure(props) {
  return (
<>
<Successcss>



<p className='para1'><i> {props.detail} </i></p>

<p className='para2' ><i> {props.name} </i></p>
    




</Successcss>
</>
  )
}
const Successcss = styled.div`

.part{background-color:cream; height:800px;}
.card{width:; box-shadow:2px 2px 50px 2px #f5b300 ; height:350px;}
.para1{padding-top:2.2rem; padding-left:1.9rem; width:400px}
.para2{padding-right:1.7rem; text-align:right;}
.img1{width:70px; height:70px; border-radius:50% 50%; position:relative; top:24%; left:-5%; z-index:999;}

@media (max-width:1140px){
  .para1{padding-top:2.2rem; padding-left:1.9rem; width:300px}
.para2{padding-left:4rem; text-align:center; margin-bottom:2rem}
.img1{width:70px; height:70px; border-radius:50% 50%; position:relative; top:24%; left:%; z-index:999;}
}






`


export default Storystructure