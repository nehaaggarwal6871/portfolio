import React from 'react';
import linkedin from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.png'
import tie from '../assets/icons/tie.svg'
import coder from '../assets/coder.svg'
import resume from '../assets/resume.pdf'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:neha68977@gmail.com")
    }
    return (
        <div className="sidebar">
            <img src={coder} alt="avatar" className="sidebar-avatar" />
            <div className="sidebar-name"> Neha <span> Aggarwal</span></div>
            <div className="sidebar-item sidebar-title">Full Stack Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar-item sidebar-resume">
                    <img src={tie} alt="resume" className="sidebar-icon" />
                    Download Resume
                </div>
            </a>
            <figure className="sidebar-social-icons my-2">
                <a href="https://www.linkedin.com/in/neha-aggarwal-1192a117b/"><img src={linkedin} alt="linkedin" className="sidebar-icon mr-3" /></a>
                <a href="https://www.instagram.com/neha68977/"><img src={instagram} alt="instagram" className="sidebar-icon" /></a>
            </figure>
            <div className="sidebar-contact">
                <div className="sidebar-item sidebar-github">
                    <a href="https://github.com/nehaaggarwal6871"><img src={github} alt="github" className="sidebar-icon mr-3" /> Github</a>
                </div>
                <div className="sidebar-location">
                    <img src={pin} alt="location" className="sidebar-icon mr-3" />Delhi, India</div>
                <div className="sidebar-item">neha68977@gmail.com</div>
            </div>
            <div className="sidebar-item sidebar-email" onClick={handleEmailMe}>Email me</div>
        </div>
    );
}
export default Sidebar;