import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiExternalLinkLine } from "react-icons/ri";


import { NavlinksProps, Sosials } from "@/types/types";

export const navLinks: NavlinksProps[] = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Services',
        path: '/services',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
    {
        title: 'About Us',
        path: '/about-us',
    },
    {
        title: 'Achievements',
        path: '/achievements',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
    {
        title: 'Contact Us',
        path: '/contact-us',
    },
];

export const sosials: Sosials[] = [
    {
        icon: React.createElement(CiInstagram),
        path: "https://www.instagram.com/azarahmadov_/"
    },
    {
        icon: React.createElement(FaGithub),
        path: "https://github.com/AzarAhmadov"
    },
    {
        icon: React.createElement(CiLinkedin),
        path: "https://www.linkedin.com/in/azar-ahmadov/"
    },
    {
        icon: React.createElement(RiExternalLinkLine),
        path: "https://www.azarahmadov.com/"
    }
];