import React, { Component } from "react";
import { TypeAnimation } from "react-type-animation";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import annapic from "../images/annapics.jpg";
import SkillBar from "react-skillbars";
import { RadarChart } from "skills-radar-chart";
import SkillsArray from "./data/SkillArray.json";

import "./css/About.css";
import OppositeContentTimeline from "../components/Card.jsx";

export default class About extends Component {
  render() {

    const language = [
      { type: "English", level: 100 },
      { type: "Portuguese", level: 100 },
      { type: "Spanish", level: 80 },
      { type: "German", level: 60 },
      { type: "French", level: 40 },
      { type: "Ducth", level: 10 },
    ];

    const colors = {
      bar: "#8E2A9A",
      title: {
        text: "#fff",
        background: "purple",
      },
    };

    return (
      <div>
        <Navbar />
        <div class="grid-container-about">
          <div class="grid-item-about">
            <img src={annapic} className="anna-pic" alt="" />
          </div>
          <div class="grid-item-about aboutText">
            <TypeAnimation
              sequence={[
                "Hi, I'm Anna. ", // Types 'One'
                2000, // Waits 3s
                () => {},
              ]}
              wrapper="div"
              cursor={false}
              speed={20}
              repeat={0}
              style={{
                fontSize: "4vw",
                fontWeight: "bold",
                color: "white",
                textJustify: "left",
              }}
            />
            <TypeAnimation
              sequence={[
                3000,
                "Do you want to know a little more about me?",
                3000,
                "Cool :)",
                3000,
                "I’m currently a 4th year ICT & Media Design student at Fontys University of Applied Sciences. I am Brazilian/German and had the opportunoty to grow up in many places like Morocco, Chile, and Belarus. Feel free to reach out to me with any inqueries and keep scrolling to see the experience and skills I have.", // Waits 2s

                () => {},
              ]}
              wrapper="div"
              cursor={true}
              speed={20}
              repeat={0}
              deletionSpeed={50}
              style={{
                fontSize: "1.5vw",
                color: "white",
                textJustify: "left",
              }}
            />
          </div>
          <div class="grid-item-about about-skills">
            <div className="skills-title">My Skills</div>
            <RadarChart
              rawData={SkillsArray}
              skillPercentage="skillPercentage"
              skillName="skillName"
              label="Skills"
              backgroundColor="rgba(255, 99, 132, 0.2)"
              borderColor={["blue", "purple", "green", "yellow"]}
              borderWidth="3"
              pointBackgroundColor={["blue", "purple", "green", "yellow"]}
              pointBorderColor={["blue", "purple", "green", "yellow"]}
              pointHoverBackgroundColor={["blue", "purple", "green", "yellow"]}
              pointHoverBorderColor={["blue", "purple", "green", "yellow"]}
              borderDash={[2, 5]}
              borderDashOffset="8"
              angleLines={["blue", "purple", "green", "yellow"]}
              grid={["blue", "purple", "green", "yellow"]}
              pointLabels={["blue", "purple", "green", "yellow"]}
              ticks={["blue", "purple", "green", "yellow"]}
              ShowLegend={false}
            />
          </div>
          <div class="grid-item-about about-resume">
            <div className="skills-title">Work Experience</div>
            <OppositeContentTimeline></OppositeContentTimeline>
          </div>
          <div class="grid-item-about">
            <div className="skills-title">Languages</div>
            <div className="skill-bar-container">
              <SkillBar skills={language} colors={colors} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
