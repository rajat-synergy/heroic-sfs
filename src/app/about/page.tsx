import React from 'react'

const About: React.FC = () => {
    return (
        <>
        <section className="about-section theme-bg-secondary ">
        <div className="container">
          <div className="row align-items-center about-banner">
            <div className="col-7 about-head">
              <h2>About Our Company</h2>
              <p>Mission Statement: Emphasize your commitment to
                excellence and leadership.</p>
              <p>Company Values: Highlight values such as
                commitment, clarity, consistency, and leadership.</p>
              <p>Team: Introduce key team members, emphasizing
                their expertise and leadership qualities.</p>
            </div>
            <div className="col-5 about-img text-end">
              <img src="images/about-img.png"></img>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}

export default About;

