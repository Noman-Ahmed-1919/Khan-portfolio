import React, { useEffect } from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import audio from "./images/bell.mp3"
import './App.css';
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { BsFillBagXFill } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { FiUploadCloud } from "react-icons/fi";
import { FcCollaboration } from "react-icons/fc";
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { FiDatabase } from "react-icons/fi";
import { FcMindMap } from "react-icons/fc";
import ahsan from "./images/ahsan.jpg"




const Home = () => {


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
    AOS.init({
      duration: 2000,
      delay: 100,
    });

    var cursor = document.getElementsByClassName("cursor")[0];
    var cursor2 = document.getElementsByClassName("cursor2")[0];
    console.log(cursor)
    console.log(cursor2)
    document.addEventListener("mousemove", function (e) {
      cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX
        + "px; top:" + e.clientY + "px;";
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
              <div className='col-4 sitecontent' style={{ padding: "0%" }} data-aos="slide-right">

                <div className='firstrightside'>

                  <div className='leftmenu'>

                    <div className='sidebtn'>
                      <AiOutlineMenu id="openpopupbtn" onClick={play} className='' /><br></br>
                    </div>

                    <div className='ahsicon'>

                      <NavLink to="/Home" className="navlinkkk"><AiOutlineUser onClick={play} className='' /> </NavLink>   <br></br>
                      <NavLink to="/Contact" className="navlinkkk"><AiOutlinePhone onClick={play} className='' /> </NavLink>   <br></br>
                      <NavLink to="/Experience" className="navlinkkk"><AiFillEdit onClick={play} className='' /> </NavLink>   <br></br>
                      <NavLink to="/Project" className="navlinkkk"><BsFillBagXFill onClick={play} className='' /></NavLink>   <br></br>


                      {/* <a href={pdf2} target="_blank"></a> */}
                      {/* <a id="btn1header1"  href={pdf1} target="_blank"></a> */}

                    </div>

                    <div className='ahsicon1'>
                      <FiUploadCloud className='icon' /><br></br>
                    </div>

                  </div>


                  <div className='leftmenu1'>

                    <div id='background'><img className='picahsan' src={ahsan} alt="" /></div>


                    <div className='profiledata'>

                      <div className='h2ahsan'>
                        <h2 className='h222ahsan'>Ahsan Khan</h2>
                      </div>
                      <div className='developer'>
                        <h4 className='devhea' style={{ color: '#00c483' }}>{t('Full Stack Developer')}</h4>
                      </div>

                      <div style={{ textAlign: "center" }} className="facebook">

                        <div>
                          <ul>
                            <li>
                              <a href="" target='_blank'>  <AiFillGithub className='iconnn' style={{ color: "white" }} /> </a>
                            </li>
                          </ul>
                        </div>


                        <div>
                          <ul>
                            <li>
                              <a href="" target='_blank'> <FaLinkedin className='iconnn1' style={{ color: "white" }} /></a></li>
                          </ul>
                        </div>

                      </div>


                    </div>

                  </div>
                </div>
              </div>



              <div className='col-8 leftsideee' >

                <div className="message-container">

                  <div className='seccc2' data-aos="slide-right">

               

                    <h2 className='h22ahs' style={{ color: "white" }}>about me</h2>

                    <h5 className='dapp' style={{ color: "#00c483" }}>22 years / Dappomatics / Freelance</h5>

                    <p className='ahsanp' style={{ color: "#888888" }}>I’m ahsan, a Software Developer.I'm 22 years old Full-Stack Developer having over 1 year of experience in web development and of designing backend architectures, developed from scratch many diverse digital and SaaS products. I'm passionate about learning new technologies and frameworks.</p>
                  </div>

                  <hr className='hrrr'></hr>

                  <div className='services'>

                    <h2 style={{ color: "white" }} className='h22ahs' >my services</h2>

                    <div className='sersec1'>

                      {/* first div  */}
                      <div>

                        <FiMonitor className='moni' />

                        <h5 style={{ color: "white" }}>frontend</h5>

                        <p className='ahsanp' style={{ color: "#888888" }}>Building a custom websites solution based on your technical specification.</p>

                      </div>
                      {/* second div  */}

                      <div>

                        <FcMindMap className='moni' />

                        <h5 style={{ color: "white" }}>backend</h5>
                        <p className='ahsanp' style={{ color: "#888888" }}>Designing backend architectures, developed from scratch many diverse digital and SaaS products.</p>

                      </div>


                    </div>


                    <div className='sersec1'>

                      {/* first div  */}
                      <div>

                        <FiDatabase className='moni' />

                        <h5 style={{ color: "white" }}>data base</h5>

                        <p className='ahsanp' style={{ color: "#888888" }}>Provide database and also organized collection of structure information, controlled by a database management system (DBMS).</p>

                      </div>
                      {/* second div  */}

                      <div>

                        <FcCollaboration className='moni' />

                        <h5 style={{ color: "white" }}>web 3</h5>
                        <p className='ahsanp' style={{ color: "#888888" }}>Work on decentralised apps and connects multi crypto wallets and peer to peer internet transaction.</p>

                      </div>


                    </div>

                  </div>


                  {/* ============== pricing sec ========================  */}

                  <div><h2 className='pricingmain' style={{ color: "white" }}>my pricing</h2></div>

                  <div className='pricing' >



                    <div style={{ textAlign: "center", color: "white" }}>
                      <h5 className='h5basic'>advanced</h5>
                      <ul>

                        <li>consulting</li>
                        <li>development</li>
                        <li>optimization</li>
                        <li>24/7 support</li>
                      </ul>

                      <button className='btn1'>CHOOSE PLAN</button>

                    </div>

                    <div className='gap' style={{ textAlign: "center", color: "white" }}>
                      <h5 className='h5basic'>basic</h5>
                      <ul>
                        <li>consulting</li>
                        <li>development</li>
                        <li>optimization</li>
                        <li>24/7 support</li>
                      </ul>

                      <button className='btn1'>CHOOSE PLAN</button>
                    </div>

                    <div className='gap' style={{ textAlign: "center", color: "white" }}>
                      <h5 className='h5basic'>premium</h5>
                      <ul>
                        <li>consulting</li>
                        <li>development</li>
                        <li>optimization</li>
                        <li>24/7 support</li>
                      </ul>

                      <button className='btn1'>CHOOSE PLAN</button>
                    </div>



                  </div>


                  {/*================= my clients ==================*/}
                  <div><h2 className='clientsgmain' style={{ color: "white" }}>certifications</h2></div>



                  <div className='homebtn'>

                    <a id="btn1header"   target="_blank">Experience</a>
                    <a id="btn1header1" target="_blank">Curriculum Vitae</a>
                    <a id="btn1header1" className=""  target="_blank">Certifications</a>

                  </div>





                </div>
              </div>




            </div>

          </div>

        </div>


      </section>


    </>
  );
}

export default Home;
