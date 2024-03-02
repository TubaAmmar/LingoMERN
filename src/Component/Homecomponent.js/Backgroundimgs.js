import React from 'react'
import styled from 'styled-components'

const Backgroundimgs = () => {
  return (
<>
<Imgscss>
<div className='header'>
 <h1 className='heading'>together leading</h1>
 <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, odit eos reiciendis repellendus illum,Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit.</p>
 
</div>


    </Imgscss>
</>
  )
}

const Imgscss = styled.div`


.header{width:100%; height:600px; background-image: url("img/1.png"); background-position:center; background-repeat:no-repeat; background-size:100% 100%; overflow-x:hidden; margin-bottom:0rem;}

.header{animation: slider 7s infinite linear;}

@keyframes slider{0%{background-image: url('img/1.png');}
 65%{background-image: url('img/6.jpeg');   }
  85%{background-image: url('img/8.jpeg');    }
  89%{background-image: url('img/8.jpeg');    }
 

  
  
  }

.heading{font-size:5rem; color:#070754; position:relative; top:20%; left:10%; overflow-x:hidden}
.heading{animation: head 2s normal linear;}

.para{ position:relative; top:25%; left:10%; width:500px; font-size:1.3rem; font-weight:500;    }
.para2{animation: para2 2s normal linear;}

.para{animation: textup 2s normal linear;}
@keyframes  textup{
    0%{
        position:relative;
        top:0;
    }

    

    100%{
        position:relative;
        left:10%;
    
    }




}


@keyframes  head{
    0%{
        position:relative;
        top:0;
    }

    100%{
        position:relative;
        left:10%;
    
    }

}





@media (max-width:1140px){
    .heading{font-size:2.3rem; color:#070754; position:relative; top:20%; left:10%; overflow-x:hidden}

    .para{ position:relative; top:25%; left:10%; width:300px; font-size:1.2rem; font-weight:500;    }
}
    
  

    





`

export default Backgroundimgs