import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/Responsive';

const HeroContainer = styled.div`
  margin-bottom: 3rem;
  padding: 2rem 0;
`;

const HeroContent = styled.div`
  text-align: left;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
  
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.8;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 3.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-.1875rem);
    box-shadow: 0 .25rem .9375rem rgba(138, 86, 255, 0.4);
    text-decoration: none;
    color: white;
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: transparent;
  color: var(--text-color);
  border: .125rem solid var(--primary-color);
  border-radius: 3.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-.1875rem);
    text-decoration: none;
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroTitle>
          Full Stack <span>Java</span> Developer with <span>React.Js</span> & <span>WordPress</span> Expertise
        </HeroTitle>
        <HeroSubtitle>
          I design and develop scalable web applications with modern technologies, 
          focusing on clean code, performance, and exceptional user experiences.
        </HeroSubtitle>
        <HeroButtons>
          <PrimaryButton href="#projects">View Projects</PrimaryButton>
          <SecondaryButton href="#contact">Contact Me</SecondaryButton>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
