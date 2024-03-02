
import React, { useState } from 'react'
import styled from 'styled-components'
import { faEnvelope, faLocationDot, faPhone, faVoicemail} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast from 'react-hot-toast';
import axios from 'axios'



function Contact (){

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    subject:'',
    phone:'',
    message:'',
  
  })

  const [error, setError] = useState('');

  const handleChange = (event)=>{
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
  }

  const createUser = () => {
    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.subject || !formData.phone || !formData.message) {
        setError('All fields are required');
        return;
    }

    axios.post('http://localhost:5000/getData', formData)
        .then((response) => {
            toast.success(response.data.msg, { position: 'top-right' });
            
            
            // Clear form fields
            setFormData({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message:''
            });
            setError('');
        })
        .catch((error) => {
            console.error('Error creating user:', error);
        });
};




  return (
  <>
   <Contactcss>
  

  <div className='my-4'></div>
  <div className='container'>
  <div className='row'>
    <div className='col-12 '>
    <h1 className='heading'>Gujranwala</h1> <br/>  

    </div>
  </div>

  </div>

  <div className='my-5'></div>

  <div className='container'>
    <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
           <img src='img/11.jpg' alt='img' className='img-fluid img1' />
        </div>

        <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
        <iframe className="gmap_iframe map" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=381-B, Near Billa Pan Chowk, Satellite Town, Gujranwala, PAKISTAN&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>

            <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
            <div className='card card1'>
            <div className='my-4'></div>
                <h5 className='head'>Gujranwala Office</h5>

                <div className='my-1'></div>
                <p className='location'>
                <FontAwesomeIcon icon={faLocationDot } className='dot' ></FontAwesomeIcon>
              381-B, Near Billa Pan Chowk, Satellite Town, Gujranwala, PAKISTAN
                </p>

                <div className=''></div>

                <p className='phone'>
                <FontAwesomeIcon icon={faPhone }  className='phoneicon'></FontAwesomeIcon>
                 03074606997 
                 03254975812
                </p>

                <div className=''></div>

                <p className='email'>
                <FontAwesomeIcon icon={faEnvelope }  className='envelop' ></FontAwesomeIcon>
                linguisticscomplex@gmail.com
                </p>
            </div>
            </div>
    </div>
  </div>

     <div className=''>
     <div className='container my-5 c1'>
     <div className='row'>
     <div className='col-12 col-md-6'>
     <img src='img/51.png' width='100%' height='300px' className='img12'/>
     </div>
     <div className='col-12 col-md-6'>
     <h1 className='my-5 text-center'>Leave a message </h1>
     <div className='form1'>
     <input type='text' placeholder='Name' name='name' value={formData.name} onChange={handleChange} required />
     <input type='email' placeholder='Email' name='email' value={formData.email} onChange={handleChange} required />
     <input type='text' placeholder='Subject' name='subject' value={formData.subject} onChange={handleChange} required />
     <input type='number' placeholder='Phone number' name='phone' value={formData.phone} onChange={handleChange} required />
      <textarea placeholder='Message' name='message' value={formData.message} onChange={handleChange} required>
      </textarea>
      <button type="submit" className='submit' onClick={createUser}>Send</button>

      {error && <p className="error11">{error}</p>}

     </div>
     </div>
     </div>
     </div>
   
     
     </div>

   </Contactcss>

 
  </>
  )
}
const Contactcss= styled.div`
.border{height:100px; background-color:yellow;}
.heading{font-size:3.4rem; font-weight:700; margin-top:3rem; }
.head{padding-left:2.9rem; font-size:1.7rem; font-weight:700; }
.location , .phone , .email{ padding-left:2.5rem; padding-top:1rem; font-size:1rem; font-weight:500 }
.dot , .phoneicon , .envelop{margin-right:.9rem}
.card1{color:white; background-color:#070754; height:320px; font-size:.5rem}
.map{height:320px}
.section1{display:flex; margin:auto; width:60%; color:white}
.section1 li{list-style:none;}
.list1{font-size:1.5rem; font-weight:700; margin-right:1.5rem}
.list2{width:500px; height:60px; border:none}
.list2:hover{border:6px solid #070754; border-radius: }

.list3{font-size:1.5rem; font-weight:700; margin-right:3.3rem; padding-top:1.3rem }

.list4{ height:150px; width:500px; border:none}
.submit{width:20%; height:60px; margin-left:19rem}
.part{background-image: url('img/8.jpeg'); background-size: cover; background-repeat: no-repeat; background-position: center; background-attachment: fixed; margin-top: 1.5rem; color:white; height:700px }
.form1{
  display: flex;
  flex-direction: column;\
}

.form1 input{
  padding:.5rem;
  margin-top: 1.2rem;
  width:80%;
}

.form1 textarea{
  width:80%;
  margin-top:1.2rem;
  padding:.5rem;
}

.form1 button{
  width:80%;
  margin-top:1.2rem;
  border:none;
  background-color: blue;
  color: white;
}

.form1{
  margin-bottom: 5rem;
}
.error11{
  color: red;
  padding: 1rem 0;
}
.img12{
  margin-top:5rem;
}
 
@media (max-width:1140px){
  .img1{width:414px; margin-bottom:1rem}
  .card1{margin-top:1rem; height:370px; }
  .dot , .phoneicon , .envelop{margin-right:.7rem}
  .location , .phone , .email{ padding-left:2rem; padding-top:1rem; font-size:1.2rem; font-weight:500 }
  .section1{display:flex; margin:auto; width:100%; color:white; margin:0px}

  .list1{font-size:1rem; font-weight:500; margin-right:1rem; margin-left:-1.5rem}
.list2{width:200px; height:50px; border:none}

.list3{font-size:1rem; font-weight:500; margin-right:2rem; padding-top:1.3rem; margin-left:-1.5rem} }
.list4{width:200px; height:150px; border:none}
.submit{width:100%; height:60px; margin-left:0rem}
.form1{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.form1 input{
 width:80%
}

.form1 textarea{
  width:80%
 }



 .form1 button{
  wi0%
 }


 
}

  






`

export default Contact
