import React from "react";
import "../components/contact/Contact.css";
import { motion } from "framer-motion";
import { CiClock2, CiLocationOn, CiMail } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const container = (x, delay) => ({
    hidden: { x: x, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div>
      <div className="contact__banner__container">
        <div>
          <motion.h1
            variants={container(-300, 0.8)}
            initial="hidden"
            animate="visible"
            className="contact__us__text"
          >
            Contact Us
          </motion.h1>
          <motion.p
            variants={container(-300, 1)}
            initial="hidden"
            animate="visible"
            className="contact__us__route__text"
          >
            Home / Contact Us
          </motion.p>
        </div>
      </div>
      <div className="contact__form__container">
        <div>
          <div className="address__container">
            <p>Address</p>
            <div>
              <CiLocationOn className="icon" />
              <p>725 5th Ave, New York, NY 10022, USA</p>
            </div>
          </div>
          <div className="address__container">
            <p>Phones</p>
            <div>
              <PiPhoneThin className="icon" />
              <p>712-339-9294</p>
            </div>
          </div>
          <div className="address__container">
            <p>Address</p>
            <div>
              <CiMail className="icon" />
              <p>info@decovista.com</p>
            </div>
          </div>
          <div className="address__container">
            <p>Working Hours</p>
            <div>
              <CiClock2 className="icon" />
              <p>Mon-Fri: 10:00 - 18:00</p>
            </div>
          </div>
          <div className="follow__container">
            <p>Follow Us</p>
            <div className="socials__container">
              <FaFacebook className="icon" />
              <FaWhatsapp className="icon" />
              <FaInstagram className="icon" />
              <FaYoutube className="icon" />
            </div>
          </div>
        </div>
        <div>
          <p className="form__header">Send Your Question</p>
          <form onSubmit="">
            <div className="input__container">
              <label htmlFor="name">Your Name</label>
              <input type="text" className="input__text" />
            </div>
            <div className="input__container">
              <label htmlFor="email">Your Email</label>
              <input type="email" className="input__text" />
            </div>
            <div className="input__container">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                cols="50"
                rows="10"
                className="textarea__input"
              ></textarea>
            </div>
            <button className="button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
