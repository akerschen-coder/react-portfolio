import React from 'react';

export default function Portfolio() {
  return (
    <div>
<section className="main-section" id= "work">
            <div className="side-by-side center">
                <a href="https://secure-crag-98297.herokuapp.com/login" target="_blank" rel="noreferrer">
                   <div className="flex card1"> 
                        <h4>Din-Din A Menu App</h4>
                   </div>
                </a>

               <a href="https://github.com/akerschen-coder/e-commerence" target="_blank" rel="noreferrer">
                   <div className="p2 flex">
                    <h4>E-commerence Backend</h4>
                   </div> 
                </a>
           
               <a href="https://akerschen-coder.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
                    <div className="p3 flex">
                        <h4>Weather DashBoard</h4>
                    </div>
                </a>
           
               <a href="https://limitless-eyrie-51099.herokuapp.com/" target="_blank" rel="noreferrer">
                   <div className="p4 flex">
                       <h4>Note Taker</h4>
                    </div>
               </a>

               <a href="https://github.com/akerschen-coder/employee-page-builder" target="_blank" rel="noreferrer">
                    <div className="p5 flex">
                        <h4>Employee Page builder Repo- Backend</h4>
                   </div>
                </a>
            </div>
            </section>

    </div>
  );
}