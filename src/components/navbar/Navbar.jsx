import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
	FaGithub,
	FaLinkedin,
	FaHome,
	FaUser,
	FaCode,
	FaProjectDiagram,
	FaBriefcase,
	FaEnvelope,
	FaArrowUp,
} from 'react-icons/fa';
import { media } from '../../styles/Responsive';

const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${(props) => {
		if (props.isMobile) return '0 1rem';
		// if (props.isSticky) return '.25rem 1rem';
		return '.25rem 1rem';
	}};
	background-color: ${(props) => {
		if (props.isMobile) return 'var(--card-background)';
		// if (props.isSticky) return 'var(--card-background)';
		return 'var(--card-background)';
	}};
	border-radius: ${(props) =>
		props.isMobile
			? '0px 0px var(--border-radius) var(--border-radius)'
			: 'var(--border-radius)'};
	position: ${(props) => {
		if (props.isMobile) return 'sticky';
		if (props.isSticky) return 'fixed';
		return 'relative';
	}};
	top: ${(props) => {
		if (props.isMobile) return '0';
		if (props.isSticky) return '20px';
		return 'auto';
	}};
	z-index: 100;
	width: ${(props) => {
		if (props.isSticky) return '67%';
		return '100%';
	}};
	box-shadow: ${(props) => {
		if (props.isMobile) return 'var(--card-shadow)';
		// if (props.isSticky) return 'var(--card-shadow)';
		return '.5rem .25rem 1.25rem rgba(143, 143, 143, 0.2)';
	}};
	transition: all 0.3s ease;
	display: ${(props) => (props.isSticky && !props.showSticky ? 'none' : 'flex')};
	// opacity: ${(props) => (props.isSticky && !props.showSticky ? '0' : '1')};
	transform: ${(props) =>
		props.isSticky && !props.showSticky
			? 'translateY(-100%)'
			: 'translateY(0)'};
	pointer-events: ${(props) =>
		props.isSticky && !props.showSticky ? 'none' : 'auto'};
`;

const Logo = styled.div`
	font-weight: 900;
	font-size: 2.5rem;
	color: var(--primary-color);
	animation: pulse 3s ease-in-out infinite;
	cursor: pointer;

	&:hover {
		animation: dance 0.3s ease-in-out infinite alternate;
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
	}

	@keyframes dance {
		0% {
			transform: rotate(-7deg) scale(1.1);
		}
		100% {
			transform: rotate(7deg) scale(1.1);
		}
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
		border-radius: 0.625rem;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 0.0625rem;

		&:first-child {
			transform: ${({ isOpen }) =>
				isOpen ? 'rotate(45deg)' : 'rotate(0)'};
		}

		&:nth-child(2) {
			opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
			transform: ${({ isOpen }) =>
				isOpen ? 'translateX(1.25rem)' : 'translateX(0)'};
		}

		&:nth-child(3) {
			transform: ${({ isOpen }) =>
				isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
		}
	}
`;

const NavLinks = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
	justify-content: center;
	align-items: ${(props) => (props.isMobile ? '' : 'center')};
	position: ${(props) => (props.isMobile ? 'fixed' : 'relative')};
	top: ${(props) => (props.isMobile ? '0' : 'auto')};
	right: ${(props) => (props.isMobile ? '0' : 'auto')};
	height: ${(props) => (props.isMobile ? '100vh' : 'auto')};
	background-color: ${(props) =>
		props.isMobile ? 'var(--card-background)' : 'transparent'};
	transform: translateZ(0); /* Hardware acceleration */
	will-change: transform;
	transition: transform 0.3s ease-in-out;
	transform: ${({ isMobile, isOpen }) =>
		isMobile && !isOpen ? 'translateX(100%)' : 'translateX(0)'};
	box-shadow: ${(props) =>
		props.isMobile ? '-.3125rem 0 .9375rem rgba(0, 0, 0, 0.1)' : 'none'};
	z-index: 9;
	padding: ${(props) => (props.isMobile ? '5rem 2rem 2rem' : '0')};

	${media.mobile`
		width: 85%;
	`}
`;

const NavItem = styled.a`
	color: var(--text-color);
	list-style: none;
	text-decoration: none;
	padding: 0.5rem 1rem;
	margin: ${(props) => (props.isMobile ? '.5rem 0' : '0 .5rem')};
	font-weight: 500;
	position: relative;
	transition: color 0.3s ease;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	justify-content: center;
	transition: color 0.3s ease, transform 0.3s ease;
	height: 2.5rem; /* Set consistent height */
	transform: translateZ(0); /* Hardware acceleration */
	
	&:hover,
	&.active {
		color: var(--primary-color);
		text-decoration: none;
		> * {
			position: relative;
			opacity: 1;
			transform: translateY(0);
			transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
			pointer-events: auto;
		}
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		height: 0.125rem;
		background-color: var(--primary-color);
		transition: all 0.3s ease;
	}

	&:hover::after,
	&.active::after {
		width: 80%;
		transition: all 0.3s ease;
	}

	${media.mobile`
    font-size: 1.1rem;
    padding: .7rem 1rem;
  `}
`;

const NavIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.1rem;

	${media.mobile`
    font-size: 1.3rem;
  `}
`;

const NavLabel = styled.div`
	position: absolute;
	opacity: 0;
	transform: translateY(-0.625rem);
	pointer-events: none;
	white-space: nowrap;
`;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	display: ${({ isOpen, isMobile }) =>
		isOpen && isMobile ? 'block' : 'none'};
	z-index: 8;
`;

const SocialIcons = styled.div`
	display: flex;
	gap: 1.25rem;
	// margin-left: auto;
	// margin-right: 20px;

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
    margin: 0 .75rem;
  `}
