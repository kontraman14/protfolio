import "./App.css";
import vincePic from "./assets/vincepicture.jpg";
import { useRef, useState } from "react";

// 🔥 Load ALL assets
const allImages = import.meta.glob('./assets/*.{png,jpg,jpeg,gif,webp}', { eager: true });
const allVideos = import.meta.glob('./assets/*.{mp4,webm,ogg}', { eager: true });

// 🔥 Helper: get exact file
const getFile = (media, name) => {
  return Object.fromEntries(
    Object.entries(media).filter(([path]) =>
      path.includes(name)
    )
  );
};

//////////////////////////////
// ✅ TRANSPORENT PROJECT
//////////////////////////////
const transporentImages = {
  ...getFile(allImages, 'renterpage'),
  ...getFile(allImages, 'adminpage')
};

const transporentVideos = {
  ...getFile(allVideos, 'transporentvid')
};

//////////////////////////////
// ✅ POS SYSTEM
//////////////////////////////
const posImages = {
  ...getFile(allImages, 'pos.png'),
  ...getFile(allImages, 'pos1.png'),
  ...getFile(allImages, 'pos2.png')
};

const posVideos = {};

//////////////////////////////
// ✅ SCHOOL SYSTEM
//////////////////////////////
const schoolImages = {
  ...getFile(allImages, 'attendance'),
  ...getFile(allImages, 'faculty.panel'),
  ...getFile(allImages, 'Registrar.panel'),
  ...getFile(allImages, 'studentperformance')
};

const schoolVideos = {};

//////////////////////////////
// ✅ GUARD APP
//////////////////////////////
const guardpImages = {
  ...getFile(allImages, 'gaurd1'),
  ...getFile(allImages, 'gaurdsamp'),
  ...getFile(allImages, 'guards')
};

const guardpVideos = {};

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔥 Index per project
  const [transporentIndex, setTransporentIndex] = useState(0);
  const [posIndex, setPosIndex] = useState(0);
  const [schoolIndex, setSchoolIndex] = useState(0);
  const [guardpIndex, setGuardpIndex] = useState(0);

  // 🔥 Media renderer
  const renderSingleMedia = (images, videos, currentIndex, setIndex) => {
    const allMedia = [...Object.values(images), ...Object.values(videos)];
    if (allMedia.length === 0) return <p>No media found</p>;

    const currentMedia = allMedia[currentIndex % allMedia.length];

    const isImage =
      currentMedia.default.endsWith(".jpg") ||
      currentMedia.default.endsWith(".png") ||
      currentMedia.default.endsWith(".jpeg") ||
      currentMedia.default.endsWith(".gif") ||
      currentMedia.default.endsWith(".webp");

    return (
      <div
        className="single-media-container"
        onClick={() =>
          setIndex((prev) => (prev + 1) % allMedia.length)
        }
      >
        {isImage ? (
          <img
            src={currentMedia.default}
            alt="project"
            className="project-media-single"
          />
        ) : (
          <video controls className="project-media-single">
            <source src={currentMedia.default} />
          </video>
        )}

        <div className="media-indicator">
          {currentIndex + 1} / {allMedia.length}
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">Vince S. Rivera</div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection(homeRef)} className="nav-btn">Home</button></li>
          <li><button onClick={() => scrollToSection(aboutRef)} className="nav-btn">About</button></li>
          <li><button onClick={() => scrollToSection(skillsRef)} className="nav-btn">Skills</button></li>
          <li><button onClick={() => scrollToSection(contactRef)} className="nav-btn">Contact</button></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" ref={homeRef}>
        <img src={vincePic} alt="Profile" className="profile-img" />
        <h1>Vince S. Rivera</h1>
        <p className="title">Aspiring Web Developer & Software Developer</p>
        <p className="subtitle">
          I am passionate about building user-friendly websites and continuously learning modern web technologies.
        </p>
      </section>

      {/* ABOUT */}
      <section className="section" ref={aboutRef}>
        <h2>About</h2>

        <div className="about-container">
          <div className="about-image">
            <img src={vincePic} alt="Vince" className="about-img" />
          </div>

          <div className="about-text">
            <p className="about-description">
              I am a Full-Stack Developer passionate about building scalable web applications and intuitive experiences using React, Firebase, and SQL technologies.
            </p>
            <p className="about-description">
              I focus on clean code and modern UI while collaborating through Git & GitHub.
            </p>
          </div>
        </div>

        <div>
          <h3>Education</h3>
          <div className="card">
            <h4>BS Information Technology</h4>
            <p>Bulacan State University – Meneses Campus</p>
            <p>Graduate</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" ref={skillsRef}>
        <h2>Skills</h2>

        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skills-list">
              <span className="skill-badge">HTML</span>
              <span className="skill-badge">CSS</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">React.js</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skills-list">
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">SQL</span>
              <span className="skill-badge">Firebase</span>
            </div>
          </div>

           <div className="skill-category">
            <h3>Mobile & Other</h3>
            <div className="skills-list">
              <span className="skill-badge">Android Studio</span>
              <span className="skill-badge">.NET</span>
              <span className="skill-badge">Git & GitHub</span>
            </div>
          </div>
        </div>
        
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>Projects</h2>

        {/* Transporent */}
        <div className="card">
          <div className="project-container">
            <div className="project-media-section">
              {renderSingleMedia(transporentImages, transporentVideos, transporentIndex, setTransporentIndex)}
            </div>
            <div className="project-text">
              <h3>Transporent App (Capstone)</h3>
              <p>Car rental app with maps integration.</p>
            </div>
          </div>
        </div>

        {/* POS */}
        <div className="card">
          <div className="project-container">
            <div className="project-media-section">
              {renderSingleMedia(posImages, posVideos, posIndex, setPosIndex)}
            </div>
            <div className="project-text">
              <h3>POS System</h3>
              <p>Sales and reporting system.</p>
            </div>
          </div>
        </div>

        {/* School */}
        <div className="card">
          <div className="project-container">
            <div className="project-media-section">
              {renderSingleMedia(schoolImages, schoolVideos, schoolIndex, setSchoolIndex)}
            </div>
            <div className="project-text">
              <h3>School Management System</h3>
              <p>Student and faculty management platform.</p>
            </div>
          </div>
        </div>

        {/* Guard */}
        <div className="card">
          <div className="project-container">
            <div className="project-media-section">
              {renderSingleMedia(guardpImages, guardpVideos, guardpIndex, setGuardpIndex)}
            </div>
            <div className="project-text">
              <h3>Guard Reporting App</h3>
              <p>Incident reporting mobile app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" ref={contactRef}>
        <h2>Contact</h2>
        <p>📧 <a href="mailto:rivera.vince.s.400646@gmail.com">rivera.vince.s.400646@gmail.com</a></p>
        <p>📱 <a href="tel:09154112748">0915 411 2748</a></p>
        <p>📍 Valenzuela City</p>
      </section>
    </div>
  );
}
