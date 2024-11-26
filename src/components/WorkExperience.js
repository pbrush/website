import React from 'react';
import './WorkExperience.css'; // Make sure to add the styles below in WorkExperience.css
import pear_logo from '../images/pear_logo.png'; // Example image
import alert_logo from '../images/alert_logo.png'; // Example image
import wpi_logo from '../images/wpi_logo.png'; // Example image

const workExperiences = [
  {
    id: 1,
    image: pear_logo,
    title: 'Research Assistant',
    description: 'Student researcher under Manoj Velmurugan in Nitin J Sankets Pear group',
    date: 'May 2024 - Present',
  },
  {
    id: 2,
    image: alert_logo,
    title: 'Automation Engineering Intern',
    description: 'Automation Engineer Intern for the Hardware Support group',
    date: 'May 2023 - Aug 2023',
  },
  {
    id: 3,
    image: wpi_logo,
    title: 'Teacher Assistant',
    description: 'Grader for Deep Learning for Perception course and Lab assistant for Intro to CAD course',
    date: 'Jan 2023 - May 2023, Aug 2024 - Oct 2024',
  },
  // Add more work experience objects as needed
];

function WorkExperience() {
  return (
    <div className="work-experience">
      <h2>My Work Experience</h2>
      <div className="work-experience-grid">
        {workExperiences.map((work) => (
          <div className="work-card" key={work.id}>
            <img src={work.image} alt={work.title} className="work-image" />
            <div className="work-details">
              <h3 className="work-title">{work.title}</h3>
              <p className="work-description">{work.description}</p>
              <p className="work-date">{work.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
