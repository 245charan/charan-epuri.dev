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
		bottom: -0.625rem;
		left: 0;
		width: 3.125rem;
		height: 0.1875rem;
		background-color: var(--primary-color);
	}
`;

const AboutContent = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	@media (min-width: 48rem) {
		grid-template-columns: 1fr;
	}
`;

const AboutText = styled.div`
	color: var(--text-color);

	ul li {
		margin-bottom: 1.5rem;
		color: var(--text-secondary);
		line-height: 1.8;
		font-size: 1.15rem;
		// list-style: none;
	}
`;

const AboutServices = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;

	@media (min-width: 36rem) {
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
		transform: translateY(-0.3125rem);
		box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.2);
	}
`;
const HeroTitle = styled.h2`
	font-size: 3rem;
	font-weight: 700;
	margin-top: 1rem;
	color: var(--text-color);

	span {
		color: var(--primary-color);
	}

	@media (min-width: 48rem) {
		font-size: 4rem;
	}
`;
const ServiceIcon = styled.div`
	width: 3.125rem;
	height: 3.125rem;
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
			description:
				'Creating responsive and interactive user interfaces using React, Redux, and modern CSS frameworks.',
			icon: <FaCode />,
		},
		{
			title: 'WordPress Development',
			description:
				'Creating custom WordPress themes, plugins, and integrating with various APIs and services.',
			icon: <FaMobileAlt />,
		},
		{
			title: 'Backend Development',
			description:
				'Building robust server-side applications with Java, Spring Boot, RESTful APIs, and microservices.',
			icon: <FaServer />,
		},
		// {
		// 	title: 'Database Design',
		// 	description:
		// 		'Designing and optimizing databases using MySQL, MongoDB, and implementing efficient data access patterns.',
		// 	icon: <FaDatabase />,
		// },
	];

	return (
		<AboutContainer id='about'>
			<AboutTitle>About Me</AboutTitle>
			<AboutContent>
				<AboutText>
					<ul>
						<li>
							<strong>Frontend-Leaning Full Stack Dev</strong>
							(React + Java Spring Boot)
						</li>
						<li>
							<strong>5+ years</strong> building financial platforms, CMS tools & enterprise apps
						</li>
						<li>
							Obsessed with <strong>scalable architecture</strong> and <strong>UI performance</strong>
						</li>
					</ul>
				</AboutText>
				<AboutServices>
					<HeroTitle>
						What I <span>Bring</span> to the Table
					</HeroTitle>
					{services.map((service, index) => (
						<ServiceCard key={index}>
							<ServiceIcon>{service.icon}</ServiceIcon>
							<ServiceTitle>{service.title}</ServiceTitle>
							<ServiceDescription>
								{service.description}
							</ServiceDescription>
						</ServiceCard>
					))}
				</AboutServices>
			</AboutContent>
		</AboutContainer>
	);
};

export default About;
