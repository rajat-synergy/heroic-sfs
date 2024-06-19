"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
const Header: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setCollapsed(false);
            } else {
                setCollapsed(true);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        if (collapsed) {
            document.body.classList.add('collapsed');
        } else {
            document.body.classList.remove('collapsed');
        }
    }, [collapsed]);



    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };
    return (
        <>
            <header >
                <div className="container-xxl">
                    <div className="">
                        <div className=" header-banner">
                            <div className="home-menu theme-bg-light">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="#"><img src='images/header-logo.svg'></img></a>
                                    <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                            {!collapsed && (
                                                <>
                                                    <li className="nav-item active">
                                                        <Link href="/">
                                                            Home
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/services">
                                                            Services
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/about">
                                                            About Us
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/achievements">
                                                            Achievements
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/blog">
                                                            Blog
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/contact">
                                                            Contact Us
                                                        </Link>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                    <div className="menu-btn">
                                        <a href="#" className="theme-btn-primary">Book a Meeting</a>
                                    </div>
                                    <button className="navbar-toggler" type="button" onClick={toggleCollapse} aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </nav>
                            </div>
                            <div className="banner">
                                <h1>Experience Digital Excellence:<br />Your Gateway To Success</h1>
                                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                                    previewing layouts and visual mockups.</p>
                                <div className="banner-btn  text-center">
                                    <a href="#" className="theme-btn">Talk to an expert</a>
                                    <img src='images/black-dot.svg'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;