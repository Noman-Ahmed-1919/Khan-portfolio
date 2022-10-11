import React, { useEffect } from 'react';
import { FcApproval } from "react-icons/fc";
import { BrowserRouter, Routes, Route, Link, NavLink, useParams} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import audio from "./images/bell.mp3"
import './App.css';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { BsFillBagXFill} from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { FiUploadCloud } from "react-icons/fi";
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import Circle from "./Circle";
import Circle1 from "./Circle1";
import Circle2 from './Circle2';
import Circle3 from './Circle3';
import ahsan from "./images/ahsan.jpg"


function Experience() {



  const changeLang = (l) => {
    return () => {
      // alert("hello")
  
      i18n.changeLanguage(l);

      // localStorage.setItem('lang',l);
    }
  }


  const { t } = useTranslation();



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
  <h4 style={{color:'#00c483'}}>{t('Full Stack Developer')}</h4>
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



<div className="message-containerexperience">
<div className='contp' data-aos="slide-right">

<p>Expertise are defined as FrontEnd Developer along side as BackEnd Developer too. Also has work experience on WEB3.Passionate and Enthusiast towards developing strategies and implementation.Polishing the skills more in these domains with Hardwork and hunger to learn something new.</p>
    
</div>


<div style={{display:"flex"}}>
<FcApproval className='approve'/>
<h2 style={{color:"white"}} className="skill">Skills</h2>
</div>


<div className='expdiv'>

<div>
<h4 style={{color:"white"}}>frontend (React)</h4>
<br></br>
<Circle/>
</div>


<div className='gaptop'>
<h4 style={{color:"white"}}>backend (Nodejs)</h4>
<br></br>
<Circle1/>
</div>


</div>

<br></br>
<br></br>

<div className='expdiv1'>

<div className='gaptop'>
<h4 style={{color:"white"}}>data base</h4>
<br></br>
<Circle2/>
</div>


<div className='gaptop'>
<h4 style={{color:"white"}}>web 3</h4>
<br></br>
<Circle3/>
</div>


</div >





</div>


</div>

</div>
</div>




</div>


 </section>
 
 
 </>
  );
}

export default Experience;
