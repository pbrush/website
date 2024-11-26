import React from 'react';
import './CardSlider.css'; // Include CSS file for styling
// import bee from '../images/cropped_bee.png';
// import voltaic from '../images/voltaic.png';
// import rbe2102 from '../images/rbe2102_romi.png';
// import huron_comp from '../images/huron_comparison.png';
// import controls_proj from '../images/502.png';
// import motion_plannign_proj from '../images/550_proj3_1.png';
// import cube_swarm from '../images/cubeswarm.jpg';
// import gesture_recog from '../images/gesture_ds.png';
// import ind_robot_arm from '../images/abb_irb1600.png';
// import rbe3002 from '../images/rbe3002.png';
// import rbe3001 from '../images/rbe3001.png';
// import shapes from '../images/shapes.png';
// import sfis from '../images/sfis.png';
// import fpv from '../images/fpvdrone.png';
// import rc from '../images/3dprccar.png';
import { Link } from 'react-router-dom';
import projects from './projectData'; // Importing project data

const CardSlider = () => {
  // List of project IDs to include in the slider
  const projectIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  // Filter projects to include only those in projectIds
  const filteredProjects = projects.filter((project) => projectIds.includes(project.id));

  // Clone cards for seamless scrolling
  const allCards = [...filteredProjects, ...filteredProjects];

  return (
    <div className="card-slider-container">
      {allCards.map((card, index) => (
        <Link to={`/projects/${card.id}`} key={`${card.id}-${index}`} className="card-link">
          <div className="card">
            <div className="card-body">
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-content">
                <h3>{card.title}</h3>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardSlider;
