import React from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const ExperienceContainer = styled.div`
  margin-bottom: 3rem;
`;

const ExperienceTitle = styled.h2`
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
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    background-color: var(--primary-color);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1.5px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${props => props.position === 'right' ? '50%' : '0'};
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }
`;

const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: var(--card-background);
  position: relative;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  top: 15px;
  right: ${props => props.position === 'left' ? '-20px' : 'auto'};
  left: ${props => props.position === 'right' ? '-20px' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
  
  @media (max-width: 768px) {
    left: 10px;
    right: auto;
  }
`;

const TimelineDate = styled.div`
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const TimelineSubtitle = styled.h4`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-weight: 500;
`;

const TimelineDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 0;
`;

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      date: '2022 - Present',
      description: 'Led development of enterprise-level applications using Java Spring Boot and React. Implemented microservices architecture and containerized applications with Docker and Kubernetes. Mentored junior developers and conducted code reviews.',
      type: 'work'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      date: '2019 - 2022',
      description: 'Developed and maintained web applications using Java, Spring Boot, and React. Implemented RESTful APIs and integrated with third-party services. Collaborated with UX/UI designers to implement responsive designs.',
      type: 'work'
    },
    {
      title: 'WordPress Developer',
      company: 'Creative Agency',
      date: '2017 - 2019',
      description: 'Designed and developed custom WordPress themes and plugins. Created custom post types and taxonomies. Implemented e-commerce solutions using WooCommerce. Optimized website performance and SEO.',
      type: 'work'
    },
    {
      title: 'Junior Web Developer',
      company: 'Startup Hub',
      date: '2015 - 2017',
      description: 'Assisted in developing web applications using PHP and JavaScript. Maintained and updated existing websites. Collaborated with the design team to implement responsive layouts.',
      type: 'work'
    },
    {
      title: 'Master of Computer Science',
      company: 'University of Technology',
      date: '2013 - 2015',
      description: 'Specialized in Software Engineering and Web Technologies. Completed thesis on "Optimizing Performance in Modern Web Applications". Participated in various hackathons and coding competitions.',
      type: 'education'
    },
    {
      title: 'Bachelor of Computer Science',
      company: 'State University',
      date: '2009 - 2013',
      description: 'Graduated with honors. Coursework included Data Structures, Algorithms, Database Systems, and Web Development. Participated in student coding club and developed several projects.',
      type: 'education'
    }
  ];

  return (
    <ExperienceContainer id="experience">
      <ExperienceTitle>Experience</ExperienceTitle>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem 
            key={index} 
            position={index % 2 === 0 ? 'left' : 'right'}
          >
            <TimelineContent>
              <TimelineDate>{exp.date}</TimelineDate>
              <TimelineTitle>{exp.title}</TimelineTitle>
              <TimelineSubtitle>{exp.company}</TimelineSubtitle>
              <TimelineDescription>{exp.description}</TimelineDescription>
            </TimelineContent>
            <TimelineIcon position={index % 2 === 0 ? 'left' : 'right'}>
              {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
            </TimelineIcon>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience;
