import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import FooterMain from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import "./css/GroupProject.css";
import description from "../images/description.png";

export default class IndividualProject extends Component {
  state = {
    color: "black",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 400) {
      this.setState({ color: "white" });
    } else {
      this.setState({ color: "black" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="">
          <header className="nav_sub">
            <div className="nav__container__actions">
              <ul>
                <li>
                  <Link
                    activeClass="activesub"
                    className="test1"
                    to="element1"
                    spy={true}
                    smooth={true}
                  >
                    Project Description
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="activesub"
                    className="test1"
                    to="element2"
                    spy={true}
                    smooth={true}
                  >
                    Research Questions
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="activesub"
                    className="test1"
                    to="element3"
                    spy={true}
                    smooth={true}
                  >
                    Design Phase
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="activesub"
                    className="test1"
                    to="element4"
                    spy={true}
                    smooth={true}
                  >
                    Developement Phase
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="activesub"
                    className="test1"
                    to="element5"
                    spy={true}
                    smooth={true}
                  >
                    Testing Phase
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="activesub"
                    className="test1"
                    to="element6"
                    spy={true}
                    smooth={true}
                  >
                    Reading Guide
                  </Link>
                </li>
              </ul>
            </div>
          </header>
        </div>

        <Element name="element" className="sectiongroup project-title1">
          Creating a Personal Webiste Portfolio
        </Element>
        <Element name="element1" className="sectiongroup">
          <div className="project-title">Project Description</div>
          <div className="projectsGrid">
            <div className="projGrid1">
              <img
                src={description}
                className="anna-pic"
                alt=""
                style={{ width: "60%", height: "70%" }}
              />
            </div>
            <div className="projGrid2">
              <p className="mainBodyTitle">Assignment Description</p>
              <p className="mainBodyText">
                The main goal of this assignment was to create a personal
                website portfolio to gather all the deliverables and products
                that I will be working on and creating during this Advanced
                Media semester. I would also like to use this portfolio for my
                graduation internship search. The website template and design
                that I create could be used for both the advanced media
                portfolio and my professional portfolio, but the structure and
                content will be modified to best fit the requirements of a
                professional portfolio. The total duration of the project was 4
                weeks and the final product that the professors would receive is
                a link to a hosted site. It is an individual assignment,
                therefore all of the following work that you see was done by me.
              </p>
            </div>

            <div className="projGrid3">
              <p className="mainBodyTitle">Target Group</p>
              <p className="mainBodyText">
                <ol>
                  <li>
                    The Advanced Media Semester Teachers and my project mentors,
                    Paul Reekers and Rose Wetering. They will be using the
                    portfolio to have an overview of my assignments and the work
                    I've done both for the group and individual assignment.
                  </li>
                  <li>
                    All possible internship recruiters. It would be extremely
                    useful to utilize this portfolio that I create as a
                    professional portfolio in the future. I will be searching
                    for a graduation internship soon, therefore I would like to
                    have a portfolio that I can send to companies that not only
                    shows all the work I've done but also the kind of
                    professional I would like to be.
                  </li>
                </ol>
              </p>
            </div>
            <div className="projGrid4"></div>
            <div className="projGrid5"></div>
          </div>
        </Element>
        <Element name="element2" className="sectiongroup">
          <div className="project-title">Research Phase</div>
          <div className="projectsGrid">
            <div className="projGrid1">
              <img
                src={description}
                className="anna-pic"
                alt=""
                style={{ width: "60%", height: "70%" }}
              />
            </div>
            <div className="projGrid2">
              <p className="mainBodyTitle">Research Questions</p>
              <p className="mainBodyText">
                The first step of the process of creating the portfolio was
                outlining main and sub research questions. I wanted to use these
                research questions to clearly outline my personal goals with
                this portfolio. My main research question was:
              </p>
              <ol>
                <li>What is the best way to navigate a portfolio?</li>
                <li>
                  What is the most comprehensible way to divide the content in
                  my portfolio?
                </li>
                <li>How can I ensure that my portfolio is responsive?</li>
                <li>
                  What are employers currently looking for in a professional
                  portfolio?
                </li>
                <li>
                  How can I ensure that my portfolio encompasses who I am as a
                  professional?
                </li>
              </ol>
            </div>
          </div>
        </Element>
        <Element name="element3" className="sectiongroup">
        
        </Element>
        <Element name="element4" className="sectiongroup">
          
        </Element>
        <Element name="element5" className="sectiongroup">
          
        </Element>
        <Element name="element6" className="sectiongroup">
          <div className="project-title">Reading Guide</div>
          <div className="projectsGrid">
            <div className="projGridb1">
              <p className="mainBodyText">
                My Reading Guide for this project can be found by clicking the
                button below!
              </p>
            </div>
            <div className="projGridb1">
              <div className="contact-form-grid-item-submit">
                <a href="https://docs.google.com/document/d/1FFAddMge0wCGzyQLlM5sUdWTAKe-TVFti6yqzP4od3s/edit?usp=sharing">
                  <button
                    className="button-submit"
                    type="submit"
                    value="Reading Guide"
                  >
                    Reading Guide
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Element>
        <FooterMain />
      </div>
    );
  }
}
