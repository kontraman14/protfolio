import "./App.css";
import vincePic from "./assets/vincepicture.jpg";

export default function App() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <div className="profile">
          <img
            src={vincePic}
            alt="Profile"
            className="profile-img"
          />
        </div>

        <h1>Vince S. Rivera</h1>
        <p className="title">Information Technology</p>
        <p className="subtitle">
          I build modern web and mobile applications with clean UI and strong functionality.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>
        <div className="grid">
          <div className="card">HTML, CSS, JavaScript</div>
          <div className="card">React.js</div>
          <div className="card">Firebase</div>
          <div className="card">SQL / PostgreSQL</div>
          <div className="card">Android Studio</div>
          <div className="card">.NET (Basic)</div>
          <div className="card">Git & GitHub</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>Transporent App (Capstone)</h3>
          <p>
            Car rental app with Google Maps integration for real-time location tracking.
          </p>
        </div>

        <div className="card">
          <h3>POS System Website</h3>
          <p>
            Web-based system for managing sales transactions, products, and reports.
          </p>
        </div>

        <div className="card">
          <h3>School Management System</h3>
          <p>
            Platform with student login, registrar panel, and faculty management using Google Sheets.
          </p>
        </div>

        <div className="card">
          <h3>Guard Incident Reporting App</h3>
          <p>
            Mobile app using Firebase to submit and track incident reports.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <h2>Experience</h2>

        <div className="card">
          <h3>Intern Web Developer</h3>
          <p>Kenneth G. Ads (2025)</p>
          <ul>
            <li>Developed inventory system</li>
            <li>Built login and attendance tracking</li>
            <li>Created conversion tools</li>
          </ul>
        </div>

        <div className="card">
          <h3>Bulacan State University Internship</h3>
          <p>Focused on improving web development skills</p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section">
        <h2>Education</h2>
        <div className="card">
          <h3>Bachelor of Science in Information Technology (BSIT)</h3>
          <p>Bulacan State University – Meneses Campus</p>
          <p>Graduate</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact">
        <h2>Contact</h2>
        <p>
          📧 Email:{" "}
          <a href="mailto:rivera.vince.s.400646@gmail.com">
            rivera.vince.s.400646@gmail.com
          </a>
        </p>
        <p>
          📱 Phone: <a href="tel:09154112748">0915 411 2748</a>
        </p>
        <p>
          🌐 Facebook:{" "}
          <a
            href="https://www.facebook.com/vince.rivera.457385"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook.com/vince.rivera
          </a>
        </p>
        <p>📍 Address: 135 Kabesang Imo St., Valenzuela City</p>
      </section>

    </div>
  );
}