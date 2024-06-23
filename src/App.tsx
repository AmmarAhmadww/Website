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
        <a href="#socials" className="nav-link">Socials</a>
      </nav>
      <section id="summary" className="section">
        <h2 className="dark-heading">Profile Overview</h2>
        <p className="Profile">I am a BSCS student currently in my 7th semester, interning as a Software Development Intern. My technical proficiency spans across various programming languages and frameworks, including ReactJS, NodeJS, JavaScript, SQL, Python, C++, C, C#, HTML, and CSS. Through my internship and academic journey, I have developed a solid foundation in software development, gaining hands-on experience in building and maintaining robust applications. My skills enable me to effectively contribute to projects, adapt to new challenges, and continuously grow as a developer.</p>
      </section>
      <section id="education" className="section">
        <h2 className="dark-heading">Education</h2>
        <p className="BSC">B.Sc. in Computer Science - Lahore Garrison University - 02/2021 - Present</p>
        <p className="ICS">Intermediate of Computer Sciences - Defence Degree College For Boys - 02/2019 - 06/2020</p>
        <p className="Matric">Matric (Computer Science) - Fauji Foundation School Pasrur - 2017 - 2018</p> 
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
          <p><a href="https://www.apollographql.com/tutorials/certifications/78638872-4586-4451-9446-1afa85671c50">Graph Developer - Associate</a></p>
          <p><a href="https://www.apollographql.com/tutorials/certifications/4db5faa6-faad-4812-97ba-39edc9de6e3d">Graph Developer - Professional</a></p>
          <p><a href="https://www.coursera.org/account/accomplishments/certificate/QTSKQQZXK2WL">Cyber Security & Mobility</a></p>
          <p><a href="https://www.credly.com/badges/8b60502b-219e-4184-9102-dc3df4d2c2a2/linked_in_profile">Python Essential 1</a></p>
        </div>
      </section>
      <section id="languages" className="section">
        <h2 className="dark-heading">Work Experience</h2>
        <p className="internship">
          Software Developer Intern <br />
          <a href="https://www.linkedin.com/company/punchpicks/mycompany/">Punch Group</a> <br />
          May 2024 - Present <br />
          Lahore, Punjab, Pakistan <br />
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
        </div>
      </section>
      <section id="socials" className="section">
        <h2 className="dark-heading">Socials</h2>
        <div className="social-media-icons">
          <a href="https://github.com/AmmarAhmedw" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          </a><br />
          <a href="https://www.linkedin.com/in/ammar-ahmed-200470279/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
          </a>
        </div>
      </section>
      <footer>
        <p className="rights">All rights reserved ©</p>
      </footer>
    </div>
  );
};

export default App;
