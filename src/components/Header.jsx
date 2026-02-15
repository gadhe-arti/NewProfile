import React, { useState } from "react";
import { motion } from "framer-motion";
import "./css/Header.css";
import { Link } from "react-router-dom";
import profileImage from "../assets/image/image.png";
import img from "../assets/image/img.jpg";
import img2 from "../assets/image/img3.jpg";
import img3 from "../assets/image/img6.jpg";
import img4 from "../assets/image/img4.jpeg";
import img5 from "../assets/image/img5.jpeg";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const skills = [
    "React",
    "js",
    "Mysql",
    "Html",
    "Css",
    "Bootstrap",
    "Java",
    "GitHub",
  ];

  return (
    <>
      <div className="portfolio-container">
        <div className="star-field">
          <div className="stars-small"></div>
          <div className="stars-twinkle"></div>
          <div className="stars-small"></div>
          <div className="stars-twinkle"></div>
          <div className="stars-small"></div>
          <div className="stars-twinkle"></div>
        </div>
        {/* Add these lines for the animated stars */}
        <div className="shooting-star star-1"></div>
        <div className="shooting-star star-2"></div>
        <div className="shooting-star star-3"></div>

        <div className="blob blob-1" />
        <div className="blob blob-2" />

        {/* ================= NAVBAR ================= */}
        <nav className="navbar">
          <h1 className="logo">Portfolio</h1>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-item"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </nav>

        {/* ================= HERO ================= */}
        <section className="hero">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h2 className="hero-title">
              Hi, I'm <span className="text-gradient">Arti</span>
            </h2>
            <p className="hero-subtitle">
              I’m a Full Stack Developer who builds simple, fast, and
              user-friendly web applications.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="avatar-container"
          >
            <div className="avatar-gradient">
              <div className="avatar-inner">
                <img src={profileImage} alt="Avatar" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ================= ABOUT / EXPLORE ME ================= */}
        <section id="about" className="about-section">
          <div className="section-header">
            <h3 className="section-title">
              Explore <span className="text-gradient">Me</span>
              <div className="title-underline"></div>
            </h3>
          </div>

          <div className="about-grid">
            {/* Left Column: Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bio-container"
            >
              <h4 className="bio-heading">Passionate FullStack Developer</h4>

              <p className="bio-text">
                I'm specialize in creating responsive, accessible, and
                performant web applications using modern technologies.
              </p>
              <p className="bio-text">
                I'm passionate about creating elegant solutions to complex
                problems, and I'm constantly learning new technologies to stay
                at the forefront of the ever-evolving web landscape.
              </p>

              <div className="about-buttons">
                <button className="btn-primary">Get In Touch</button>
              </div>
            </motion.div>

            {/* Right Column: Skill Cards */}
            <div className="skills-list">
              <SkillCard
                title="Web Development"
                desc="Creating responsive websites and web applications with modern frameworks."
                icon="< />"
              />
              <SkillCard
                title="UI/UX Design"
                desc="Designing intuitive user interfaces and seamless user experiences."
                icon="👤"
              />
              <SkillCard
                title="Project Management"
                desc="Leading projects from conception to completion with agile methodologies."
                icon="💼"
              />
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="projects-section">
          <div className="projects-bg-glow"></div>{" "}
          {/* Background ambient light */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h3 className="unique-title">
              Crafted <span className="text-gradient">Works</span>
            </h3>
            <div className="title-underline"></div>
          </motion.div>
          <div className="projects-container-unique">
            {[
              {
                title: "GamePro",
                tech: ["React", "Html", "Css"],
                link: "https://comfy-praline-72cd8c.netlify.app/",
                desc: "A futuristic shopping experience with real-time inventory and 3D previews.",
                img: img,
              },
              {
                title: "Food-App",
                tech: ["React", "Html", "Css", "API"],
                link: "https://food-app-five-fawn.vercel.app/",
                desc: "Live dashboard tracking blockchain transactions with interactive glass charts.",
                img: img2,
              },
              {
                title: "BizVisitingCard",
                tech: ["Codegniter", "Html", "Css", "Js", "Bootstrap", "Mysql"],
                link: "https://swapnapurtiudyogsamuh.in/digital_card/",
                desc: "Custom-trained LLM interface for developers to automate documentation.",
                img: img3,
              },
              {
                title: "Ecommerce ",
                tech: ["Codegniter", "Html", "Css", "Js", "Bootstrap", "Mysql"],
                link: "https://swapnapurtiudyogsamuh.in/ecommerce/",
                desc: "Custom-trained LLM interface for developers to automate documentation.",
                img: img4,
              },
              {
                title: "Cake ManageMent System ",
                tech: ["Java", "Html", "Css", "Js", "Bootstrap", "Mysql"],
                link: "#",
                desc: "Custom-trained LLM interface for developers to automate documentation.",
                img: img5,
              },

              // ... more projects
            ].map((project, index) => (
              <motion.div
                key={index}
                className="unique-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-glass-layer"></div>

                <div className="unique-image-box">
                  <img src={project.img} alt={project.title} />
                  <div className="image-scanline"></div>
                </div>

                <div className="unique-content">
                  <div className="tech-stack-minimal">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <h4 className="card-name">{project.title}</h4>
                  <p className="card-detail">{project.desc}</p>

                  <div className="card-actions-unique">
                    <a href="#" className="link-icon">
                      Code ↗
                    </a>
                    <a
                      href={project.link}
                      target="__blank"
                      className="link-button-glow"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SKILLS SECTION ================= */}
        <section id="skills" className="orbit-skills-section">
          <motion.h2
            className="orbit-title "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-gradient">Skills</span>
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
        {/* ================= CONTACT SECTION ================= */}
        <section id="contact" className="contact-section">
          <div className="contact-glow-bg"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-header"
          >
            <h3 className="unique-title">
              Get In <span className="text-gradient">Touch</span>
            </h3>
            <p className="contact-subtitle">
              Have a project in mind or just want to say hi? My inbox is always
              open.
            </p>
          </motion.div>

          <div className="contact-container">
            <motion.div
              className="contact-info-glass"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h5>Location</h5>
                  <p>Chh.Sambhajinagar</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div>
                  <h5>Email</h5>
                  <p>gadhearti443@gmail.com</p>
                </div>
              </div>
              <div className="social-links-minimal">
                <a href="https://github.com/gadhe-arti">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/arti-gadhe/">
                  <FaLinkedin />
                </a>
                <a href="https://wa.me/9172172554">
                  <FaWhatsapp />
                </a>
              </div>
            </motion.div>

            <motion.form
              className="contact-form-unique"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="input-group">
                <input type="text" placeholder="Your Name" required />
                <div className="input-focus-line"></div>
              </div>
              <div className="input-group">
                <input type="email" placeholder="Your Email" required />
                <div className="input-focus-line"></div>
              </div>
              <div className="input-group">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
                <div className="input-focus-line"></div>
              </div>
              <button type="submit" className="submit-btn-glow">
                Send Signal 🚀
              </button>
            </motion.form>
          </div>
        </section>
        {/* ================= FOOTER ================= */}
        <footer
          style={{
            textAlign: "center",
            padding: "2rem",
            borderTop: "1px solid rgba(51,65,85,0.4)",
            color: "#94a3b8",
          }}
        >
          © {new Date().getFullYear()} Arti Gadhe. All rights reserved.
        </footer>
      </div>
    </>
  );
};

/* Reusable Card */
const SkillCard = ({ title, desc, icon }) => (
  <motion.div whileHover={{ x: 8 }} className="skill-card">
    <div className="skill-icon">{icon}</div>
    <div>
      <h4 className="skill-title">{title}</h4>
      <p className="skill-desc">{desc}</p>
    </div>
  </motion.div>
);

export default Header;
