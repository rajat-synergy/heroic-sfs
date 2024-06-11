import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import Image from 'next/image';


const Testimonials = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-head">
          <h2>Read our blog</h2>
        </div>
      </div>
      <div className="blog-slider">
        <div className="blog-box theme-light-border-bg theme-space-light">
          <p className="large-pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
          <div className="blog-user">
            <div className="user-img">
              <Image src="/images/blog-user1.png" width={45} height={45} alt="" />
            </div>
            <div className="user-info">
              <h5 className="blog-user-head">Sahil Hasan</h5>
              <p className="blog-user-pera">Founder @ Dots</p>
            </div>
          </div>
        </div>
        <div className="blog-box theme-light-border-bg theme-space-light">
          <p className="large-pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
          <div className="blog-user">
            <div className="user-img">
              <Image src="/images/blog-user2.png" width={45} height={45} alt="" />
            </div>
            <div className="user-info">
              <h5 className="blog-user-head">Patrick Zhang</h5>
              <p className="blog-user-pera">Tech Lead @ Passes</p>
            </div>
          </div>
        </div>
        <div className="blog-box theme-light-border-bg theme-space-light">
          <p className="large-pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
          <div className="blog-user">
            <div className="user-img">
              <Image src="/images/blog-user3.png" width={45} height={45} alt="" />
            </div>
            <div className="user-info">
              <h5 className="blog-user-head">Cody Krainock</h5>
              <p className="blog-user-pera">Engineering Lead @ Loop</p>
            </div>
          </div>
        </div>
        <div className="blog-box theme-light-border-bg theme-space-light">
          <p className="large-pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
          <div className="blog-user">
            <div className="user-img">
              <Image src="/images/blog-user4.png" width={45} height={45} alt="" />
            </div>
            <div className="user-info">
              <h5 className="blog-user-head">Mit Shah</h5>
              <p className="blog-user-pera">COO @ Method Financial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
