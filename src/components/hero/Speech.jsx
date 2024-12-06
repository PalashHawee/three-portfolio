import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Dynamic MERN Stack Developer skilled in building and deploying full-stack web applications",
            1000,
            "Experienced in creating responsive, scalable, and efficient solutions for diverse client needs.",
            1000,
          ]}
          wrapper="span"
          speed={50}
          deletionSpeed={90}
          repeat={Infinity}
        />
      </div>
      <img src="/me1.jpg" alt="" />
    </motion.div>
  );
};

export default Speech;
