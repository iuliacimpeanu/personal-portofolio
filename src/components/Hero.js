import './Hero.css'
import React, { useEffect, useState } from 'react'

const Hero = () => {

    const scrollToContact = () => {
        const element = document.getElementById('contact')
        if(element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    };
    return (
        <div id='hero'>
            <div className='hero-welcome'>Welcome to my Portofolio</div>
            <div className='hero-hi-section'>Hi! I'm Iulia!</div>
            <div className='hero-description'>I am passionate about creating engaging digital experiences
                                        that seamlessly blend creativity with functionality. 
                                        I understand the importance of responsive design, 
                                        so the websites I create are not only aesthetically 
                                        pleasing, but also functional across various devices.
            </div>
            <div className='hero-connect-box'>
                <div className='hero-connect-text' onClick={scrollToContact}>Let's Connect </div>
                <div><button className='hero-arrow' onClick={scrollToContact}><ion-icon name="arrow-forward-circle-outline"></ion-icon></button></div>
            </div>
        </div>
    )
}

export default Hero