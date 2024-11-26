import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './About.css'; // Ensure you create and link the About.css file
import myPhoto from '../images/me.jpg'; // Replace with your image path
import wpi_logo from '../images/wpi_logo.png';
import pear_logo from '../images/pear_logo.png';
import alert_logo from '../images/alert_logo.png';
import transcript from '../images/transcript.png';
import pbe from '../images/pbe.png';
import resume from '../images/resume.png';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-photo">
          <img src={myPhoto} alt="No work" className="photo" />
        </div>

        {/* DESCRIPTION */}

        <div className="about-description">
          <h2>About Me</h2>
          <p> This is the About page. Here's where you can talk about your background, interests, and professional experience.</p>
        </div>

      </div>

      {/* SECOND ROW SUPPOSEDLY */}
      <div className="about-content">
        {/* EDUCATION */}
        <div className="about-desccription">
          <h2>Education</h2>
          <p2>Here is my education</p2>
        </div>
        {/* AWARDS */}
        <div>
          <h2>Awards</h2>
          <p>Seeing where this goes</p>
        </div>
      </div>



      {/* HYPERLINKS AND ICONS */}

      <div className="social-links">
        <a
          className="App-link"
          href="https://drive.google.com/file/d/1Ss7VuQoovAu5DO2z2rEYQ3q-nFbhdn6C/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-container">
            <img src={transcript} className="linkedin-svg" alt="Unofficial Transcript" />
            <p>Transcript</p> {/* Text under the GitHub icon */}
          </div>
        </a>

        <a
          className="App-link"
          href="https://drive.google.com/file/d/1qLJYGd65a_AVBY04AUpDQF2pwZhD_Iui/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-container">
            <img src={resume} className="linkedin-svg" alt="Resume" />
            <p>Resume</p> {/* Text under the LinkedIn icon */}
          </div>
        </a>
      </div>

      {/* TIMELINE */}

      <div className="about-timeline">
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="5/13/2024"
            icon={<img src={pear_logo} alt="icon" className="timeline-icon"/>}
          >
            <h3 className="vertical-timeline-element-title">Began working fulltime at PeAR Lab</h3>
            <p>As a reseacher assistant under Manoj Velmurugan</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="5/10/2024"
            icon={<img src={wpi_logo} alt="icon" className="timeline-icon"/>}
          >
            <h3 className="vertical-timeline-element-title">Graduated WPI</h3>
            <p>with High Distinction</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="5/22/2023-8/18/2023"
            icon={<img src={alert_logo} alt="icon" className="timeline-icon"/>}
          >
            <h3 className="vertical-timeline-element-title">Internship at Alert Innovation</h3>
            <p>as a Automation Engineering Inter</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2/14/2023"
            icon={<img src={pbe} alt="icon" className="timeline-icon"/>}
          >
            <h3 className="vertical-timeline-element-title">Inducted to Rho Beta Epsilon</h3>
            <p>WPI's Robotics Engineering Honor Society</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="8/31/2020"
            icon={<img src={wpi_logo} alt="icon" className="timeline-icon"/>}
          >
            <h3 className="vertical-timeline-element-title">Began studying at WPI</h3>
            <p>Double in Mechanical and Robotics Engineering</p>
          </VerticalTimelineElement>

          

          {/* Add more timeline events here */}
        </VerticalTimeline>
      </div>
    </div>
  );
}
