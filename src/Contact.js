import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route, Link, NavLink, useParams} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import audio from "./images/bell.mp3"



import './App.css';


import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { BsFillBagXFill} from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { FiUploadCloud } from "react-icons/fi";


import { FaFacebookF } from 'react-icons/fa';

import { FaLinkedin } from 'react-icons/fa';


import { BiMap } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";


import ahsan from "./images/ahsan.jpg"



function Contact() {


  const play = () => {
    new Audio(audio).play()
  }


useEffect(() => {
  AOS.init({ duration: 2000,  
  delay: 100,});


  var cursor = document.querySelector(".cursor");
  var cursor2 = document.querySelector(".cursor2");
  document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX
    + "px; top:" + e.clientY + "px";
  })




}, []);



  return (
 <>
 
 <section id='port'>
 <div className='cursor'></div>
<div className='cursor2'></div>

<div className='maindiv'>

<div className='container'>

  <div className='row' id='back' >
<div className='col-4 sitecontent' style={{padding:"0%"}} data-aos="slide-right">

<div className='firstrightside'>

<div className='leftmenu'>

<div className='sidebtn'>
<AiOutlineMenu id="openpopupbtn" onClick={play}  className=''/><br></br>
</div>

<div className='ahsicon'>
<NavLink to="/Home" className="navlinkkk"><AiOutlineUser onClick={play} className=''/> </NavLink>   <br></br>
<NavLink to="/Contact" className="navlinkkk"><AiOutlinePhone onClick={play} className=''/> </NavLink>   <br></br>
<NavLink to="/Experience" className="navlinkkk"><AiFillEdit onClick={play} className=''/> </NavLink>   <br></br>
<NavLink to="/Project" className="navlinkkk"><BsFillBagXFill onClick={play} className=''/> </NavLink>   <br></br>
  </div>

<div className='ahsicon1'>
<FiUploadCloud className='icon'/><br></br>
</div>


</div>


<div className='leftmenu1'>
<div id='background'><img className='picahsan' src={ahsan} alt="" /></div>


<div className='profiledata'>

<div className='h2ahsan'>
  <h2>Ahsan Khan</h2>
</div>
<div className='developer'>
  <h4 style={{color:'#00c483'}}>Full Stack Developer</h4>
</div>

<div style={{textAlign:"center"}} className="facebook">

 <div>
 <ul>
    <li><FaFacebookF className='iconnn'  style={{color:"white"}}/></li>
    
  </ul>
  </div> 


  <div>
 <ul>
 <li><FaLinkedin className='iconnn1'   style={{color:"white"}}/></li>
    
  </ul>
  </div> 
 
  



</div>


</div>

</div>



</div>

</div>


<div className='col-8 leftsideee' >

<div className="message-container1">

<div className='maindivsec1'>

<div style={{display:"flex"}}>
<BiMap className='location'/>
<p>R-799 Block # 9 fb area</p>
</div>

<div className='maindiv222' style={{display:"flex"}}>
<BiPhoneCall className='location'/>
<p>+923446389032</p>
</div>
</div>

<div className='maindivsec2'>

<div style={{display:"flex"}}>
<BiMailSend className='location1'/>
<p>noman-ahmed-1919</p>
</div>



<div className='maindiv222' style={{display:"flex"}}>
<BiMailSend className='location1'/>
<p className='psizeee'>nomanahmed1919@gmail.com</p>
</div>

</div>



<h2 className='sendmsg' style={{color:"white"}}>Send message</h2>


<div className='inp'>

<input className='input1' placeholder='first name'/><br></br>
<input className='input1' placeholder='second name'/><br></br>
<input className='input1' placeholder='email'/><br></br>

<input className='input2' placeholder='message'/><br></br>

</div>

<button className='btn22'>Send Message</button>

</div>
</div>


</div>

</div>




</div>


 </section>
 
 
 </>
  );
}

export default Contact;
