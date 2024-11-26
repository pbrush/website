import React, { useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import './Projects.css';
import projects from './projectData'; 

function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const filteredProjects = projects.filter((project) => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const matchesQuery = project.title.toLowerCase().includes(lowercasedQuery) ||
      project.tags.some((tag) => tag.toLowerCase().includes(lowercasedQuery));

    const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;

    return matchesQuery && matchesTag;
  });

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  return (
    <div className="projects">
      <h2>My Projects</h2>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="tag-dropdown"
        >
          <option value="">All Tags</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="project-link">
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-date">{project.date}</p>
                <div className="project-resources">
                  {project.resources && project.resources.map((resource, index) => (
                    <img key={index} src={resource} alt={`Resource ${index + 1}`} className="resource-image" />
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;