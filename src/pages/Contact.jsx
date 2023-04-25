import React, { Component } from "react";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/Navbar.jsx";
import { ContactForm } from "../components/ContactForm.jsx";
import Footer from "../components/Footer";
import "./css/Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>

        <div className="contact-title">
          <TypeAnimation
            sequence={[1000, "Contact Me"]}
            wrapper="span"
            cursor={false}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </div>

        <div className="contact-text">
        <TypeAnimation
            sequence={[2000, "Feel free to send me a message or ask me a question! I will respond asap ;)"]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1em" }}
          />
          </div>

        <ContactForm></ContactForm>
        <Footer></Footer>
      </div>
    );
  }
}
