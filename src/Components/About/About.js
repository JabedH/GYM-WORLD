import React from "react";
import "./About.css";
import mypic from "../../img/mypic.png";

const About = () => {
  return (
    <div className="about ">
      <div className="about-img">
        <img src={mypic} alt="" />
      </div>
      <p>
        Hi! My name is <span>Md Jabed Hossain Tusar</span>. I am trying to be a
        Front-End Web Developer. It's been 8 months, I'm learning web
        development. have developed many websites and apart from that, I have
        been part of a web design project. I have a target, I want to be a
        Junior Front-end developer next six months. After that, I want to join
        the best It company. Now I Know <span> HTML5</span>,<span>CSS3 </span>{" "}
        <span>Bootstrap</span> , <span>Javascript</span> ,<span>React JS</span>{" "}
        and <span>Tailwind css</span>
      </p>
    </div>
  );
};
export default About;
