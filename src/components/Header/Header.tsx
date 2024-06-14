import React from 'react'
import 'bootstrap/js/dist/collapse';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="">
                    <div className=" header-banner">
                        <div className="home-menu theme-bg-light">
                            <div className="menu-logo">
                                <a className="" href="#"><img src="assest/images/header-logo.svg"></img></a>
                            </div>

                            <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
                                <div className="container-fluid">
                                    <a className="navbar-brand" href="#">Always expand</a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>


                                    <div className="collapse navbar-collapse" id="navbarsExample02">
                                        <ul className="navbar-nav me-auto">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </nav>




                        </div>
                        <div className="banner">
                            <h1>Experience Digital Excellence:<br />Your Gateway To Success</h1>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                                previewing layouts and visual mockups.</p>
                            <div className="banner-btn  text-center">
                                <a href="#" className="theme-btn">Talk to an expert <i className="fa-solid fa-circle"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;