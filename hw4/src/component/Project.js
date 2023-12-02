// Projects.js
import React from "react";
import styled from "styled-components";
import painter from '../assets/painter.jpg';

const ProjectsWrapper = styled.section`
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  h3 {
    margin-bottom: 1rem;
  }
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h2>Projects</h2>
      <ProjectCard>
        <h3>Blog App</h3>
        <p>
          Blog allows user to create and upload a post about various subjects,
          such as: lifestyle,...
        </p>
        <a href="https://github.com/SyLe-Van/FrontEnd_BlogWeb">Front End repository</a>
      </ProjectCard>
    </ProjectsWrapper>
  );
};

export default Projects;
