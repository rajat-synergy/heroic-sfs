import React from 'react'

const Services: React.FC = () => {
    return (
        <>
        <section className="services theme-bg-primary ">
            <div className="container-xxl">
                <div className="services-banner">
                    <div className=" services-head">
                        <div className="services-info">
                            <h2>Innovative Services For Your Unique Needs</h2>
                            <p>Lorem ipsum is placeholder text
                                commonly used in the graphic print.</p>
                        </div>
                    </div>
                    <div className=" services-box">
                        <div className="services-top-banner">
                            <div className="row card-box">
                                <div className='col-3'>
                                    <div className='inner-banner'>
                                        <div className='services-info-icon theme-border theme-gradient-gtb'>
                                        <img src='images/staffing.svg'></img>
                                        </div>
                                        <div className='services-info-head'>
                                            <h4 className="">Staffing Solutions</h4>
                                            <p className="pera-small">Highlight your meticulous recruitment process
                                                and commitment to finding the best talent.
                                                Showcase success stories of placements in
                                                leading companies.</p>
                                            <div className="services-link">
                                                <a href="#" className="theme-text-primary">Read More <img src='images/arrow-right.svg'></img></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='inner-banner'>
                                        <div className='services-info-icon theme-border theme-gradient-gtb'>
                                        <img src='images/consultancy.svg'></img>
                                        </div>
                                        <div className='services-info-head'>
                                            <h4 className="">Consultancy Services</h4>
                                            <p className="pera-small">Emphasize your team's expertise and track record in guiding businesses towards digital success.
                                            Offer case studies demonstrating tangible results achieved through your consultancy.</p>
                                            <div className="services-link">
                                                <a href="#" className="theme-text-primary">Read More <img src='images/arrow-right.svg'></img></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='inner-banner'>
                                        <div className='services-info-icon theme-border theme-gradient-gtb'>
                                        <img src='images/digitization.svg'></img>
                                        </div>
                                        <div className='services-info-head'>
                                            <h4 className="">Digitization Solutions</h4>
                                            <p className="pera-small">Showcase how your digitization services help businesses streamline operations and enhance efficiency.
                                            Highlight key technologies and methodologies you employ.</p>
                                            <div className="services-link">
                                                <a href="#" className="theme-text-primary">Read More <img src='images/arrow-right.svg'></img></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='inner-banner'>
                                        <div className='services-info-icon theme-border theme-gradient-gtb'>
                                        <img src='images/branding.svg'></img>
                                        </div>
                                        <div className='services-info-head'>
                                            <h4 className="">Branding Services</h4>
                                            <p className="pera-small">Communicate your approach to building strong, consistent brands that resonate with audiences.
                                            Showcase before-and-after examples of brand transformations.</p>
                                            <div className="services-link">
                                                <a href="#" className="theme-text-primary">Read More <img src='images/arrow-right.svg'></img></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Services;
