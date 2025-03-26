import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { media } from '../../styles/Responsive';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.isMobile ? '1rem' : '1.5rem 0'};
  // background-color: var(--card-background);
  background-color: ${props => props.isMobile ? 'var(--card-background)' : 'transparent'};
  border-radius: ${props => props.isMobile ? '0px 0px var(--border-radius) var(--border-radius)' : 'var(--border-radius)'};
  position: ${props => props.isMobile ? 'sticky' : 'relative'};
  top: ${props => props.isMobile ? '0' : 'auto'};
  z-index: 100;
  width: 100%;
  box-shadow: ${props => props.isMobile ? 'var(--card-shadow)' : 'none'};
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--primary-color);
  animation: pulse 3s ease-in-out infinite;
  cursor: pointer;
  
  &:hover {
    animation: dance 0.3s ease-in-out infinite alternate;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  @keyframes dance {
    0% { transform: rotate(-7deg) scale(1.1); }
    100% { transform: rotate(7deg) scale(1.1); }
  }
`;


const MenuToggle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--text-color);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    
    &:first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    
    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const NavLinks = styled.div`
  display: ${props => props.isMobile ? 'flex' : 'flex'};
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
  position: ${props => props.isMobile ? 'fixed' : 'relative'};
  top: ${props => props.isMobile ? '0' : 'auto'};
  right: ${props => props.isMobile ? '0' : 'auto'};
  height: ${props => props.isMobile ? '100vh' : 'auto'};
  width: ${props => props.isMobile ? '70%' : 'auto'};
  background-color: ${props => props.isMobile ? 'var(--card-background)' : 'transparent'};
  transition: transform 0.3s ease-in-out;
  transform: ${({ isMobile, isOpen }) => 
    isMobile && !isOpen ? 'translateX(100%)' : 'translateX(0)'};
  box-shadow: ${props => props.isMobile ? '-5px 0 15px rgba(0, 0, 0, 0.1)' : 'none'};
  z-index: 9;
  padding: ${props => props.isMobile ? '5rem 2rem 2rem' : '0'};
  
  ${media.mobile`
    width: 85%;
  `}
`;

const NavItem = styled.li`
  color: var(--text-color);
  list-style:none;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: ${props => props.isMobile ? '0.5rem 0' : '0 0.5rem'};
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover, &.active {
    color: var(--primary-color);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover::after, &.active::after {
    width: 80%;
  }
  
  ${media.mobile`
    font-size: 1.1rem;
    padding: 0.7rem 1rem;
  `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${({ isOpen, isMobile }) => (isOpen && isMobile) ? 'block' : 'none'};
  z-index: 8;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
  margin-right: 20px;
  
  ${media.mobile`
    margin-top: 1.5rem;
    justify-content: center;
  `}
`;

const SocialIcon = styled.a`
  color: var(--text-color);
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
  
  ${media.mobile`
    font-size: 1.5rem;
    margin: 0 0.75rem;
  `}
`;

const Navbar = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isMobile) {
      setIsOpen(false);
    }
  };
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];
  
  return (
    <>
      <NavContainer isMobile={isMobile}>
        <Logo>CharanEpuri.dev</Logo>
        
        {!isMobile && (
          <>
            <NavLinks isMobile={isMobile}>
              {navItems.map(item => (
                <NavItem
                  key={item.id}
                  href={`#${item.id}`}
                  className={activeLink === item.id ? 'active' : ''}
                  onClick={() => handleLinkClick(item.id)}
                  isMobile={isMobile}
                >
                  {item.label}
                </NavItem>
              ))}
            </NavLinks>
            
            <SocialIcons>
              <SocialIcon 
                href="https://github.com/245charan/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
              </SocialIcon>
              <SocialIcon 
                href="https://www.linkedin.com/in/charan-epuri/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </SocialIcon>
            </SocialIcons>
          </>
        )}
        
        {isMobile && (
          <MenuToggle isOpen={isOpen} onClick={toggleMenu}>
            <div />
            <div />
            <div />
          </MenuToggle>
        )}
      </NavContainer>
      
      {isMobile && (
        <>
          <Overlay isOpen={isOpen} isMobile={isMobile} onClick={toggleMenu} />
          <NavLinks isMobile={isMobile} isOpen={isOpen}>
            {navItems.map(item => (
              <NavItem
                key={item.id}
                href={`#${item.id}`}
                className={activeLink === item.id ? 'active' : ''}
                onClick={() => handleLinkClick(item.id)}
                isMobile={isMobile}
              >
                {item.label}
              </NavItem>
            ))}
            
            <SocialIcons>
              <SocialIcon 
                href="https://github.com/245charan/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
              </SocialIcon>
              <SocialIcon 
                href="https://www.linkedin.com/in/charan-epuri/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </SocialIcon>
            </SocialIcons>
          </NavLinks>
        </>
      )}
    </>
  );
};

export default Navbar;
