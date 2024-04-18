import React, { useState } from 'react'
import './Navbar.css'


const Navbar = () => {
    const scrollToSection = (id, offset=60) => {
        const element = document.getElementById(id);
        if (element) {
            const offsetPosition = element.offsetTop - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <div>
            <div id="nav" className={isMobileMenuOpen ? 'hide-on-mobile' : '' }>
                <div className="nav-logo">LOGO</div>
                <ul className="nav-menu">
                    <li><button className='nav-menu-home' onClick={() => scrollToSection('hero')}>Home</button></li>
                    <li><button className='nav-menu-skills' onClick={() => scrollToSection('skills')}>Skills</button></li>
                    <li><button className='nav-menu-projects' onClick={() => scrollToSection('projects')}>Projects</button></li>
                </ul>
                <div className='nav-socials'>
                    <a className='nav-linkedIn' href='https://www.linkedin.com/in/iulia-cimpeanu/' target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a className='nav-github' href='https://github.com/iuliacimpeanu' target='_blank'><ion-icon name="logo-github"></ion-icon></a>
                </div>
                <button className='nav-button-connect' onClick={() => scrollToSection('contact')}>Let's Connect</button>
            </div>

            
            <div className='mobile-nav'>
                <button className='mobile-nav-toggle' onClick={toggleMobileMenu}><ion-icon name="menu-outline"></ion-icon></button>
                {isMobileMenuOpen && (
                    <div className="mobile-nav-menu">
                        <ul>
                            <li><button onClick={() => { toggleMobileMenu(); scrollToSection('hero'); }}>Home</button></li>
                            <li><button onClick={() => { toggleMobileMenu(); scrollToSection('skills'); }}>Skills</button></li>
                            <li><button onClick={() => { toggleMobileMenu(); scrollToSection('projects'); }}>Projects</button></li>
                        </ul>
                        <button className="lets-connect" onClick={ () => { toggleMobileMenu(); scrollToSection('contact');}}>Let's Connect!</button>
                    </div>
                )}
            </div>

        </div>
    )
}


export default Navbar