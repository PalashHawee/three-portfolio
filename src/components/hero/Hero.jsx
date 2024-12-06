import React, { Suspense } from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"; // Import React Icons
import "./hero.css";

import Speech from "./Speech";
import { Canvas } from "@react-three/fiber";
import Shape from "./Shape";

const socialVariants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const followVariants = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There, <br /> <span>I&apos;m Palash Hawee</span>
        </motion.h1>
        <motion.div
          variants={socialVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={socialVariants}>Full Stack Developer</motion.h2>
          <motion.p variants={socialVariants}>
            Experienced MERN Stack Developer
          </motion.p>
          <motion.div variants={socialVariants} className="socials">
            {/* Social Media Links */}
            <motion.a
              variants={socialVariants}
              href="https://github.com/PalashHawee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              variants={socialVariants}
              href="https://www.linkedin.com/in/palash-hawee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              variants={socialVariants}
              href="https://www.instagram.com/palashhawee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </motion.a>
            <motion.a
              variants={socialVariants}
              href="https://www.facebook.com/palashpaul.sangma/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.a
          animate={{
            y: [0, 5],
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href="#services"
          className="scroll"
        >
          {/* Scroll SVG */}
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hSection right">
        {/* follow*/}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="">
            <img src="/youtube.png" />
          </motion.a>
          <motion.a variants={followVariants} href="">
            <img src="/facebook.png" />
          </motion.a>
          <motion.a variants={followVariants} href="">
            <img src="/instagram.png" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">Follow me</div>
          </motion.div>
        </motion.div>
        {/* BUBBlE */}
        <Speech />
        {/* certificate */}
        <div className="certificate">
          {/* <img src="/certificate.png" alt="certificate" />
          Certified Python Expert <br />
          Besant Technologies, Bengaluru  */}
        </div>
        {/* contact */}
        <motion.a
          href="/#contact"
          className="contactLink"
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="conatactButton"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="#bb0af9" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3D */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/me2.JPG" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
