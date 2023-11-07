import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <body className="main-body">
    <div className="home-container">
        <p className="intro-text">This is some info about me, Leslie Pineda</p>
    </div>
    <div className="about-section" id="right">
        <p>Info about ID</p>
        <Link to="/infoID">
            <button className="button" id="right">Click Me</button>
        </Link>
    </div>
    <div className="about-section" id="left">
        <p>Info about MAG</p>
        <Link to="/infoMAG">
            <button className="button" id="left">Click Me</button>
        </Link>
    </div>
    <div className="about-section" id="right">
        <p>Info about Otter</p>
        <Link to="/infoOtter">
            <button className="button" id="right">Click Me</button>
        </Link>
    </div>
    <div className="about-section" id="left">
        <p>THE FUN STUFF</p>
        <Link to="/funStuff">
            <button className="button" id="left">Click Me</button>
        </Link>
    </div>
</body>
    )
}

export default Home;

