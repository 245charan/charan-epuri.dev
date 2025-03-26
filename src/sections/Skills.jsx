import React from 'react';
import styled from 'styled-components';
import { FaJava, FaReact, FaNodeJs, FaDatabase, FaWordpress, FaDocker, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiMongodb, SiRedux, SiJest, SiJenkins, SiKubernetes, SiTypescript } from 'react-icons/si';
import { media } from '../styles/Responsive';

const SkillsContainer = styled.div`
  margin-bottom: 2rem;
`;

const SkillsTitle = styled.h2`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
  
  ${media.tablet`
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1.25rem;
  `}
  
  ${media.desktop`
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1.5rem;
  `}
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.25rem 0.75rem;
  background-color: var(--card-background);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  ${media.mobile`
    padding: 1rem 0.5rem;
  `}
  
  ${media.desktop`
    padding: 1.5rem 1rem;
  `}
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
  
  ${media.mobile`
    font-size: 1.75rem;
  `}
  
  ${media.desktop`
    font-size: 2.5rem;
    margin-bottom: 1rem;
  `}
`;

const SkillName = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-color);
  
  ${media.mobile`
    font-size: 0.8rem;
  `}
  
  ${media.desktop`
    font-size: 1rem;
  `}
`;

const SkillsSection = () => {
  const skills = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'Spring Boot', icon: <SiSpringboot /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'WordPress', icon: <FaWordpress /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Kubernetes', icon: <SiKubernetes /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Jenkins', icon: <SiJenkins /> },
    { name: 'Jest', icon: <SiJest /> },
    { name: 'Databases', icon: <FaDatabase /> },
  ];

  return (
    <SkillsContainer id="skills">
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillItem>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default SkillsSection;
