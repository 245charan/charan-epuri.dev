import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ResumeDownload from '../resume/ResumeDownload';
import profilePicture from '../../assets/images/profilePicture.png';

const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background: var(--card-background);
  flex-wrap: nowrap;
  border-radius: 16px;
  justify-content: flex-start;
  overflow: hidden;
  padding: 30px 20px;
  position: relative;
  
  @media (min-width: 992px) {
    padding: 30px 20px;
  }
`;

const ProfileImage = styled.div`
box-shadow: 0px 0px 12px 0px #65656566;
  height: 300px;
  max-width: 260px;
  border-radius: 12px;
  order: 0;
  width: 100%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  position: relative;
  border-radius: inherit;
  object-position: center center;
  object-fit: cover;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  
  @media (min-width: 992px) {
    width: 260px;
    height: 300px;
  }
`;

const Name = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  
  @media (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  
  @media (min-width: 992px) {
    font-size: 1.1rem;
  }
`;

const Location = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  
  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: var(--background-color);
  color: var(--text-color);
  margin: 0 0.5rem;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(138, 86, 255, 0.4);
    opacity: 0.9;
  }
`;

const Stats = styled.div`
  display: none;
  
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-color);
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <ProfileImage>
        <img
          src={profilePicture}
          alt="Charan Epuri"
        />
      </ProfileImage>
      <Name>Charan Epuri</Name>
      <Title>Full Stack Java Developer</Title>
      <Location>New York, USA</Location>
      <SocialLinks>
        <SocialIcon
          href="https://github.com/245charan/"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/charan-epuri/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="mailto:contact@example.com">
          <FaEnvelope />
        </SocialIcon>
      </SocialLinks>
      <Stats>
        <StatItem>
          <StatNumber>+5</StatNumber>
          <StatLabel>Years of Experience</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>+12</StatNumber>
          <StatLabel>Projects Completed</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>+7</StatNumber>
          <StatLabel>Happy Clients</StatLabel>
        </StatItem>
      </Stats>
      <CTAButton href="#contact">Let's Talk</CTAButton>
      <ResumeDownload />
    </ProfileCardContainer>
  );
};

export default ProfileCard;
