/*index.jsx*/
import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import logosquare from "../../src/images/elevate_square.png";
import elevateAnimated from "../../src/images/elevate-logo-animated.gif";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from "./Footer";

//Functional Component
export default function RegisterSpeakers() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fade1 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fade1} className="py-3">
        <div
          id="register-speaker-script-holder"
          className="container py-5 text-center"
        >
          <iframe
            title="speaker-register-form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfrnJKV5_r4eIl8GeuOACL3UfbBX06kGAbZ2jyaDFlYJ2bH7g/viewform?usp=sf_link"
            className="container"
            height="1000px"
            style={{ backgroundColor: "#222222", overflow: "hidden" }}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
      </motion.div>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          height: "30vh",
          justifyContent: "center",
        }}
        className="pb-0 pb-md-3"
      >
        <img
          width="70%"
          className="pt-0 pl-3 pb-4 pt-md-5"
          src={elevateAnimated}
          alt=""
          srcset=""
        />
      </div>
      <Footer></Footer>
    </motion.div>
  );
}
