import React from 'react';
import web from "../images/img1.jpg";
import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <section id='header' className="d-flex align-items-cente padding">
        <div className="container-fluid nav-bg ">
          <div className="row">
            <div className="col-10.5 mx-auto ">
              <div className="row">
                <div className="col-md-6 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 >Build Your Softwares <br />With <strong style={{ color:"#1094a9" }}>Bettermind Tech</strong></h1>
                  <h4 className=" description-line">
                   We are Group of Young & Talented Developers Crafting Websites.
                  </h4>
                  <div className="mt-3 pt-1">
                    <NavLink to="/service" className='btn btn-get-started'>Get started </NavLink>
                  </div>
                </div>
                <div className="col-lg-6  order-1 order-lg-2 align-self-center">
                 
                    <img src={web} className='img-fluid animated' alt="home img" /> 
                  
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


