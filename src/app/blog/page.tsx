import React from 'react'

const Blog: React.FC = () => {
    return (
        <>
    <section className="blog-section theme-bg-secondary">
    <div className="container">
      <div className="blog-head">
        <h2 className='pb-0'>Read our blog</h2>
      </div>
    </div>
    <div className="row blog-slider">
      <div className="col-3 px-3 ">
        <div className='blog-info blog-box theme-light-border-bg theme-space-light'>
        <p className="large-pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."</p>
        <div className="blog-user">
          <div className="user-img">
            <img src="images/blog-user1.png" alt=""></img>
          </div>
          <div className="user-info">
            <h5 className="blog-user-head">Sahil Hasan</h5>
            <p className="blog-user-pera">Founder @ Dots</p>
          </div>
        </div>
        </div>
        
      </div>
      <div className="col-3 px-3">
      <div className='blog-info blog-box theme-light-border-bg theme-space-light'>
        <p className="large-pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."</p>
          <div className="blog-user">
            <div className="user-img">
              <img src="images/blog-user2.png" alt=""></img>
            </div>
            <div className="user-info">
              <h5 className="blog-user-head">Patrick Zhang</h5>
              <p className="blog-user-pera">Tech Lead @ Passes</p>
            </div>
          </div>
          </div>
      </div>
      <div className="col-3 px-3">
      <div className='blog-info blog-box theme-light-border-bg theme-space-light'>
        <p className="large-pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."</p>
          <div className="blog-user">
            <div className="user-img">
              <img src="images/blog-user3.png" alt=""></img>
            </div>
            <div className="user-info">
              <h5 className="blog-user-head">Cody Krainock</h5>
              <p className="blog-user-pera">Engineering Lead @ Loop</p>
            </div>
          </div>
          </div>
      </div>
      <div className="col-3 px-3">
      <div className='blog-info blog-box theme-light-border-bg theme-space-light'>
        <p className="large-pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."</p>
          <div className="blog-user">
            <div className="user-img">
              <img src="images/blog-user4.png" alt=""></img>
            </div>
            <div className="user-info">
              <h5 className="blog-user-head">Mit Shah</h5>
              <p className="blog-user-pera">Co-Founder and COO @ Method Financial</p>
            </div>
          </div>
          </div>
      </div>
    </div>
    <div className='container'>
        <div className='main-blog'>
            <div className='row theme-border-bg theme-gradient-btg theme-blog-space'>
                <div className='col-3 main-blog-img'>
                 <img src='images/blog-img.jpg'></img>
                </div>
                <div className='col-9 main-blog-info ps-3'>
                    <h4 className='main-blog-head'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </h4>
                    <div className='main-blog-user-info'>
                        <h4 className='main-blog-head'>Aharon Levine</h4><span className='blog-user-pera'>Head of Payments @ Melio</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="form-section">
    <div className="container">
      <div className="row form-banner">
        <div className="col-7 form-img ">
          <div className="image-form-info theme-border-bg">
            <img src="images/form-img.jpg" alt="form-img"></img>
          </div>
          <div className="form-city">
            <div className="form-city-info">
              <p className="city">Sydney</p>
              <p className="small-pera">48 Pirrama Rd,<br />Pyrmont NSW 2009</p>
            </div>
            <div className="form-city-info">
              <p className="city">Melbourne</p>
              <p className="small-pera">161 Collins St,,<br /> Melbourne VIC 3000</p>
            </div>
            <div className="form-city-info">
              <p className="city">Sydney</p>
              <p className="small-pera">4340 Main St, Venice,<br />CA 90291, USA</p>
            </div>
          </div>
        </div>
        <div className="col-5 form-info">
          <h3>Get in touch</h3>
          <p className="large-pera">Have an inquiry or some feedback for us? Fill out the form below to contact our team.
          </p>
          <form action="/action_page.php">
            <div className="form-head">
              <div className="form-box">
                <label htmlFor="fname" className="large-pera">First name</label><br />
                <input type="text" className="form-control theme-gradient-btg form-border-bg" id="fname" name="fname" />
              </div>
              <div className="form-box">
                <label htmlFor="lname" className="large-pera">Last name</label><br />
                <input type="text" className="form-control theme-gradient-btg form-border-bg" id="lname" name="lname" />
              </div>
            </div>
            <label htmlFor="email" className="large-pera">Email address</label>
            <input type="email" className="form-control theme-gradient-btg form-border-bg" id="email" name="email" />
            <label htmlFor="message" className="large-pera">Message</label>
            <textarea className="form-control theme-gradient-btg form-border-bg" id="message">            </textarea>
            <div className="banner-btn">
              <input type="submit" value="Get in touch" className="theme-btn" /><img src="images/black-dot.svg"></img>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </section>
      </>
    )
}
export default Blog;