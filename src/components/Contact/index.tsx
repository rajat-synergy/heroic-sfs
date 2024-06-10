import Image from "next/image";


const Contact = () => {
  return (




    <section className="form-section">
      <div className="container">
        <div className="form-banner">
          <div className="form-img ">
            <div className="image-form-info theme-border-bg">
              {/* <Image src="/image/contactus.png" width={200} height={200} alt="form-img" /> */}
              <Image
                  src="/images/contactus.png"
                  alt="logo"
                  width={600}
                  height={600}
                />
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
          <div className="form-info">
            <h3>Get in touch</h3>
            <p className="large-pera">Have an inquiry or some feedback for us? Fill out the form below to contact our team.</p>
            <form action="/action_page.php">
              <div className="form-head">
                <div className="form-box">
                  <label htmlFor="fname" className="large-pera">First name</label><br />
                  <input type="text" className="form-control theme-gradient-btg theme-border-bg" id="fname" name="fname" />
                </div>
                <div className="form-box">
                  <label htmlFor="lname" className="large-pera">Last name</label><br />
                  <input type="text" className="form-control theme-gradient-btg theme-border-bg" id="lname" name="lname" />
                </div>
              </div>
              <label htmlFor="email" className="large-pera">Email address</label>
              <input type="email" className="form-control theme-gradient-btg theme-border-bg" id="email" name="email" />
              <label htmlFor="message" className="large-pera">Message</label>
              <textarea className="form-control theme-gradient-btg theme-border-bg" id="message">
              </textarea>
              <div className="form-submit">
                <input type="submit" value="Get in touch" className="theme-btn" /> <i className="fa-solid fa-circle"></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section >

  );
};

export default Contact;
