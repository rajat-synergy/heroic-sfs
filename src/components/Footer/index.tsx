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
