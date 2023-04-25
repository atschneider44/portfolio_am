import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Footer from "../components/Footer.jsx";
import ScrollButton from "../components/scrollButton.jsx";
import Navbar from "../components/Navbar.jsx";
import logo from "../images/annaani.png";
import annapic from "../images/annapics.jpg";
import divider from "../images/sectiondivider.gif";
import "./css/Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <div className="homePageCircles">
        <Navbar />
        <div className="home-page">
          <HashLink className="scroll-button" to="#home-about">
            <ScrollButton></ScrollButton>
          </HashLink>
          <img src={logo} className="main-pic" alt="" />
        </div>
        <div className="main-section-divider">
          <img src={divider} className="section-divider" alt="" />
        </div>
        <section className="home-about-section" id="home-about">
          <div className="home-about-grid">
            <div className="home-about-grid-item1">
              {" "}
              <img src={annapic} className="anna-pic" alt="" />
            </div>
            <div className="home-about-grid-item2">
              <div className="button-wrapper">
                <Link className="home-button-link" to="/individualproject">
                  <button className="button-home">Individual Project</button>
                </Link>
              </div>
            </div>
            <div className="home-about-grid-item3">
              <div className="button-wrapper">
                <Link className="home-button-link" to="/individualproject">
                  <button className="button-home">Group Project</button>
                </Link>
              </div>
            </div>
            <div className="home-about-grid-item4">
              <p>
                Welcome to my portfolio! In this portfolio you can find all the
                work I have done and will do in the Advanced Media Semester. The
                two main projects I will be working on is the Individual
                Project, which is this porotfolio and the Group Project, which
                we will be working with the Munincipality of Eindhoven. Do you
                want to know a little more about mym projects?
              </p>
            </div>
          </div>
        </section>
        <div className="main-section-divider-bottom">
          <img src={divider} className="section-divider" alt="" />
        </div>
        <div className="space-bottom"></div>
        <Footer />
      </div>
    );
  }
}
