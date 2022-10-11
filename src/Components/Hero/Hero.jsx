import React from "react";
import "./Hero.css";
import grouppic from "../../Images/grouppic.svg";

const Hero = () => {
  return (
    <section className="hero">
      <img src={grouppic} alt="Collage of pics" className="hero--pic" />
      <h2 className="onlineExp">Online Experiences</h2>
      <p className="heroText">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
