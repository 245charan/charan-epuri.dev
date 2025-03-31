import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { media } from '../../styles/Responsive';

const Card = styled.div`
  background-color: var(--card-background);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-0.3125rem);
    box-shadow: 0 .625rem 1.875rem rgba(0, 0, 0, 0.2);
  }
  
  ${media.mobile`
    padding: 1.25rem;
  `}
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 12.5rem;
  border-radius: .5rem;
  overflow: hidden;
  margin-bottom: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  ${media.mobile`
    height: 11.25rem;
  `}
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: .5rem;
  color: var(--text-color);
  
  ${media.mobile`
    font-size: 1.1rem;
  `}
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  flex-grow: 1;
  
  ${media.mobile`
    font-size: .9rem;
  `}
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background-color: var(--background-color);
  color: var(--text-color);
  padding: .25rem .75rem;
  border-radius: 3.125rem;
  font-size: .8rem;
  font-weight: 500;
  
  ${media.mobile`
    font-size: .7rem;
    padding: .2rem .6rem;
  `}
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: .5rem;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
    text-decoration: none;
  }
  
  ${media.mobile`
    font-size: .9rem;
  `}
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <ProjectImage>
        <img src={project.image} alt={project.title} />
      </ProjectImage>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <TechStack>
        {project.techStack.map((tech, index) => (
          <TechTag key={index}>{tech}</TechTag>
        ))}
      </TechStack>
      <ProjectLinks>
        {project.github && (
          <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </ProjectLink>
        )}
        {project.liveDemo && (
          <ProjectLink href={project.liveDemo} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </ProjectLink>
        )}
      </ProjectLinks>
    </Card>
  );
};

export default ProjectCard;
