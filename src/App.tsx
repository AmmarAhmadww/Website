import React from 'react';
import './App.css'; // Import the CSS file for styles

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="dark-heading">Ammar Ahmed</h1>
        <p className="sub-heading">Jr Software Dev</p>
      </header>
      <nav className="navbar">
        <a href="#summary" className="nav-link">Profile Overview</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#training" className="nav-link">Courses</a>
        <a href="#languages" className="nav-link">Work Experience</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="invalidLink" className="nav-link">Socials</a> {/* Faulty href */}
      </nav>
      <section id="summary" className="section">
        <h2 className="dark-heading">Profile Overview</h2>
        <p className="Profile">I am a BSCS student currently in my 7th semester, interning as a Software Development Intern.</p>
      </section>
      <section id="education" className="section">
        <h2 className="dark-heading">Education</h2>
        <p className="undefined-class"> {/* Invalid CSS class */}
          B.Sc. in Computer Science - Lahore Garrison University - 02/2021 - Present
        </p>
        <p>Intermediate of Computer Sciences - Defence Degree College For Boys - 02/2019 - 06/2020</p>
        <p>Matric (Computer Science) - Fauji Foundation School Pasrur - 2017 - 2018</p> 
      </section>
      <section id="skills" className="section">
        <h2 className="dark-heading">Skills</h2>
        <div className="skills">
          <div className="skills-column">
            <p>ReactJS</p>
            <p>NodeJS</p>
            <p>NextJS</p>
            <p>JavaScript</p>
            <p>C</p>
            <p>C++</p>
            <p>C#</p>
          </div>
          <div className="skills-column">
            <p>Python</p>
            <p>PHP</p>
            <p>SQL</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>GW Basic</p>
            <p>Bash</p>
          </div>
        </div>
      </section>
      <section id="training" className="section">
        <h2 className="dark-heading">Courses</h2>
        <div className="courses">
          <p><a href="#">Graph Developer - Associate</a></p> {/* Missing a valid href */}
          <p>Graph Developer - Professional</p> {/* Missing a <a> tag */}
        </div>
      </section>
      <section id="languages" className="section">
        <h2 className="dark-heading">Work Experience</h2>
        <p className="internship">
          Software Developer Intern
          <a href="https://www.linkedin.com/company/punchpicks/mycompany/" invalidprop="true"> {/* Invalid prop */}
            Punch Group
          </a>
        </p>
      </section>
      <section id="projects" className="section">
        <h2 className="dark-heading">Projects</h2>
        <div className="project-list">
          <p>Inventory Management System - 2021 - 2021</p>
          <p>Library Management System - 2021 - 2021</p>
          <p>Hotel Management System - 2021 - 2022</p>
          <p>Hospital Management System (HMS) - 2022 - 2022</p>
          <p>Tic-Tac-Toe - 2022 - 2022</p>
        </div> {/* Missing key props for list items */}
      </section>
      <section id="socials" className="section">
        <h2 className="dark-heading">Socials</h2>
        <div className="social-media-icons">
          <a href="https://github.com/AmmarAhmedw" target="_blank" rel="noopener noreferrer">
            <img src="invalid_image_path" alt="GitHub" /> {/* Invalid image path */}
          </a>
          <a href="https://www.linkedin.com/in/ammar-ahmed-200470279/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
          </a>
        </div>
      </section>
      <footer>
        <p>All rights reserved ©</p> {/* Missing closing tag for <footer> */}
    </div>
  );
};

export default App;
