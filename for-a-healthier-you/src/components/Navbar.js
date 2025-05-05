import React from "react";
import Image from "next/image";
import './styles.css';

export default function Navbar() {
    return (
        <nav id='navbar-container'>
            <img id='navbar-logo' src='/fahy-logo-05.png' alt='Logo'/>
        
            <ul id='navbar-list'>
                <li><a href='/'>Home</a></li>
                <li><a href='/products'>Products</a></li>
                <li><a href='/services'>Services</a></li>
                <li><a href='/about'>About Us</a></li>
            </ul>
        </nav>
    );
}