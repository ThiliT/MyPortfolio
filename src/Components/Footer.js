import "./FooterStyles.css";

import React from 'react';

import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const footer = () => {
  return (
    <div className = "footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size ={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                    <p>688/c/6, Heiyanthuduwa,</p>
                    <p>Kelaniya,Sri Lanka.</p>
                    </div>
                </div>

                < div className="phone">
                <FaPhone size ={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div><p>94-71-556-2360</p></div>
                </div>

                < div className="email">
                <FaMailBulk size ={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div><p>thilinitharushika21.cse.mrt.ac.lk</p></div>
                </div>

            </div>

            <div className="right">
              <h4>About Me</h4>
              <p>I am a dedicated and proactive Computer Science and Engineering undergraduate with a strong work ethic and a passion for continuous learning.  I am eager to apply my academic knowledge and experience in more practical industry environments and enhance my skills and knowledge, taking my first step towards becoming a professional engineer.</p>
              <div className="social">

              <a href="https://www.linkedin.com/in/thilini-tharushika/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/ThiliT" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>


              </div>
            </div>
        </div>
    </div>
  )
}

export default footer