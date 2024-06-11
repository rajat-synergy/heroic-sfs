import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="theme-bg-primary footer-theme-border-bg theme-gradient-btg">
      <div className="container">
        <div className="footer-banner">
          <div className="footer-logo">
            <a href="#">
              {/* <Image src="assest/images/footer-logo.svg" alt="" /> */}
              <Image src="/images/footer-logo.svg" width={90} height={90} alt="" />
            </a>
            <h5>13 YEARS OF<br />EXPERIENCE</h5>
          </div>
          <div className="footer-link">
            <h6>SERVICES</h6>
            
              <span><a href="#">Web Design Services</a> <img src="/images/footer-top-arrow.svg"></img> </span>
              <span><a href="#">Web Development Services</a><img src="/images/footer-top-arrow.svg"></img></span>
              <span><a href="#">Graphics Design</a><img src="/images/footer-top-arrow.svg"></img></span>
              <span><a href="#">Mobile App Development</a><img src="/images/footer-top-arrow.svg"></img></span>
              <span><a href="#">Hybrid App Development</a><img src="/images/footer-top-arrow.svg"></img></span>
              <span><a href="#">Web App Development Services</a><img src="/images/footer-top-arrow.svg"></img></span>
            
          </div>
          <div className="footer-link">
            <h6>SIGNATURE SERVICES</h6>
            <ul>
              <span><a href="#">Quality Assurance Services</a><img src="/images/footer-top-arrow.svg"></img></span>
              <span><a href="#">GIS Application Development</a><img src="/images/footer-top-arrow.svg"></img></span>
              <span><a href="#">SaaS Application Development</a><img src="/images/footer-top-arrow.svg"></img></span>
              <span><a href="#">SaaS Application Testing</a><img src="/images/footer-top-arrow.svg"></img></span>
              <span><a href="#">Digital Transformation</a><img src="/images/footer-top-arrow.svg"></img></span>
            </ul>
          </div>
          <div className="footer-link">
            <h6>COMPANY</h6>
            <ul>
              <span><a href="#">About</a><img src="/images/footer-top-arrow.svg"></img></span>
              <span><a href="#">Our Story</a><img src="/images/footer-top-arrow.svg"></img></span>
              <span><a href="#">Our Core Value</a><img src="/images/footer-top-arrow.svg"></img></span>
              <span><a href="#">Our Approach</a><img src="/images/footer-top-arrow.svg"></img></span>
              <span><a href="#">Careers</a><img src="/images/footer-top-arrow.svg"></img></span>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom footer-bottom-theme-border-bg">
        <div className="container">
          <div className="footer-rights">
            <div className="rights-info">
              <p className="small-pera">© SFS Webtech PVT LTD 2024 | All Rights Reserved</p>
            </div>
            <div className="footer-social-link">
              <ul>
                <li><a href="#"><Image src="/images/facebook.svg" width={12} height={12} alt="" /></a></li>
                <li><a href="#"><Image src="/images/spotify.svg" width={25} height={25} alt="" /></a></li>
                <li><a href="#"><Image src="/images/twitter.svg" width={20} height={20} alt="" /></a></li>
                <li><a href="#"><Image src="/images/insta.svg" width={20} height={20} alt="" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
