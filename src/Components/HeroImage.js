import "./HeroImageStyle.css";

import React from 'react';
import IntroImg from "../assets/intro.jpg";
import MyImg from "../assets/MyImg.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>

        <div className="content">
            <img className="My-img" src={MyImg} alt="MyImg"/>
            <h1>HI I'M M.T.THARUSHIKA</h1>
            <p>Computer Science and Engineering, University of Moratuwa</p>
            <div>
                <Link to="/project" className="btn btn-light">Projects</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage