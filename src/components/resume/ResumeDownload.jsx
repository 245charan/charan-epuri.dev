import React from 'react';
import styled from 'styled-components';
import { FaDownload } from 'react-icons/fa';
// import charanResume from '../../assets/resume/charanResume.pdf'

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(138, 86, 255, 0.4);
    text-decoration: none;
    color: white;
  }
`;

const ResumeDownload = () => {
  return (
    <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      <FaDownload /> Download Resume
    </ResumeButton>
  );
};

export default ResumeDownload;
