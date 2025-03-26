import React from 'react';
import styled from 'styled-components';
import { FaCode, FaServer, FaDatabase, FaMobileAlt } from 'react-icons/fa';

const AboutContainer = styled.div`
  margin-bottom: 3rem;
`;

const AboutTitle = styled.h2`
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutText = styled.div`
  color: var(--text-color);
  
  p {
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
    line-height: 1.8;
  }
`;

const AboutServices = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceCard = styled.div`
  background-color: var(--card-background);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: white;
  font-size: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 0;
`;

const About = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using React, Redux, and modern CSS frameworks.',
      icon: <FaCode />
    },
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications with Java Spring Boot, RESTful APIs, and microservices.',
      icon: <FaServer />
    },
    {
      title: 'Database Design',
      description: 'Designing and optimizing databases using MySQL, MongoDB, and implementing efficient data access patterns.',
      icon: <FaDatabase />
    },
    {
      title: 'WordPress Development',
      description: 'Creating custom WordPress themes, plugins, and integrating with various APIs and services.',
      icon: <FaMobileAlt />
    }
  ];

  return (
    <AboutContainer id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        <AboutText>
          <p>
            I'm a passionate Full Stack Java Developer with over 5 years of experience in building web applications and services. My expertise spans across the entire development stack, from creating engaging user interfaces with React to developing robust backend systems with Java Spring Boot.
          </p>
          <p>
            Throughout my career, I've worked on a variety of projects ranging from e-commerce platforms to content management systems and enterprise applications. I'm particularly interested in creating scalable, maintainable, and high-performance applications that provide exceptional user experiences.
          </p>
          <p>
            I'm constantly learning and staying up-to-date with the latest technologies and best practices in software development. I believe in writing clean, well-documented code and following agile methodologies to deliver high-quality software on time.
          </p>
        </AboutText>
        <AboutServices>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </AboutServices>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
