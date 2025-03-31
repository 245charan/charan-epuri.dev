import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ResumeDownload from '../resume/ResumeDownload';
// import profilePicture from '../../assets/images/profilePicture.png';
import profilePicture from '../../assets/images/pencilSketchProfilePicture.png';
// import profilePicture from '../../assets/images/profilePicture.JPG';
import { media } from '../../styles/Responsive';

const ProfileCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 1rem;
	background: var(--card-background);
	flex-wrap: nowrap;
	border-radius: 1rem;
	justify-content: flex-start;
	overflow: hidden;
	padding: 1.875rem 1.25rem;
	position: relative;
	box-shadow: 0rem 0rem 1.25rem rgba(143, 143, 143, 0.2);
	// box-shadow: .5rem .25rem 1.25rem rgba(143, 143, 143, 0.2);

	${media.desktop`
		padding: 1.875rem 1.25rem;
	`}
`;

const ProfileImage = styled.div`
	box-shadow: 00rem 0rem 1rem 0rem #6565652b;
	max-width: 16.25rem;
	border-radius: 0.75rem;
	order: 0;
	width: 100%;
	overflow: hidden;
	margin-bottom: 1.5rem;
	position: relative;
	// border-radius: inherit;
	aspect-ratio: 4/5;
	
	img {
		width: 100%;
		height: 100%;
		object-position: top;
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
		${media.desktop`
			max-width: 10.25rem;
	`}
	`;
	
	const Name = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
	color: var(--text-color);

	${media.desktop`
		// font-size: 2.5rem;
	`}
`;

const Title = styled.p`
	font-size: 1rem;
	color: var(--text-secondary);
	margin-bottom: 0.5rem;

	${media.desktop`
		// font-size: 1.1rem;
	`}
`;

const Location = styled.p`
	font-size: 0.9rem;
	color: var(--text-secondary);
	margin-bottom: 1.5rem;

	${media.desktop`
		// font-size: 1rem;
	`}
`;

const SocialLinks = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: .5rem;
`;

const SocialIcon = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: .5rem;
	background-color: var(--background-color);
	color: var(--text-color);
	margin: 0 0.5rem;
	transition: all 0.3s ease;
	font-size: 1.2rem;

	&:hover {
		background-color: var(--primary-color);
		color: white;
		transform: translateY(-.25rem);
	}
`;

const CTAButton = styled.a`
	display: inline-block;
	padding: 0.75rem 2rem;
	background-color: var(--primary-color);
	color: white;
	border-radius: 3.125rem;
	font-weight: 600;
	transition: all 0.3s ease;
	text-decoration: none;
	margin-top: 1rem;

	&:hover {
		transform: translateY(-.25rem);
		box-shadow: 0 .25rem .9375rem rgba(138, 86, 255, 0.4);
		opacity: 0.9;
		text-decoration: none;
	}
	${media.desktop`
		box-shadow: 0 .25rem .9375rem rgba(138, 86, 255, 0.4);
	`}
`;

const Stats = styled.div`
	display: none;

	${media.desktop`
		display: flex;
		// justify-content: space-between;
		justify-content: center;
		width: 100%;
		margin-bottom: .75rem;
	`}
`;

const StatItem = styled.div`
	text-align: center;
`;

const StatNumber = styled.div`
	font-size: 2rem;
	font-weight: 700;
	color: var(--text-color);
`;

const StatLabel = styled.div`
	font-size: 0.75rem;
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
					alt='Charan Epuri'
				/>
			</ProfileImage>
			<Name>Charan Epuri</Name>
			<Title>Full Stack Java Developer</Title>
			<Location>New York, USA</Location>
			<SocialLinks>
				<SocialIcon
					href='https://github.com/245charan/'
					target='_blank'
					rel='noopener noreferrer'>
					<FaGithub />
				</SocialIcon>
				<SocialIcon
					href='https://www.linkedin.com/in/charan-epuri/'
					target='_blank'
					rel='noopener noreferrer'>
					<FaLinkedin />
				</SocialIcon>
				<SocialIcon href='mailto:charan.epuri1@marist.edu'>
					<FaEnvelope />
				</SocialIcon>
			</SocialLinks>
			<Stats>
				<StatItem>
					<StatNumber>+5</StatNumber>
					<StatLabel>Years of Experience</StatLabel>
				</StatItem>
				{/* <StatItem>
					<StatNumber>+12</StatNumber>
					<StatLabel>Projects Completed</StatLabel>
				</StatItem>
				<StatItem>
					<StatNumber>+7</StatNumber>
					<StatLabel>Happy Clients</StatLabel>
				</StatItem> */}
			</Stats>
			<CTAButton
				href='#contact'>
				Let's Talk
			</CTAButton>
			<ResumeDownload  />
		</ProfileCardContainer>
	);
};

export default ProfileCard;
