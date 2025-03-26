import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
  visibility: visible;
  animation: ${fadeOut} 0.5s ease-in-out forwards;
  animation-delay: 2.5s;
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(to right, ${'var(--primary-color)' ?? '#8a56ff'}, ${'var(--card-background)' || '#ff5656'});
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${pulse} 1.5s infinite ease-in-out;
  box-shadow: 0 0 30px rgba(138, 86, 255, 0.5);
`;

const InitialsText = styled.div`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: -1px;
`;

const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { currentTheme } = useSelector(state => state.theme);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3 seconds total (2.5s delay + 0.5s fade)
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <LoaderContainer>
      <LogoContainer>
        <InitialsText>CE</InitialsText>
      </LogoContainer>
    </LoaderContainer>
  );
};

export default PageLoader;
