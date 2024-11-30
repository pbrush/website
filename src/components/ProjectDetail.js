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
          <img src={project.image} alt={project.title} className="project-detail-image" />
          <p><strong>Description:</strong> {project.description}</p>
          <p><strong>Date:</strong> {project.date}</p>
        </div>
      ) : project.id === 2 ? (
        // Custom layout for project with ID 2
        <div>
          <h2>{project.title}</h2>
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
          <h1>{project.title}</h1>
          <h3>{project.date}</h3>
          <h2> I have not finished populating this project's page yet! Please see the summary below in the meantime. 
               <br/>
               If you have any questions feel free to reach out directly.</h2>
          <p>  
            TL;DR: {project.summary.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
          </p>
          <img src={project.image} alt={project.title} className="project-page-image" />
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
