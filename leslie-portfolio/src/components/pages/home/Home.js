import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import FadeInSection from "../fade-in-section/FadeInSection";


const Home = () => {
    return (
        <main className="main-body">
    <div className="home-container">
        <p className="intro-text">This is some info about me, Leslie Pineda</p>
    </div>
    <FadeInSection>
    <div className="about-section" id="right">
        <h1 className="title">Intelligent Demand | Art Director</h1>
        <p className="info-paragraph">Info about ID</p>
        <Link to="/intelligentdemand">
            <button className="button" id="right">Click Me</button>
        </Link>
    </div>
    </FadeInSection>
    <FadeInSection>
    <div className="about-section" id="left">
    <h1 className="title">Magnetic Creative | Sr. Graphic Designer</h1>
        <p className="info-paragraph">Info about MAG</p>
        <Link to="/magneticcreative">
            <button className="button" id="left">Click Me</button>
        </Link>
    </div>
    </FadeInSection>
    <FadeInSection>
    <div className="about-section" id="right">
    <h1 className="title">Otter Products | Digital Designer & Pkg</h1>
        <p className="info-paragraph">Info about Otter</p>
        <Link to="/otterbox">
            <button className="button" id="right">Click Me</button>
        </Link>
    </div>
    </FadeInSection>
    <FadeInSection>
    <div className="about-section" id="left">
    <h1 className="title">THE EXTRA'S | FUN STUFF</h1>
        <p className="info-paragraph">THE FUN STUFF</p>
        <Link to="/funStuff">
            <button className="button" id="left">Click Me</button>
        </Link>
    </div>
    </FadeInSection>
</main>
    )
}

export default Home;

