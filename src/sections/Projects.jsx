import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { FaProjectDiagram, FaThLarge, FaSlidersH } from 'react-icons/fa';
import ProjectGrid from '../components/projects/ProjectGrid';
import ProjectList from '../components/projects/ProjectList';
import { media } from '../styles/Responsive';
import marist from '../assets/images/projects/marist.webp';
import sakai from '../assets/images/projects/sakai.webp';
import treeData from '../assets/images/projects/TreeData.webp';
import rtsm from '../assets/images/projects/RTSM.webp';
import bny from '../assets/images/projects/bny.webp';
import posrg from '../assets/images/projects/posrg.webp';
import innova from '../assets/images/projects/innova.webp';
import medisys from '../assets/images/projects/medisys.webp';
import assumptions from '../assets/images/projects/assumptions.webp';
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
		category: 'CMS',
		features: [
			'Designed and developed a 150+ page digital education website.',
			'Built Liferay structures aligned with content requirements.',
			'Optimized SEO strategy and maintained high performance over time.',
			'Created web content with a focus on accessibility.',
			'Tested and ensured WCAG-compliant accessibility standards.',
			'Collaborated with faculty on Brightspace course setup and resolved support tickets.',
			'Managed LMS content, troubleshot issues, and reported bugs via Jira/TDX.',
			'Authored and maintained technical documentation for Sakai 23x.',
			'Supported Brightspace LMS workshops and training initiatives.',
			"Contributed to Sakai's open-source by resolving Jira bug #30.",
		],
		completionDate: 'Febuary 2024 - Present',
		client: 'Marist Univeristy',
		role: 'Digital Education LMS QAT',
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
		category: 'Open Source Software',
		features: [
			'Resolved front-end and back-end issues in Sakai LMS through open-source Jira bug contributions (#30 and more).',
			'Improved Sakai LMS performance and usability by actively contributing to community-supported fixes and updates.',
			'Documented technical workflows and deployment steps for Sakai 23x, supporting smoother version upgrades and developer onboarding.',
			'Collaborated with Sakai open-source community to test and validate patches before release.',
		],
		github: 'https://github.com/sakaiproject/sakai',
		personalProject: false,
		liveDemo: 'https://qa2-us.nightly.sakaiproject.org/',
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
		features: [
			'Built scalable SPAs/MPAs with React and micro-frontends, improving responsiveness and reducing latency by 25% using RESTful APIs.',
			'Cut development time by 30% with reusable React component libraries and optimized Redux state management (Thunk/Saga).',
			'Automated CI/CD via AWS CodeBuild/CodePipeline, slashing deployment time by 50% and errors by 40% using Jest/RTL.',
			'Architected AWS infrastructure (S3, EC2, Lambda, CloudFront), improving load times by 20% and enabling real-time monitoring with CloudWatch.',
			'Mentored 4+ juniors in React, Redux, and testing, boosting team velocity and code quality.',
			'Reduced package load time from 15 minutes to under 1 second.',
			'Achieved ~95% test coverage across all front-end applications.',
		],
		github: null,
		personalProject: false,
		liveDemo: null,
		completionDate: 'Sep 2021 - Aug 2023',
		client: 'BNY Mellon',
		role: 'Forntend Web Developer',
	},
	{
		id: 'tree-data-form-builder',
		title: 'Tree Data Form Builder App',
		display: true,
		description:
			'Highly customizable, admin-managed hierarchical data collection system with dynamic fields, reusable templates, and automated email workflows via Power Automate. Features extensive customization options, enabling role-based access (Admin/User), and leveraging adjacency list modeling for efficient tree data structure management.',
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
		completionDate: 'present',
		client: 'Self',
		role: 'Full Stack Developer',
		features: [
			'Developed a flexible, admin-driven interface for creating dynamic forms with customizable fields, sections, and templates.',
			'Implemented role-based access control (Admin/User), allowing granular management of form creation, data entry, and reporting.',
			'Integrated adjacency list modeling to efficiently handle hierarchical data, enabling nested, multi-level form submissions.',
			'Built a dynamic field management system, allowing admins to add/remove fields, set field types (e.g., text, dropdown, checkbox), and set dependencies based on user inputs.',
			'Developed reusable form templates, enabling admins to quickly replicate and modify existing form structures for various use cases.',
			'Automated workflow processes using Power Automate, enabling email notifications, form submissions, and approval flows based on data inputs.',
			'Created a user-friendly Admin dashboard to track form submissions, analyze collected data, and export reports in CSV format.',
			'Currently expanding features to include multi-step forms, advanced field validation, and integration with external databases via APIs.',
			'Optimizing user experience with responsive design, ensuring smooth usage on both desktop and mobile devices.',
			'Working on further customization for each admin’s specific needs, including custom branding and form styling options.',
		],
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
		completionDate: 'Sep 2024 - Dec 2024',
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
		category: 'CMS',
		features: [
			'Led end-to-end WordPress development from requirements gathering to deployment and long-term maintenance.',
			'Developed custom plugins and PHP scripts to handle dynamic filtering, role-based access, and AJAX-powered interactivity.',
			'Integrated Microsoft Dynamics CRM with WordPress for lead capture, contact sync, and workflow automation.',
			'Customized WordPress sites for improved UX and responsiveness using CPTs, ACF, and custom shortcodes.',
			'Enhanced performance using Query Monitor and Debug Bar, cutting query time and memory usage.',
			'Boosted site security and performance, reducing load times by 30% and increasing mobile engagement.',
			'Integrated WooCommerce, improving client sales by 20% and enabling rapid checkout experiences.',
			'Built full-stack web apps, managing Cloudways hosting, domain routing, SSL setup, and SEO optimization.',
			'Translated Figma designs into reusable, accessible UI components and shortcodes.',
			'Automated Git PR merges to enforce code standards and streamline team collaboration.',
			'Ran Google Lighthouse audits, consistently scoring 90+ in performance, accessibility, and SEO.',
		],
		github: null,
		liveDemo: 'https://posrg.com',
		personalProject: false,
		completionDate: 'Mar 2021 - Sep 2021',
		client: 'POSRG',
		role: 'Fullstack Web Developer',
	},
	{
		id: 'medisys-edutech',
		title: 'Medisys',
		display: true,
		description:
			'Optimized and deployed a WordPress-based digital education platform with significant performance improvements using advanced caching, server-level configuration, and frontend asset optimization. Delivered measurable speed gains and improved SEO readiness.',
		image: medisys,
		techStack: [
			'WordPress',
			'PHP',
			'Apache',
			'Linux VM',
			'CDN (Cloudflare)',
			'Google PageSpeed',
			'GTmetrix',
		],
		category: 'CMS',
		features: [
			'Improved site performance by 50% using advanced techniques like object caching, full page caching, and lazy loading of images.',
			'Configured CDN (Cloudflare) and enabled gzip compression, reducing overall payload and TTFB for global users.',
			'Minified CSS/JS, removed unused code, and deferred render-blocking assets to enhance Google PageSpeed and Core Web Vitals.',
			'Implemented server-side caching via `.htaccess` and PHP opcode caching to serve precompiled pages efficiently.',
			'Hosted the website on a remote virtual machine (Linux) with Apache web server and set up virtual hosting for clean domain mapping.',
			'Installed and configured an SSL certificate (Let’s Encrypt) to ensure HTTPS and SEO compliance.',
			'Fine-tuned database performance using WP-Optimize and reduced query load on high-traffic pages.',
			'Diagnosed and resolved slow-loading backend admin screens, improving editorial workflow speed.',
			'Regularly monitored uptime and performance via GTmetrix and Google PageSpeed Insights.',
		],
		github: null,
		liveDemo: 'https://medisysinc.com/',
		personalProject: false,
		completionDate: 'April 2022 - May 2022',
		client: 'Medisysi',
		role: 'WordPress Performance Engineer',
	},
	{
		id: 'innova-solutions',
		title: 'Innova Solutions Website',
		display: true,
		description:
			'Robust corporate website built with a focus on backend performance, scalable plugin architecture, and dynamic content management. Delivered advanced AJAX-based filtering, pagination, and reusable plugin modules to support multiple global case studies and insights pages.',
		image: innova,
		techStack: [
			'WordPress',
			'PHP',
			'Advanced Custom Fields (ACF)',
			'Custom Plugins',
			'JavaScript',
			'jQuery',
			'Ajax',
			'MySQL',
		],
		category: 'CMS',
		features: [
			'Engineered dynamic AJAX-powered pagination and filtering for case studies and insights archive, improving UX and reducing page reloads.',
			'Developed modular custom plugins with hooks, shortcodes, and admin settings to support scalable content blocks and reusable functionality.',
			'Built optimized MySQL queries and custom REST API endpoints to load high-volume case study data without performance lags.',
			'Created admin-friendly interfaces using ACF and custom metaboxes for content editors to manage regional, category-based, and tag-based content.',
			'Enabled smart caching using transients and object cache to reduce DB queries on repeat loads by over 40%.',
			'Automated sitemap and SEO schema injection for new post types using PHP filters, improving indexability and CTR.',
			'Implemented role-based access and permission control for different user levels in the WordPress admin.',
			'Improved overall security by sanitizing inputs, escaping outputs, and enforcing nonces in all forms and admin actions.',
			'Collaborated with the design team to align the custom plugin outputs with pixel-perfect UI based on Figma mockups.',
			'Handled production deployment, staging syncs, and post-launch optimizations including Google Lighthouse improvements.',
		],
		github: null,
		liveDemo: 'https://www.innovasolutions.com',
		personalProject: false,
		completionDate: 'Sep 2021 -  Aug 2023',
		client: 'Innova Solutions',
		role: 'Fullstack WordPress Developer',
	},
	{
		id: 'assumption-charity',
		title: 'Assumption Charity Website',
		display: true,
		description:
			'Enhanced the existing WordPress charity website with interactive features including a 3D animated book reader, dynamic newsletter signup, and new donor engagement pages. Focused on improving accessibility, engagement, and backend maintainability.',
		image: assumptions,
		techStack: [
			'WordPress',
			'PHP',
			'JavaScript',
			'jQuery',
			'CSS3',
			'GSAP / 3D Book Plugin',
			'Mailchimp / Newsletter Plugin',
		],
		category: 'CMS',
		features: [
			'Developed new "Newsletter" and "Get Involved" pages to drive engagement, donations, and subscriber growth.',
			'Integrated a custom 3D animated flipbook reader using GSAP and WebGL libraries for interactive religious and educational material.',
			'Implemented a timed homepage popup with custom cookies logic to display announcements without annoying frequent visitors.',
			'Built and styled custom newsletter signup forms with Mailchimp integration, improving subscription conversion by 25%.',
			'Created reusable Gutenberg blocks and shortcodes for editors to manage book embeds and newsletters easily.',
			'Ensured accessibility (WCAG) compliance for new pages and interactive elements including ARIA labels and keyboard navigation.',
			'Optimized assets and scripts to ensure fast load despite interactive elements, improving Core Web Vitals performance.',
			'Maintained existing WordPress theme and extended it with child theme features to preserve upgradability.',
			'Added backend form validation, anti-spam measures, and success modals using jQuery/AJAX and nonce verification.',
		],
		github: null,
		liveDemo: 'https://assumption.us',
		personalProject: false,
		completionDate: 'Feb 2025',
		client: 'Assumption Charity (US)',
		role: 'WordPress Developer',
	},
];

