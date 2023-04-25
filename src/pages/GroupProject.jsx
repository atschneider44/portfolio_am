import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import ScrollButton from "../components/scrollButton.jsx";
import FooterMain from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import "./css/GroupProject.css";
import description from "../images/description.png";
import Layout, {
  LayoutFooter,
  LayoutContent,
  LayoutSider,
} from "@uiw/react-layout";
const { Footer, Sider, Content } = Layout;

export default class GroupProject extends Component {
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
                    Research Phase
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
              </ul>
            </div>
          </header>
        </div>

        <Element name="element" className="sectiongroup project-title">
          Group Project <br /> Connecting Youth Workers to the Online World{" "}
          <br /> Garage2020 and the Municipality of Eindhoven
        </Element>
        <Element name="element1" className="sectiongroup">
          <div className="project-title">Project Description</div>
          <div className="projectsGrid">
            <div className="projGrid1">
              <img
                src={description}
                className="anna-pic"
                alt=""
                style={{ width: "60%", height: "70%"}}
              />
            </div>
            <div className="projGrid2">
              <p className="mainBodyTitle">Assignment Description</p>
              <p className="mainBodyText">
                    The majority of youth are spending significant amounts of time
                online, with many spending over three hours a day and a
                significant portion of them having online contact for the entire
                day. This means that online communication is important for
                reaching the youth. While digital youth work, such as gaming
                events and programming together, is already a popular activity,
                online youth work is still largely non-existent. The challenge
                is to find a way to connect youth workers with youth online,
                without crossing professional and personal boundaries from the
                social workers side. This will require research, solution
                ideation, design, and development.
              </p>
            </div>

            <div className="projGrid3">
            <p className="mainBodyTitle">Assignment Scope</p>
            <p className="mainBodyText">
              Now that we are familiar with what our assignment is, we can think
              of the scope of the project. We will have to help online youth
              workers with reaching out to youth in an online world more easily.
              Todays youth practically lives online, its a big part of their
              daily life, so establishing this connection through social media
              is a must. Our main objective is to come up with a solid concept
              that will actually benefit the social workers and figure out how
              Eindhoven can be a leader in this innovation. A big part of our
              efforts will be put into conducting extensive research. By doing
              so we will try to find answers to questions such as: How can we
              design the social worker of the future? How can they become more
              online and how can he reach out to more young people? Due to the
              large scope, we will go through several phases of work, including
              and completing different stepping stones, such as Personas and
              Empathy maps, Sketches and Prototypes, Software diagrams and
              Usability testing. Since we will be working over the project for
              the rest of the semester, we would not have a fully-fledged,
              finished and developed final product, and most probably would not
              have enough time to include research to back-end techniques.
              Nonetheless, our scope for the project remains straightforward:
              find the main struggles that youth workers face when reaching out
              to the youth, come up with a concept that will help them in this
              activity, visualise our ideas through high fidelity prototypes and
              finalise everything by developing it all together.
              </p>
            
            </div>
            <div className="projGrid4"></div>
            <div className="projGrid5"></div>
          </div>
          <Layout style={{ marginBottom: 20 }}>
            <Layout>
              {/* <Sider ><img src={brands} className="anna-pic" alt="" style={{"width": "20vw"}}/></Sider> */}
            </Layout>
          </Layout>
        </Element>
        <Element name="element2" className="sectiongroup">
        <div className="project-title">Research Phase</div>
        <div className="projectsGrid">
            <div className="projGrid1">
              <img
                src={description}
                className="anna-pic"
                alt=""
                style={{ width: "60%", height: "70%"}}
              />
            </div>
            <div className="projGrid2">
              <p className="mainBodyTitle">Assignment Description</p>
              <p className="mainBodyText">
                    The majority of youth are spending significant amounts of time
                online, with many spending over three hours a day and a
                significant portion of them having online contact for the entire
                day. This means that online communication is important for
                reaching the youth. While digital youth work, such as gaming
                events and programming together, is already a popular activity,
                online youth work is still largely non-existent. The challenge
                is to find a way to connect youth workers with youth online,
                without crossing professional and personal boundaries from the
                social workers side. This will require research, solution
                ideation, design, and development.
              </p>
            </div>

            <div className="projGrid3">
            <p className="mainBodyTitle">Assignment Scope</p>
            <p className="mainBodyText">
              Now that we are familiar with what our assignment is, we can think
              of the scope of the project. We will have to help online youth
              workers with reaching out to youth in an online world more easily.
              Todays youth practically lives online, its a big part of their
              daily life, so establishing this connection through social media
              is a must. Our main objective is to come up with a solid concept
              that will actually benefit the social workers and figure out how
              Eindhoven can be a leader in this innovation. A big part of our
              efforts will be put into conducting extensive research. By doing
              so we will try to find answers to questions such as: How can we
              design the social worker of the future? How can they become more
              online and how can he reach out to more young people? Due to the
              large scope, we will go through several phases of work, including
              and completing different stepping stones, such as Personas and
              Empathy maps, Sketches and Prototypes, Software diagrams and
              Usability testing. Since we will be working over the project for
              the rest of the semester, we would not have a fully-fledged,
              finished and developed final product, and most probably would not
              have enough time to include research to back-end techniques.
              Nonetheless, our scope for the project remains straightforward:
              find the main struggles that youth workers face when reaching out
              to the youth, come up with a concept that will help them in this
              activity, visualise our ideas through high fidelity prototypes and
              finalise everything by developing it all together.
              </p>
            
            </div>
            <div className="projGrid4"></div>
            <div className="projGrid5"></div>
          </div>
        </Element>
        <Element name="element3" className="sectiongroup">
          Design Phase - not yet completed
        </Element>
        <Element name="element4" className="sectiongroup">
          Developemnt Phase - not yet completed
        </Element>
        <Element name="element5" className="sectiongroup">
          Testing Phase - not yet completed
        </Element>
        <FooterMain />
      </div>
    );
  }
}
