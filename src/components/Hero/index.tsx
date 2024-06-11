"use client";

import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
    const navigation = document.querySelector('nav')
    if (navigation) {
        navigation.classList.toggle('active');
        document.body.classList.toggle('active');
      }
  };
  return (
    <>
      {/* <video autoPlay loop muted className="absolute inset-0 object-cover h-screen xl:h-auto opacity-30">
          <source
            src="/images/blog_second.mp4"
            type="video/mp4"
          />
        </video> */}
      <header>
        <div className="container">
          <div className="">
            <div className=" header-banner">
              <div className="home-menu theme-bg-light">
                <div className="menu-logo">
                  <a className="" href="#">
                    <img src="images/header-logo.svg" />
                  </a>
                </div>
                <nav>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Achievements</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                  <div className="close-menu" onClick={toggleMenu}></div>
                </nav>
                <div className="menu-btn">
                  <a href="#" className="theme-btn-primary">Book a Meeting</a>
                  <div className={`toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                  </div>
                </div>
              </div>
              <div className="banner">
                <h1>Experience Digital Excellence:<br />Your Gateway To Success</h1>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.</p>
                <div className="banner-btn  text-center">
                  <a href="#" className="theme-btn">Talk to an expert</a>
                  <img src="/images/circle.svg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};


export default Hero;
