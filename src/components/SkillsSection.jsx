import React from "react";
import { motion } from "framer-motion";
import "./css/Header.css";

const SkillsSection = () => {
  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "AWS",
    "Docker",
    "Figma",
    "Git",
  ];

  return (
    <section id="skills" className="orbit-skills-section">
      <motion.h2
        className="orbit-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span>Skills</span>
      </motion.h2>

      <motion.div
        className="orbit-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Center Core */}
        <div className="orbit-center">
          <div className="center-glow"></div>
          <span>Full Stack</span>
        </div>

        {/* Orbit Items */}
        {skills.map((skill, i) => (
          <div key={skill} className="orbit-item" style={{ "--i": i }}>
            {skill}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
