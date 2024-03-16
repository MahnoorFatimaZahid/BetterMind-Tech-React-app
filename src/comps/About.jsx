import React from 'react';
import web from "../images/img2.jpg";
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section id='header' className="d-flex align-items-cente padding">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10.5 mx-auto ">
              <div className="row">
                <div className="col-md-6 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 >Welcome to About Page</h1>
                  <h4 className=" description-line">
                   We are Group of Young & Talented Developers Crafting Websites Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur velit fuga, eaque nulla non eveniet ullam assumenda. Corporis non repellat pariatur labore veniam maxime quasi in, magni, at, similique perferendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, veniam nulla cupiditate quidem aliquid adipisci. Sequi hic laborum voluptatem deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit quam veniam aut provident incidunt quibusdam id nihil impedit quo?
                  </h4>
                  <div className="mt-3 pt-1">
                    <NavLink to="/services" className='btn btn-get-started'>Contact Us </NavLink>
                  </div>
                </div>
                <div className="col-lg-6  order-1 order-lg-2 align-self-center">
                 
                    <img src={web} className='img-fluid ' alt="home img" /> 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
