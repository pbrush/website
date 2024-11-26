import React, { useState, useEffect } from "react";
import "./CardSlider.css";
import { Link } from "react-router-dom";
import projects from "./projectData"; // Import project data

const CardSlider = () => {
  // List of project IDs to include in the slider
  const projectIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  // Filter projects to include only those in projectIds
  const filteredProjects = projects.filter((project) =>
    projectIds.includes(project.id)
  );

  // Clone cards for seamless scrolling
  const allCards = [...filteredProjects, ...filteredProjects, ...filteredProjects];

  // State to track the offset for scrolling
  const [offset, setOffset] = useState(0);

  // Scroll speed in pixels per frame
  const scrollSpeed = 1;

  // Animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => prevOffset - scrollSpeed);
    }, 16); // ~60fps (16ms)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    // Smoothly reset the offset when it reaches the total length
    if (offset <= -((350 + 10) * filteredProjects.length)) {
      setOffset(0);
    }
  }, [offset, filteredProjects.length]);

  return (
    <div
      className="card-slider-container"
      style={{
        transform: `translateX(${offset}px)`, // Apply dynamic offset
        display: "flex",
        width: `calc((350px + 10px) * ${allCards.length})`, // Dynamic container width
      }}
    >
      {allCards.map((card, index) => (
        <Link
          to={`/projects/${card.id}`}
          key={`${card.id}-${index}`}
          className="card-link"
        >
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
