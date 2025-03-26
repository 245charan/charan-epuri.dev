import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/projects/ProjectCard';
import { media } from '../styles/Responsive';

const ProjectsContainer = styled.div`
  margin-bottom: 3rem;
`;

const ProjectsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--primary-color);
  }
  
  ${media.mobile`
    font-size: 1.75rem;
  `}
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}
  
  ${media.desktop`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Java Spring Boot and React. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: '/placeholder-project.jpg',
      techStack: ['Java', 'Spring Boot', 'React', 'MySQL', 'AWS'],
      github: 'https://github.com/245charan/ecommerce-platform',
      liveDemo: 'https://example.com/ecommerce'
    },
    {
      title: 'Content Management System',
      description: 'A custom CMS built with WordPress and PHP. Includes custom post types, taxonomies, and a React-based admin dashboard.',
      image: '/placeholder-project.jpg',
      techStack: ['WordPress', 'PHP', 'React', 'MySQL'],
      github: 'https://github.com/245charan/custom-cms',
      liveDemo: 'https://example.com/cms'
    },
    {
      title: 'Task Management App',
      description: 'A task management application with real-time updates, built with React, Redux, and Node.js. Features include task creation, assignment, and progress tracking.',
      image: '/placeholder-project.jpg',
      techStack: ['React', 'Redux', 'Node.js', 'MongoDB'],
      github: 'https://github.com/245charan/task-manager',
      liveDemo: 'https://example.com/task-manager'
    },
    {
      title: 'Microservices Architecture',
      description: 'A microservices-based application using Spring Boot, Docker, and Kubernetes. Demonstrates service discovery, API gateway, and circuit breaker patterns.',
      image: '/placeholder-project.jpg',
      techStack: ['Java', 'Spring Boot', 'Docker', 'Kubernetes'],
      github: 'https://github.com/245charan/microservices-demo',
      liveDemo: null
    },
    {
      title: 'Real-time Chat Application',
      description: 'A real-time chat application built with React and WebSockets. Features include private messaging, group chats, and file sharing.',
      image: '/placeholder-project.jpg',
      techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/245charan/chat-app',
      liveDemo: 'https://example.com/chat-app'
    },
    {
      title: 'Charan Epuri Website',
      description: 'A responsive portfolio website built with React and styled-components. Features include theme customization, responsive design, and contact form.',
      image: '/placeholder-project.jpg',
      techStack: ['React', 'Styled Components', 'Redux'],
      github: 'https://github.com/245charan/',
      liveDemo: 'https://example.com/'
    }
  ];

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
