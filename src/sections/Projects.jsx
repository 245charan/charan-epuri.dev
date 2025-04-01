import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/projects/ProjectCard';
import { media } from '../styles/Responsive';
import marist from '../assets/images/projects/marist.webp';
import sakai from '../assets/images/projects/sakai.webp';
import treeData from '../assets/images/projects/TreeData.webp';
import rtsm from '../assets/images/projects/RTSM.webp';
import bny from '../assets/images/projects/bny.webp';
import posrg from '../assets/images/projects/posrg.webp';
import placeholder from '../assets/images/projects/placeholder-project.webp';

const ProjectsContainer = styled.div`
	margin-bottom: 3rem;
`;

const ProjectsTitle = styled.h2`
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

	${media.mobile`
    font-size: 1.75rem;
  `}
`;

const ProjectsGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}

	${media.desktop`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

const Projects = () => {
	const projects = [
		{
			title: 'Marist University',
			description:
				"Key contributor to rebuilding the Marist College's website during its university transition, focusing on accessibility compliance and user experience improvements. Helped implement solutions that reduced page load times and boosted search rankings while maintaining brand standards.",
			// description: 'Built Marist University\'s flagship website in Liferay with micro-frontend architecture, combining CSS3/Bootstrap templates with Java backend services. Achieved perfect accessibility compliance, 50% faster page loads, and 30% SEO improvement through structured data implementation.',
			image: marist,
			techStack: [
				'Liferay',
				'Accessibility',
				'WCAG ',
				'SEO',
				'Template Designing',
				'CSS3',
				'Bootstrap',
				'Java',
				'Spring Boot',
			],
			// github: 'https://github.com/245charan/tree-data-form-builder',
			liveDemo: 'https://marist.edu',
		},
		{
			title: 'Sakai LMS Enhancement',
			description:
				'Contributed to the Sakai LMS open-source project by resolving bugs and enhancing accessibility through component-based modernization. Conducted comprehensive testing including unit, integration, and user acceptance testing (UAT), documenting defects in JIRA with detailed reproduction workflows. Rebuilt legacy pages using component-driven design.',
			image: sakai,
			techStack: [
				'Tailwind',
				'Accessibility',
				'WCAG',
				'Bug Fix',
				'UI modernization',
				'Jira',
			],
			github: 'https://github.com/sakaiproject/sakai',
			liveDemo: 'https://qa2-us.nightly.sakaiproject.org/',
		},
		{
			title: 'Tree Data Form Builder App',
			description:
				'Admin-managed hierarchical data collection system with role-based access (Admin/User), dynamic fields, reusable templates, and automated email workflows via Power Automate. Implemented using adjacency list modeling for efficient tree data structure.',
			image: treeData,
			techStack: [
				'React',
				'Redux',
				'Bootstrap',
				'Formik',
				'Spring Boot',
				'Power Automate',
			],
			github: 'https://github.com/245charan/tree-data-form-builder',
			// liveDemo: 'https://github.com/245charan/tree-data-form-builder'
		},
		{
			title: 'Real-Time Stock Prices Monitoring',
			description:
				'Web application for real-time stock price tracking, trend prediction, and customizable watchlists with price-threshold alerts via Telegram and WebSocket notifications. Implemented using Django Channels for WebSockets and Celery for background tasks.',
			image: rtsm,
			techStack: [
				'Django',
				'Django Channels',
				'Celery',
				'Redis',
				'Python',
				'Telegram API',
				'yFinance API',
			],
			github: 'https://github.com/245charan/MSIS_570N_256_24F',
			liveDemo: null,
		},
		{
			title: 'Beverage Patashala App',
			description:
				'Full-featured order management system where admins manage order queues for customers. Features include hosting, multi-layout support, authentication, lazy loading, responsive UI, and bulk orders/transfers. Implemented with Firebase Realtime Database for real-time updates.',
			image: placeholder,
			techStack: ['React', 'Redux', 'Bootstrap', 'Firebase', 'Webpack'],
			github: 'https://github.com/245charan/beverage-patashala',
			liveDemo: 'https://beveragepatashala.web.app/',
		},
		{
			title: 'BNY Mellon Fund Management Application',
			description:
				'Enterprise-level fund management and accounting application built with micro-frontend architecture. Reduced package load time from 15 minutes to <1 second and achieved ~95% test coverage. Implemented CI/CD pipelines using AWS services, reducing deployment time by 50%.',
			image: bny,
			techStack: [
				'React',
				'Redux',
				'Micro-Frontend',
				'Styled-components',
				'Java ',
				'Spring Boot',
				'Junit',
				'Maven',
				'AWS',
				'Jest',
				'RTL',
			],
			github: null,
			liveDemo: null,
		},
		{
			title: 'POSRG E-commerce Platform',
			description:
				'Complete web application developed independently from setting up Cloudways hosting to configuring domains and optimizing SEO visibility. Implemented custom UI components and shortcodes based on Figma designs. Achieved 90+ scores in Google Lighthouse for performance, accessibility, and SEO.',
			image: posrg,
			techStack: [
				'WordPress',
				'Custom Theme',
				'Custom Post Types',
				'PHP',
				'JavaScript',
				'Elementor',
			],
			github: null,
			liveDemo: 'https://posrg.com',
		},
	];

	return (
		<ProjectsContainer id='projects'>
			<ProjectsTitle>Projects</ProjectsTitle>
			<ProjectsGrid>
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
					/>
				))}
			</ProjectsGrid>
		</ProjectsContainer>
	);
};

export default Projects;
