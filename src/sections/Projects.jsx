import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { BsGrid, BsList } from 'react-icons/bs';
import ProjectGrid from '../components/projects/ProjectGrid';
import ProjectList from '../components/projects/ProjectList';
import { media } from '../styles/Responsive';
import marist from '../assets/images/projects/marist.webp';
import sakai from '../assets/images/projects/sakai.webp';
import treeData from '../assets/images/projects/TreeData.webp';
import rtsm from '../assets/images/projects/RTSM.webp';
import bny from '../assets/images/projects/bny.webp';
import posrg from '../assets/images/projects/posrg.webp';
import placeholder from '../assets/images/projects/placeholder-project.webp';

export const projectsData = [
	{
		id: 'marist-university',
		title: 'Marist University',
		display: true,
		description:
			"Key contributor to rebuilding the Marist College's website during its university transition, focusing on accessibility compliance and user experience improvements. Helped implement solutions that reduced page load times and boosted search rankings while maintaining brand standards.",
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
		personalProject: false,
		liveDemo: 'https://marist.edu',
		// category: 'CMS',
		completionDate: 'January 2024',
		client: 'Marist Univeristy',
		// role: 'Full Stack Developer',
	},
	{
		id: 'sakai-lms-enhancement',
		title: 'Sakai LMS Enhancement',
		display: true,
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
		personalProject: false,
		liveDemo: 'https://qa2-us.nightly.sakaiproject.org/',
	},
	{
		id: 'tree-data-form-builder',
		title: 'Tree Data Form Builder App',
		display: true,
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
		isGif: true,
		github: 'https://github.com/245charan/tree-data-form-builder',
		personalProject: true,
	},
	{
		id: 'real-time-stock-monitoring',
		title: 'Real-Time Stock Prices Monitoring',
		display: true,
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
		isGif: true,
		github: 'https://github.com/245charan/MSIS_570N_256_24F',
		personalProject: true,
		liveDemo: null,
	},
	{
		id: 'beverage-patashala',
		title: 'Beverage Patashala App',
		display: true,
		description:
			'Full-featured order management system where admins manage order queues for customers. Features include hosting, multi-layout support, authentication, lazy loading, responsive UI, and bulk orders/transfers. Implemented with Firebase Realtime Database for real-time updates.',
		image: placeholder,
		techStack: ['React', 'Redux', 'Bootstrap', 'Firebase', 'Webpack'],
		github: 'https://github.com/245charan/beverage-patashala',
		personalProject: true,
		liveDemo: 'https://beveragepatashala.web.app/',
	},
	{
		id: 'bny-mellon-fund-management',
		title: 'BNY Mellon Fund Management Application',
		display: true,
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
		personalProject: false,
		liveDemo: null,
	},
	{
		id: 'posrg-platform',
		title: 'POSRG Platform',
		display: true,
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
		// category: 'CMS',
		github: null,
		liveDemo: 'https://posrg.com',
		personalProject: false,
	},
];

const ProjectsSection = styled.section`
	padding: 1rem 0;
	// max-width: 1200px;
	margin: 0 auto;
`;

// Container for the toggle buttons
const ViewToggleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 0.5rem;
	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

// Style for each toggle button
const ToggleButton = styled.button`
	background-color: ${({$active}) =>
		$active ? 'var(--primary-color)' : 'transparent'};
	color: ${({$active}) => ($active ? 'white' : 'var(--text-color)')};
	border: 1px solid
		${({$active}) =>
			$active ? 'var(--primary-color)' : 'var(--border-color)'};
	border-radius: ${({$position}) =>
		$position === 'left' ? '4px 0 0 4px' : '0 4px 4px 0'};
	padding: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: ${({$active}) =>
			$active ? 'var(--primary-color)' : 'var(--background-hover)'};
	}
`;

const SectionTitle = styled.h2`
	font-size: 2rem;
	margin-bottom: 0.5rem;
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

const Projects = () => {
	const [viewMode, setViewMode] = useState('list'); // 'grid' or 'list'

	const projects = useMemo(() => projectsData, []);

	return (
		<ProjectsSection>
			<ViewToggleContainer>
				<SectionTitle>Projects</SectionTitle>
				<div>
					<ToggleButton
						$position='left'
						$active={viewMode === 'list'}
						onClick={() => setViewMode('list')}
						aria-label='List view'>
						<BsList size={18} />
					</ToggleButton>
					<ToggleButton
						$position='right'
						$active={viewMode === 'grid'}
						onClick={() => setViewMode('grid')}
						aria-label='Grid view'>
						<BsGrid size={18} />
					</ToggleButton>
				</div>
			</ViewToggleContainer>
			{viewMode === 'grid' ? (
				<ProjectGrid
					projects={projects}
					initialCount={3}
				/>
			) : (
				<ProjectList projects={projects} />
			)}
		</ProjectsSection>
	);
};

export default Projects;
