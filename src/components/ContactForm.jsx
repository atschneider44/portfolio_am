import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zwgmwa7",
        "template_v8v2aio",
        form.current,
        "b5fDkega2rVW2Mswv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="contact-form-main">
      <div className="contact-form-grid">
        <div className="contact-form-grid-item-name-label">
          <label className="label-name">Name</label>
        </div>
        <div className="contact-form-grid-item-name-input">
          <input className="contact-input" type="text" name="user_name" />
        </div>
        <div className="contact-form-grid-item-email-label">
          <label className="label-email">Email</label>
        </div>
        <div className="contact-form-grid-item-email-input">
          <input className="contact-input" type="email" name="user_email" />
        </div>
        <div className="contact-form-grid-item-message-label">
          <label className="label-message">Message</label>
        </div>
        <div className="contact-form-grid-item-message-input">
          <textarea className="contact-input contact-input-message" name="message" />
        </div>
      </div>
      </div>
      <div className="contact-form-grid-item-submit">
          <input className="button-submit" type="submit" value="Send Message" />
        </div>
    </form>
  );
};

export default ContactForm;
