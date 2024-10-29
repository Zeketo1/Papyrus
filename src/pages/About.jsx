import React, { useEffect, useState } from "react";
import "../components/about/About.css";
import { motion } from "framer-motion";
import {
  PiCheckCircleThin,
  PiHeadsetThin,
  PiMoneyWavyThin,
  PiPaintBrushThin,
} from "react-icons/pi";
import first from "../assets/About/first.png";
import second from "../assets/About/second.png";
import third from "../assets/About/third.png";
import mission from "../assets/About/mission.jpg";
import vision from "../assets/About/vision.jpg";

const About = () => {
  const container2 = (x, delay) => ({
    hidden: { x: x, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  const whyOptions = [
    { icon: <PiPaintBrushThin className="icon" />, text: "Exclusive Designs" },
    { icon: <PiCheckCircleThin className="icon" />, text: "Quality Products" },
    { icon: <PiMoneyWavyThin className="icon" />, text: "Affordable Luxury" },
    { icon: <PiHeadsetThin className="icon" />, text: "24/7 Support" },
  ];

  // Framer-motion things
  const [banner, setBanner] = useState(0);
  const imageSliders = [
    { image: first, direction: "y", value: -300 },
    { image: second, direction: "x", value: 300 },
    { image: third, direction: "y", value: 300 },
  ];

  const nextSlide = () => {
    setInterval(() => {
      setBanner(banner === imageSliders.length - 1 ? 0 : banner + 1);
    }, 3000);
  };

  useEffect(() => {
    setBanner(0);

    clearInterval(nextSlide);
  }, []);

  useEffect(() => {
    nextSlide();
  }, [banner]);

  const container = (axis, value, delay) => ({
    hidden: { [axis]: value, opacity: 0 },
    visible: {
      [axis]: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div>
      <div className="about__banner__container">
        <div>
          <motion.h1
            variants={container2(-300, 0.8)}
            initial="hidden"
            animate="visible"
            className="contact__us__text"
          >
            About Us
          </motion.h1>
          <motion.p
            variants={container2(-300, 1)}
            initial="hidden"
            animate="visible"
            className="contact__us__route__text"
          >
            Home / About Us
          </motion.p>
        </div>
      </div>
      <div className="intro__parnter">
        <div className="intro__container">
          <div className="intro__text">
            <p className="welcome__text">Welcome to Papyrus</p>
            <p className="success__header">
              Our Success and Company <br /> History.
            </p>
            <p className="success__message">
              At Papyrus, we’ve built a legacy of delivering exceptional
              products and outstanding customer service. From our humble
              beginnings to the thriving business we are today, our journey has
              been fueled by a passion for innovation, quality, and customer
              satisfaction.
            </p>
            <div className="qoute__container">
              <div className="qoute__line"></div>
              <p className="qoute">
                "Simplicity is the ultimate sophistication." — Leonardo da Vinci
              </p>
            </div>
            <p className="success__message">
              We believe in creating products that combine style and function,
              making your life easier and more enjoyable. Over the years, we’ve
              continually evolved, adapting to the latest trends and
              technologies to bring you the best shopping experience possible
            </p>
          </div>
          <div className="intro">
            {imageSliders.map(
              ({ image, direction, value }, i) =>
                banner === i && (
                  <motion.img
                    variants={container(direction, value, 0.8)}
                    initial="hidden"
                    animate="visible"
                    src={image}
                    key={i}
                    alt=""
                    className="h-[500px] w-[600px]"
                  />
                )
            )}
          </div>{" "}
        </div>
        <div className="intro__services">
          <div className="intro__services__header">
            <p className="why__header">WHY PAPATRUS?</p>
            <p>
              At Papyrus, we believe that you can reflect your personal style by
              the gifts you give
            </p>
          </div>
          <div className="why__container">
            {whyOptions.map(({ icon, text }, i) => (
              <div key={i}>
                {icon}
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mission__vision__container">
      <div className="mission__container">
        <div className="mission__text__container">
          <h2>Our Mission</h2>
          <p>
            At Papyrus, our mission is to transform spaces by offering <br />
            high-quality, stylish, and functional furniture that elevates the{" "}
            <br />
            comfort and aesthetics of every home. We are committed to making{" "}
            <br />
            luxury affordable and accessible to everyone, while fostering a{" "}
            <br />
            seamless shopping experience driven by customer satisfaction. <br />
            Through exceptional craftsmanship, innovative designs, and <br />
            eco-friendly practices, we aim to create products that not only{" "}
            <br />
            inspire but also stand the test of time.
          </p>
        </div>
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          src={mission}
          alt=""
          className="mission__vision__image"
        />
      </div>
      <div className="mission__container">
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          src={vision}
          alt=""
          className="mission__vision__image image1"
        />
        <div className="vision__text__container">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become a global leader in home furnishing, known
            for redefining modern living through thoughtfully designed,
            sustainable, and affordable furniture. We aspire to create a brand
            that is synonymous with elegance, innovation, and responsibility,
            continuously evolving to meet the dynamic needs of our customers. By
            blending style, functionality, and sustainability, we envision a
            future where every home is a unique reflection of the people living
            in it, powered by the quality and innovation that Papyrus stands
            for.
          </p>
        </div>
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          src={vision}
          alt=""
          className="mission__vision__image2"
        />
      </div>
    </div>
    </div>
  );
};

export default About;
