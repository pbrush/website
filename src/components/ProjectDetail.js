import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './projectData';  // Import from new data file

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-detail">
      {project.id === 1 ? (
        // Custom layout for project with ID 1
        <div>
          <h2>{project.title}</h2>
          <p> This page is different from</p>
          <img src={project.image} alt={project.title} className="project-detail-image" />
          <p><strong>Description:</strong> {project.description}</p>
          <p><strong>Date:</strong> {project.date}</p>
          <p>Additional custom content for project 1...</p>
          <p> Please just let this work</p>
        </div>
      ) : project.id === 2 ? (
        // Custom layout for project with ID 2
        <div>
          <h2>{project.title}</h2>
          <p> It would be so cool if this just worked</p>
          <p> It might work? </p>
          <p> Uuuuuhhhhh</p>
          <p> pls</p>
          <p>{project.description}</p>
          <ul>
            {project.resources.map((resource, index) => (
              <li key={index}><a href={resource} target="_blank" rel="noopener noreferrer">Resource {index + 1}</a></li>
            ))}
          </ul>
        </div>
      ) : (
        // Default layout for other projects
        <div>
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} className="project-detail-image" />
          <p>{project.description}</p>
          <p>{project.date}</p>
          <h3>Tags</h3>
          <ul>
            {project.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
