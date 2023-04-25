import React, { Component } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Footer.css";

import { GitlabLogo, LinkedinLogo, InstagramLogo, MapPin, Envelope } from "phosphor-react";


export default class Footer extends Component {
  render() {
    return (
      <MDBFooter
        bgColor="light"
        className="text-lg-start "
      >
       
        <section className="main-footer-section">
          <MDBContainer className="text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Anna-Theresas Portfolio
                </h6>
                <p>
                 just a ict and media designer who is excited to explore fun new oportunies in the digital world 
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Pages</h6>
                <p>
                  <a href="/" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/myprojects" className="text-reset">
                    My Projects
                  </a>
                </p>
                <p>
                  <a href="/about" className="text-reset">
                    About Me
                  </a>
                </p>
                <p>
                  <a href="/contact" className="text-reset">
                    Contact Me
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                <MapPin size={16} color="#fcfcfc" weight="bold" />
                  Rotterdam, Netherlands
                </p>
                <p>
                <Envelope size={16} color="#fcfcfc" weight="fill" />
                  at.schneider44@gmail.com
                </p>
                <p>
                <Envelope size={16} color="#fcfcfc" weight="fill" />
                  433651@student.fontys.nl
                </p>

              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section className="connect-section d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
          <div className=" social-text me-5 d-none d-lg-block ">
            <span>Get connected with me on social networks </span>
          </div>
          <div>
            <a href="/" className="me-4 text-reset social-icons">
            <GitlabLogo size={32} color="#ffffff" weight="fill" />
            </a>
            <a href="/" className="me-4 text-reset social-icons">
            <LinkedinLogo size={32} color="#fcfcfc" weight="bold" />
            </a>
            <a href="/" className="me-4 text-reset social-icons">
            <InstagramLogo size={32} color="#fcfcfc" weight="bold" />
            </a>
          </div>
        </section>
      </MDBFooter>
    );
  }
}
