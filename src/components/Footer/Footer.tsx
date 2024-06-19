import React from 'react'

function Footer() {
  return (
    <footer className="theme-bg-primary footer-theme-border-bg theme-gradient-btg">
    <div className="container">
      <div className="footer-banner">
        <div className="footer-logo">
          <a href="#"><img src="images/footer-logo.svg"></img></a>
          <h5>13 YEARS OF<br/>EXPERIENCE</h5>
        </div>
        <div className="footer-link">
          <h6>SERVICES</h6>
          <ul>
            <li><a href="#">Web Design Services</a></li>
            <li><a href="#">Web Development Services</a></li>
            <li><a href="#">Graphics Design</a></li>
            <li><a href="#">Mobile App Development</a></li>
            <li><a href="#">Hybrid App Development</a></li>
            <li><a href="#">Web App Development Services</a></li>
          </ul>
        </div>
        <div className="footer-link">
          <h6>SIGNATURE SERVICES</h6>
          <ul>
            <li><a href="#">Quality Assurance Services</a></li>
            <li><a href="#">GIS Application Development</a></li>
            <li><a href="#">SaaS Application Development</a></li>
            <li><a href="#">SaaS Application Testing</a></li>
            <li><a href="#">Digital Transformation</a></li>
          </ul>
        </div>
        <div className="footer-link">
          <h6>COMPANY</h6>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Our Core Value</a></li>
            <li><a href="#">Our Approach</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom footer-bottom-theme-border-bg">
      <div className="container">
        <div className="footer-rights">
          <div className="rights-info">
            <p className="small-pera">© SFS Webtech PVT LTD&nbsp;2024&nbsp;| All Rights Reserved</p>
          </div>
          <div className="footer-social-link">
            <ul>
              <li>
                <a href="#"><img src="images/facebook.svg"></img></a>
              </li>
              <li><a href="#"><img src="images/spotify.svg"></img></a></li>
              <li><a href="#"><img src="images/twitter.svg"></img></a></li>
              <li> <a href="#"><img src="images/insta.svg"></img></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;