`;

const ScrollToTopButton = styled.button`
	position: fixed;
	bottom: 6.25rem;
	right: 1.25rem;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	background-color: var(--primary-color);
	color: white;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.2);
	transition: all 0.3s ease;
	z-index: 99;
	opacity: ${(props) => (props.visible ? '1' : '0')};
	transform: ${(props) => (props.visible ? 'scale(1)' : 'scale(0.8)')};
	pointer-events: ${(props) => (props.visible ? 'auto' : 'none')};

	&:hover {
		transform: ${(props) => (props.visible ? 'scale(1.1)' : 'scale(0.8)')};
		box-shadow: 0 0.375rem 0.9375rem rgba(0, 0, 0, 0.25);
	}
`;

const Navbar = ({ isMobile }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeLink, setActiveLink] = useState('home');
	const [isSticky, setIsSticky] = useState(false);
	const [showSticky, setShowSticky] = useState(false);
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Show sticky nav when scrolled past 6.25rem
			if (window.scrollY > 100) {
				setIsSticky(true);
				setShowScrollTop(true);
			} else {
				setIsSticky(false);
				setShowScrollTop(false);
			}

			// Determine active section based on scroll position
			const sections = navItems.map((item) =>
				document.getElementById(item.id)
			);
			const scrollPosition = window.scrollY + 100;

			for (let i = sections.length - 1; i >= 0; i--) {
				if (sections[i] && sections[i].offsetTop <= scrollPosition) {
					setActiveLink(navItems[i].id);
					break;
				}
			}
		};

		// Handle mouse movement to show sticky nav
		const handleMouseMove = (e) => {
			if (isSticky && e.clientY < 60) {
				setShowSticky(true);
			} else if (isSticky && e.clientY > 150) {
				setShowSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [isSticky]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleLinkClick = (link) => {
		setActiveLink(link);
		if (isMobile) {
			setIsOpen(false);
		}

		// Smooth scroll to the section
		const section = document.getElementById(link);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const navItems = [
		{ id: 'home', label: 'Home', icon: <FaHome /> },
		{ id: 'about', label: 'About', icon: <FaUser /> },
		{ id: 'skills', label: 'Skills', icon: <FaCode /> },
		{ id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
		{ id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
		{ id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
	];

	return (
		<>
			{/* Main Navigation */}
			<NavContainer isMobile={isMobile}>
				<Logo>CE.</Logo>

				{!isMobile && (
					<>
						<NavLinks isMobile={isMobile}>
							{navItems.map((item) => (
								<NavItem
									title={item.label}
									key={item.id}
									href={`#${item.id}`}
									className={
										activeLink === item.id ? 'active' : ''
									}
									onClick={(e) => {
										e.preventDefault();
										handleLinkClick(item.id);
									}}
									isMobile={isMobile}>
									<NavIcon>{item.icon}</NavIcon>
									<NavLabel>{item.label}</NavLabel>
								</NavItem>
							))}
						</NavLinks>

						<SocialIcons>
							<SocialIcon
								href='https://github.com/245charan/'
								target='_blank'
								title='Github'
								aria-label='Github'
								rel='noopener noreferrer'>
								<FaGithub />
							</SocialIcon>
							<SocialIcon
								href='https://www.linkedin.com/in/charan-epuri/'
								target='_blank'
								aria-label='Linkedin'
								title='Linkedin'
								rel='noopener noreferrer'>
								<FaLinkedin />
							</SocialIcon>
						</SocialIcons>
					</>
				)}

				{isMobile && (
					<MenuToggle
						title='Menu'
						aria-label='Menu'
						isOpen={isOpen}
						onClick={toggleMenu}>
						<div />
						<div />
						<div />
					</MenuToggle>
				)}
			</NavContainer>

			{/* Sticky Navigation */}
			{!isMobile && (
				<NavContainer
					isSticky={true}
					showSticky={showSticky}>
					<Logo>CE.</Logo>
					<NavLinks isMobile={false}>
						{navItems.map((item) => (
							<NavItem
								title={item.label}
								key={`sticky-${item.id}`}
								href={`#${item.id}`}
								className={
									activeLink === item.id ? 'active' : ''
								}
								onClick={(e) => {
									e.preventDefault();
									handleLinkClick(item.id);
								}}
								isMobile={false}>
								<NavIcon>{item.icon}</NavIcon>
								<NavLabel>{item.label}</NavLabel>
							</NavItem>
						))}
					</NavLinks>

					<SocialIcons>
						<SocialIcon
							href='https://github.com/245charan/'
							target='_blank'
							title='Github'
							rel='noopener noreferrer'>
							<FaGithub />
						</SocialIcon>
						<SocialIcon
							href='https://www.linkedin.com/in/charan-epuri/'
							target='_blank'
							title='Linkedin'
							rel='noopener noreferrer'>
							<FaLinkedin />
						</SocialIcon>
					</SocialIcons>
				</NavContainer>
			)}

			{/* Mobile Menu */}
			{isMobile && (
				<>
					<Overlay
						isOpen={isOpen}
						isMobile={isMobile}
						onClick={toggleMenu}
					/>
					<NavLinks
						isMobile={isMobile}
						isOpen={isOpen}>
						{navItems.map((item) => (
							<NavItem
								title={item.label}
								key={item.id}
								href={`#${item.id}`}
								className={
									activeLink === item.id ? 'active' : ''
								}
								onClick={(e) => {
									e.preventDefault();
									handleLinkClick(item.id);
								}}
								isMobile={isMobile}>
								<NavIcon>{item.icon}</NavIcon>
								{item.label}
							</NavItem>
						))}

						<SocialIcons>
							<SocialIcon
								aria-label='github'
								title='Github'
								href='https://github.com/245charan/'
								target='_blank'
								rel='noopener noreferrer'>
								<FaGithub />
							</SocialIcon>
							<SocialIcon
								aria-label='linkedin'
								title='Linkedin'
								href='https://www.linkedin.com/in/charan-epuri/'
								target='_blank'
								rel='noopener noreferrer'>
								<FaLinkedin />
							</SocialIcon>
						</SocialIcons>
					</NavLinks>
				</>
			)}

			{/* Scroll to Top Button */}
			<ScrollToTopButton
				visible={showScrollTop}
				onClick={scrollToTop}
				aria-label='Scroll to top'
				title='Scroll to top'>
				<FaArrowUp />
			</ScrollToTopButton>
		</>
	);
};

export default Navbar;