const ProjectsSection = styled.section`
	padding: 1rem 0;
	margin: 0 auto;
`;

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
	${media.xs`
			flex-direction: column;
			gap: 1.5rem;
	`}
`;
const ViewToggle = styled.div`
	display: flex;
	background-color: var(--card-background);
	border-radius: 0.5rem;
	padding: 0.25rem;
	z-index: 1;
	box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
`;
const ToggleButton = styled.button`
	background-color: ${({ $active }) =>
		$active ? 'var(--primary-color)' : 'transparent'};
	color: ${({ $active }) => ($active ? 'white' : 'var(--text-color)')};
	border: none;
	border-radius: ${({ $position }) =>
		$position === 'left' ? '4px 0 0 4px' : '0 4px 4px 0'};
	padding: 0.5rem 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.3s ease;
	font-weight: 600;

	svg {
		margin-right: 0.375rem;
	}

	&:hover {
		background-color: ${({ $active }) =>
			$active ? 'var(--primary-color)' : 'var(--background-hover)'};
	}
`;

const SectionTitle = styled.h2`
	font-size: 2rem;
	margin-bottom: 0.5rem;
	color: var(--text-color);
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
	svg {
		font-size: 1rem;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: -10px;
		left: 0;
		width: 10rem;
		height: 0.1875rem;
		background: linear-gradient(
			90deg,
			var(--primary-color) 0%,
			var(--card-background, #6d9fff) 100%
		);
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
				<SectionTitle tabIndex='0'>
					Projects{' '}
					<FaProjectDiagram
						aria-label='Project icon'
						title='Project icon'
					/>
				</SectionTitle>
				<ViewToggle id='project-toggle'>
					<ToggleButton
						$position='left'
						$active={viewMode === 'list'}
						onClick={() => setViewMode('list')}
						aria-label='List view'>
						<FaSlidersH size={18} /> Slider
					</ToggleButton>
					<ToggleButton
						$position='right'
						$active={viewMode === 'grid'}
						onClick={() => setViewMode('grid')}
						aria-label='Grid view'>
						<FaThLarge size={18} /> Grid
					</ToggleButton>
				</ViewToggle>
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
