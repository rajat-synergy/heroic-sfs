"use client";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Header = () => {

  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { theme, setTheme } = useTheme();

  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 flex w-full items-center absolute bg-transparent`}
      >


        <div className="home-menu theme-bg-light">
          <div className="menu-logo">
            <a className="" href="#"/>
              <Image
                src="/images/header-logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
          </div>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Achievements</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
          <div className="menu-btn">
            <a href="#" className="theme-btn-primary">Book a Meeting</a>
          </div>
        </div>



      </header>
    </>
  );
};

export default Header;
