import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import ScrollButton from "../components/scrollButton.jsx";
import FooterMain from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import "./css/GroupProject.css";
import description from "../images/description.png";

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
                style={{ width: "60%", height: "70%" }}
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
                Now that we are familiar with what our assignment is, we can
                think of the scope of the project. We will have to help online
                youth workers with reaching out to youth in an online world more
                easily. Todays youth practically lives online, its a big part of
                their daily life, so establishing this connection through social
                media is a must. Our main objective is to come up with a solid
                concept that will actually benefit the social workers and figure
                out how Eindhoven can be a leader in this innovation. A big part
                of our efforts will be put into conducting extensive research.
                By doing so we will try to find answers to questions such as:
                How can we design the social worker of the future? How can they
                become more online and how can he reach out to more young
                people? Due to the large scope, we will go through several
                phases of work, including and completing different stepping
                stones, such as Personas and Empathy maps, Sketches and
                Prototypes, Software diagrams and Usability testing. Since we
                will be working over the project for the rest of the semester,
                we would not have a fully-fledged, finished and developed final
                product, and most probably would not have enough time to include
                research to back-end techniques. Nonetheless, our scope for the
                project remains straightforward: find the main struggles that
                youth workers face when reaching out to the youth, come up with
                a concept that will help them in this activity, visualise our
                ideas through high fidelity prototypes and finalise everything
                by developing it all together.
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
                When beginning our research phase, we came up with our main
                research and sub questions. Our main research question is: “How
                can social workers from Eindhoven relate and connect to the
                online world of youth while countering the cons of online
                media?”
              </p>
              <ol>
                <li>What does youth work do?</li>
                <li>
                  Who are the social workers and what are their main tasks in
                  their job?
                </li>
                <li>
                  What are the most used social platforms for youth
                  internationally and in the Netherlands?
                </li>
                <li>
                  What does other international youth work currently do to reach
                  out to the youth?
                </li>
                <li>What are the pros and cons of social media?</li>
                <li>
                  How can we present social workers to the youth in the most
                  reliable way?
                </li>
                <li>
                  How can we educate social workers on the use of online media?
                </li>
              </ol>
            </div>
            <div className="projGrid3">
              <p className="mainBodyTitle">
                Importance of Reliability in Youth Work
              </p>
              <p className="mainBodyText">
                Many of the people that seek help from social workers are in a
                very vulnerable state. They might be looking for help, a support
                system. Sometimes they are just looking for someone just to
                listen or to care about them. Therefore, reliability and
                trustworthiness is important when social workers reach out to
                the youth. They need to know that social workers understand
                everything they share with them and they understand the courage
                it took to reach out to them. (The Importance of Integrity in
                Social Work | CU Online, 2023)
              </p>
              <p className="mainBodyTitle">
                Importance of Reliability in Youth Work
              </p>
              <p className="mainBodyText">
                Many of the people that seek help from social workers are in a
                very vulnerable state. They might be looking for help, a support
                system. Sometimes they are just looking for someone just to
                listen or to care about them. Therefore, reliability and
                trustworthiness is important when social workers reach out to
                the youth. They need to know that social workers understand
                everything they share with them and they understand the courage
                it took to reach out to them. (The Importance of Integrity in
                Social Work | CU Online, 2023)
              </p>
              <p className="mainBodyTitle">Factors of Reliability</p>
              <p className="mainBodyText">
                In a study conducted by Edelman Trust in 2019, they found that
                there are three main factors that affect the trustworthiness of
                a brand/organization in the eyes of users/members. (2019 Edelman
                Trust Barometer Special Report Brand Trust, 2019)
              </p>
              <p className="mainBodyText">
                The first is the product/service experience. The product/service
                itself has to be reliable and constantly updated or improved.
                This would show the users that the organization is still placing
                importance in this service and that they can trust the
                information that that specific brand is showing/delivering to
                them. Also, is the brand delivering the product/service that
                they promised? If someone buys a product, and it does not do
                what the brand promised it would do, in turn the user will
                believe that they cannot trust the brand itself. The best
                predictor for past behavior is future behavior, therefore they
                will look at that negative experience with that particular
                brand/organization and not trust that they will deliver what
                they promise to their users.
              </p>
              <p className="mainBodyText">
                The second is the user's overall journey with the brand or a
                specific product. This includes the first discovery of the
                product/ service until the point of the user actually using the
                service. It is also important to remember less obvious/less
                hidden parts of your customers journey. An example of this would
                be management of data within the organization. There can be
                concerns with user data privacy/safety, for example, the way
                their data is being stored and used. Users need to know what is
                being done with any personal information/data that can be
                gathered by them using the service/product.
              </p>
              <p className="mainBodyText">
                The third factor that influences people's trust in an
                organization is about the brand's impact on society. So factors
                like:
              </p>
              <ol>
                <li>
                The goals of the organization
                </li>
                <li>
                For profit vs non profit organization
                </li>
              </ol>
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
