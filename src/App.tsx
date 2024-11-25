import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styles

const App: React.FC = () => {
  const [profile, setProfile] = useState({ name: "Ammar Ahmed" });

  // Directly mutating state (React anti-pattern)
  const updateProfile = () => {
    profile.name = "Changed Name"; // State mutation
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="dark-heading">
          <span>Welcome to the portfolio</span> {/* Invalid nesting inside h1 */}
          Ammar Ahmed
        </h1>
        <p className="sub-heading">Jr Software Dev</p>
      </header>
      <nav className="navbar">
        {/* Non-descriptive link text */}
        <a href="#summary" className="nav-link">Click</a>
        <a href="#education" className="nav-link">Here</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#training" className="nav-link">Courses</a>
        <a href="#languages" id="duplicate-id" className="nav-link">Work</a> {/* Duplicate id */}
        <a href="#languages" id="duplicate-id" className="nav-link">Experience</a> {/* Duplicate id */}
        <a href="#projects" className="nav-link">Projects</a>
      </nav>
      <section id="summary" className="section">
        <h2 className="dark-heading">Profile Overview</h2>
        <p className="Profile">
          {/* Usage of undefined variable */}
          Welcome, {user.name}! {/* user is not defined */}
        </p>
      </section>
      <section id="education" className="section">
        <h2 className="dark-heading">Education</h2>
        <p className="undefined-class">
          B.Sc. in Computer Science - Lahore Garrison University - 02/2021 - Present
        </p>
        <div>
          {/* Invalid HTML nesting */}
          <p>
            Intermediate of Computer Sciences
            <div>Invalid Nested Div</div>
          </p>
        </div>
      </section>
      <section id="skills" className="section">
        <h2 className="dark-heading">Skills</h2>
        <div className="skills">
          <ul>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>Undefined Skill: {skills.undefinedSkill}</li> {/* Accessing undefined property */}
          </ul>
        </div>
      </section>
      <section id="training" className="section">
        <h2 className="dark-heading">Courses</h2>
        {/* Invalid HTML structure */}
        <p>
          <span>Courses offered:</span>
          <ul>
            <li>Graph Developer - Associate</li>
            <div>Invalid Div Inside List</div> {/* Invalid HTML structure */}
          </ul>
        </p>
      </section>
      <section id="languages" className="section">
        <h2 className="dark-heading">Work Experience</h2>
        <p className="internship">
          Software Developer Intern
          {/* Invalid usage of props */}
          <a href="https://linkedin.com/" invalidprop="true">Punch Group</a>
        </p>
      </section>
      <section id="projects" className="section">
        <h2 className="dark-heading">Projects</h2>
        <div className="project-list">
          {/* Missing unique key props */}
          {["Project1", "Project2", "Project3"].map((project) => (
            <p>{project}</p> // Missing `key` prop
          ))}
        </div>
      </section>
      <section id="socials" className="section">
        <h2 className="dark-heading">Socials</h2>
        <div className="social-media-icons">
          <a href="https://github.com/AmmarAhmedw">
            <img src="invalid_image_path" /> {/* Missing alt attribute */}
          </a>
          <a href="https://linkedin.com/"> {/* Non-descriptive text */}
            Profile
          </a>
        </div>
      </section>
      <footer>
        {/* Incorrectly closed tag */}
        <p>All rights reserved ©</p
      </footer>
    </div>
  );
};

export default App;
