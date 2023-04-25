import React, { Component } from "react";
import { Link } from "react-scroll";
import Footer from "../components/Footer.jsx";
import ScrollButton from "../components/scrollButton.jsx"
import Navbar from "../components/Navbar.jsx";
import "./css/GroupProject.css";

export default class InternationalProject extends Component {
  state = {
    color: 'black'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({color: 'white'})
    } else {
      this.setState({color: 'black'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="group">
          <div className="project-titles">Individual Assignment</div>
          <Link
            className="scroll-button"
            activeClass="active"
            spy
            to="assignmentDescription"
          >
            <ScrollButton></ScrollButton>
          </Link>
          <header className="nav" style={{color: this.state.color}}>
            <nav className="nav__container__actions">
              <ul>
                <li className="linkSideNav">
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    to="assignmentDescription"
                  >
                    Assigment Description
                  </Link>
                </li>
                <li className="linkSideNav">
                  <Link activeClass="active" smooth spy to="targetAndStake">
                    Target Group
                  </Link>
                </li>
                <li className="linkSideNav">
                  <Link activeClass="active" smooth spy to="define">
                    Define
                  </Link>
                </li>
                <li className="linkSideNav">
                  <Link activeClass="active" smooth spy to="ideate">
                    Ideate
                  </Link>
                </li>
                <li className="linkSideNav">
                  <Link activeClass="active" smooth spy to="prototype">
                    Prototype
                  </Link>
                </li>
                <li className="linkSideNav">
                  <Link activeClass="active" smooth spy to="test">
                    Test
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <section className="sectiongroup" id="assignmentDescription">
            Assignment Description
            <p className="text-main-project">
              The main goal of this assignment was to create a personal website
              portfolio to gather all the deliverables and products that I will
              be working on and creating during this Advanced Media semester. I
              would also like to use this portfolio for my graduation internship
              search. The website template and design that I create could be
              used for both the advanced media portfolio and my professional
              portfolio, but the structure and content will be modified to best
              fit the requirements of a professional portfolio. The total
              duration of the project was 4 weeks and the final product that the
              professors would receive is a link to a hosted site. It is an
              individual assignment, therefore all of the following work that
              you see was done by me.
            </p>
          </section>
          <section className="sectiongroup" id="targetAndStake">
            Target Group
            <p className="text-target-project">
              The first step of the process of creating the portfolio was
              outlining main and sub research questions. I wanted to use these
              research questions to clearly outline my personal goals with this
              portfolio. My main research question was:
              <br />
              <p>
                How might I create a portfolio website that effectively presents
                my work and is user friendly?
              </p>
              The following sub questions were used as more specific goals that
              would support the main goal outlines in the main research
              question:
              <ol className="questions-list">
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
              There are two main target groups for this portfolio:
              <ul className="target-list">
                <li>
                  The Advanced Media Semester Teachers and my project mentors,
                  Paul Reekers and Rose Wetering. They will be using the
                  portfolio to have an overview of my assignments and the work
                  I've done both for the group and individual assignment.
                </li>
                <li>
                  All possible internship recruiters. It would be extremely
                  useful to utilize this portfolio that I create as a
                  professional portfolio in the future. I will be searching for
                  a graduation internship soon, therefore I would like to have a
                  portfolio that I can send to companies that not only shows all
                  the work I've done but also the kind of professional I would
                  like to be.
                </li>
              </ul>
              <div className="stakeholder-chart">
                <div className="stakeholder-chart-item"></div>
                <div className="stakeholder-chart-item"></div>

                <div className="stakeholder-chart-item"></div>
                <div className="stakeholder-chart-item"></div>
                <div className="stakeholder-chart-item"></div>
                <div className="stakeholder-chart-item"></div>
              </div>
            </p>
          </section>
          <section className="sectiongroup" id="define">
            define
          </section>
          <section className="sectiongroup" id="ideate">
            ideate
          </section>
          <section className="sectiongroup" id="prototype">
            protoype
          </section>
          <section className="sectiongroup" id="test">
            test
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
