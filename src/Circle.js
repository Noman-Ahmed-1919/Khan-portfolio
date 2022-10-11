import React, { useEffect } from 'react';


import AOS from "aos";

const Circle = () => {


   



    useEffect(() => {
        AOS.init({ duration: 2000,  
        delay: 100,});
      
        let number = document.getElementById("number");
        let counter = 0;
        console.log(number);
        setInterval(() => {
    
            if (counter == 85) {
                clearInterval();
            } else {
                counter += 1;
                number.innerHTML = counter + "%";
            }
    
        }, 30);
      
      }, []);















    return (
        <>

            <div className="">


                <div className="cirskill">


                    <div className="outer">
                        <div className="inner">

                            <div id="number">
                            
                            </div>

                        </div>
                    </div>


                    <svg id="svggg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle id="circleee" cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>




                </div>





            </div>

        </>
    )

}

export default Circle;