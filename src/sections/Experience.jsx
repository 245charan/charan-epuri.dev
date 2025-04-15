import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import {
	FaBriefcase,
	FaGraduationCap,
	FaChevronDown,
	FaChevronUp,
	FaThLarge,
	FaStream,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { media } from '../styles/Responsive';

const ExperienceContainer = styled.div`
	// margin: 0 auto 4rem;
	margin: 0 auto;
	// max-width: 75rem;
	// padding: 0 1.25rem;
	padding: 1rem 0;
`;

const ExperienceHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-align: center;
	margin-bottom: 0.5rem;
`;

const ExperienceTitle = styled.h2`
	font-size: 2.5rem;
	margin-bottom: 1rem;
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
		bottom: -5px;
		left: 0;
		width: 10rem;
		height: 0.1875rem;
		background: linear-gradient(
			90deg,
			var(--primary-color) 0%,
			var(--card-background, #6d9fff) 100%
		);
		border-radius: 0.125rem;
	}
`;

const ExperienceSubtitle = styled.p`
	color: var(--text-secondary);
	font-size: 1.1rem;
	max-width: 37.5rem;
	margin: 0 auto;
`;

const ControlsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	flex-wrap: wrap;
	gap: 1.25rem;

	@media (max-width: 48rem) {
		flex-direction: column;
		align-items: center;
	}
`;

const FilterContainer = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	psotion: relative;
	z-index: 1;

	@media (max-width: 48rem) {
		justify-content: center;
	}
`;

const ViewToggle = styled.div`
	display: flex;
	z-index: 1;
	background-color: var(--card-background);
	border-radius: 0.5rem;
	padding: 0.25rem;
	box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
`;

const ToggleButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem 1rem;
	background-color: ${(props) =>
		props.$active ? 'var(--primary-color)' : 'transparent'};
	color: ${(props) => (props.$active ? 'white' : 'var(--text-color)')};
	border: none;
	border-radius: ${({ $position }) =>
		$position === 'left' ? '4px 0 0 4px' : '0 4px 4px 0'};
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;

	svg {
		margin-right: 0.375rem;
	}

	&:hover {
		background-color: ${(props) =>
			props.$active
				? 'var(--primary-color)'
				: 'rgba(var(--primary-color-rgb), 0.1)'};
	}
`;

const FilterButton = styled.button`
	padding: 0.5rem 1rem;
	background-color: ${(props) =>
		props.$active ? 'var(--primary-color)' : 'var(--card-background)'};
	color: ${(props) => (props.$active ? 'white' : 'var(--text-color)')};
	border: 0.125rem solid var(--primary-color);
	border-radius: 1.875rem;
	font-weight: 600;
	cursor: pointer;
	// z-index: 1;
	transition: all 0.2s ease;

	&:hover {
		background-color: ${(props) =>
			props.$active
				? 'var(--primary-color)'
				: 'rgba(var(--primary-color-rgb), 0.1)'};
	}
`;

// Grid Layout Components
const GridContainer = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(21.875rem, 1fr));
	gap: 1.875rem;

	@media (max-width: 48rem) {
		grid-template-columns: 1fr;
	}
`;

const GridCard = styled.div`
	background-color: var(--card-background);
	border-radius: 0.75rem;
	box-shadow: var(--card-shadow);
	overflow: hidden;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	z-index: 1;

	&:hover {
		transform: translateY(-0.3125rem);
		box-shadow: 0 0.625rem 1.25rem rgba(0, 0, 0, 0.12);
	}
`;

const CardHeader = styled.div`
	padding: 1.25rem;
	cursor: pointer;
	border-bottom: ${({ $isExpanded }) =>
		$isExpanded ? '.0625rem solid rgba(0,0,0,0.1)' : 'none'};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const CardHeaderContent = styled.div`
	flex: 1;
`;

const CardType = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 0.625rem;
	font-size: 0.875rem;
	color: var(--primary-color);
	font-weight: 600;

	svg {
		margin-right: 0.5rem;
		font-size: 1rem;
	}
`;

const CardDate = styled.div`
	color: var(--text-secondary);
	font-size: 0.875rem;
	margin-bottom: 0.75rem;
	display: flex;
	align-items: center;

	&::before {
		content: '';
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		background-color: var(--primary-color);
		margin-right: 0.5rem;
	}
`;

const CardTitle = styled.h3`
	font-size: 1.125rem;
	font-weight: 600;
	margin: 0 0 0.3125rem 0;
	color: var(--text-color);
`;

const CardSubtitle = styled.h4`
	font-size: 1rem;
	color: var(--text-secondary);
	margin: 0;
	font-weight: 500;
`;

const ExpandButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	background-color: var(--card-background);
	color: var(--primary-color);
	border: 0.125rem solid var(--primary-color);
	cursor: pointer;
	margin-left: 1rem;
	transition: all 0.2s ease;

	&:hover {
		background-color: var(--primary-color);
		color: white;
	}

	svg {
		font-size: 0.875rem;
	}
`;

const CardContent = styled(motion.div)`
	padding: 0 1.25rem;
	overflow: hidden;
`;

const CardDescription = styled.p`
	color: var(--text-secondary);
	font-size: 0.9375rem;
	line-height: 1.6;
	padding-bottom: 1.25rem;
`;

const BadgeContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-top: 0.75rem;
`;

const Badge = styled.span`
	padding: 0.25rem 0.5rem;
	background-color: rgba(var(--primary-color-rgb), 0.1);
	color: var(--primary-color);
	border-radius: 0.75rem;
	font-size: 0.75rem;
	font-weight: 500;
`;

const NoResults = styled.div`
	text-align: center;
	padding: 2.5rem;
	color: var(--text-secondary);
	grid-column: 1 / -1;
`;

// Improved Timeline Layout Components
const TimelineContainer = styled(motion.div)`
	position: relative;
	max-width: 56.25rem;
	margin: 0 auto;
`;

const TimelineYearSection = styled.div`
	margin-bottom: 1rem;
	position: relative;
`;

const YearLabel = styled.div`
	font-size: 1.125rem;
	font-weight: 700;
	color: var(--primary-color);
	padding: 0.5rem 1rem;
	background-color: var(--card-background);
	border-radius: 1.25rem;
	display: inline-block;
	margin-bottom: 0.5rem;
	box-shadow: var(--card-shadow);
	position: relative;
	z-index: 2;
`;

const TimelineLine = styled.div`
	position: absolute;
	width: 0.25rem;
	background-color: var(--primary-color);
	top: 2.5rem;
	bottom: 0;
	left: 0.75rem;
	border-radius: 0.125rem;
	z-index: 1;
	opacity: 0.4;

	@media (max-width: 48rem) {
		left: 0.75rem;
	}
`;

const TimelineItems = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	gap: 1.25rem;
`;

const TimelineItem = styled.div`
	position: relative;
	padding-left: 3.125rem;
	margin-left: 0;

	@media (max-width: 48rem) {
		padding-left: 3.125rem;
	}
`;

const TimelineIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	background-color: var(--primary-color);
	color: white;
	font-size: 1rem;
	position: absolute;
	left: -0.3125rem;
	top: 0.625rem;
	z-index: 2;
	box-shadow: 0 0.1875rem 0.625rem rgba(var(--primary-color-rgb), 0.3);

	@media (max-width: 48rem) {
		left: -0.3125rem;
		width: 2.25rem;
		height: 2.25rem;
		font-size: 0.875rem;
	}
`;

const TimelineCard = styled.div`
	background-color: var(--card-background);
	border-radius: 0.75rem;
	box-shadow: var(--card-shadow);
	padding: 1rem;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	cursor: pointer;

	&:hover {
		transform: translateY(-0.1875rem);
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.12);
	}
`;

const TimelineCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

const TimelineCardContent = styled.div`
	flex: 1;
`;

const TimelineDate = styled.div`
	color: var(--text-secondary);
	font-size: 0.875rem;
	margin-bottom: 0.5rem;
	font-weight: 500;
`;

// Animation variants
const contentVariants = {
	hidden: {
		height: 0,
		opacity: 0,
	},
	visible: {
		height: 'auto',
		opacity: 1,
		transition: {
			height: {
				duration: 0.3,
			},
			opacity: {
				duration: 0.25,
				delay: 0.1,
			},
		},
	},
};

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.4 },
	},
	exit: {
		opacity: 0,
		transition: { duration: 0.3 },
	},
};

const Experience = () => {
	const [expandedItems, setExpandedItems] = useState({});
	const [filter, setFilter] = useState('all');
	const [viewMode, setViewMode] = useState('grid');

	const toggleExpand = (index) => {
		setExpandedItems((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	const experiences = useMemo(
		() => [
			{
				title: 'Digital Education LMS QAT',
				company: 'Marist University',
				date: 'Feb 2024 - Present',
				year: '2024',
				description:
					"Contributed to Marist University to designed and developed a 150+ page website for digital education. Managed LMS content, troubleshot issues, and reported bugs in Jira/TDX. Contributed to Sakai's open Jira bug fixes (#30).",
				type: 'work',
				skills: ['LMS', 'Jira', 'QA Testing', 'Web Development'],
			},
			{
				title: 'Computer Science Tutor',
				company: 'Marist University',
				date: 'Oct 2023 - Mar 2024',
				year: '2023',
				description:
					'Provided personalized tutoring sessions in Computer Science, covering programming languages (Java, Python, JavaScript), data structures, algorithms, and technologies like React, Redux, JavaScript, and Python. Offered ongoing mentorship to help students develop practical skills and theoretical understanding.',
				type: 'work',
				skills: ['Teaching', 'Java', 'Python', 'JavaScript', 'React'],
			},
			{
				title: 'Master of Science in Information Systems (Business Analytics)',
				company: 'Marist University',
				date: 'Aug 2023 - May 2025 (Expected)',
				year: '2023',
				description:
					'GPA: 3.8/4.0. Coursework: Data Management, Data Communication, Predictive Analysis, Exploratory Data Analytics, Decision Support System, Data Mining, Finance & Management Accounting.',
				type: 'education',
				skills: [
					'Data Analytics',
					'Decision Support System',
					'Machine Learning',
					'Data Mining',
				],
			},
			{
				title: 'Software Engineer',
				company: 'Innova Solutions (formerly ACS Solutions)',
				date: 'Apr 2022 - Aug 2023',
				year: '2022',
				description:
					'Led development for BNY Mellon Fund Management & Accounting Application. Built backend-driven UI with scalable SPAs/MPAs using React and micro-frontends, improving responsiveness and reducing latency by 25%. Created reusable React component libraries (Disclosures/Notifications) reducing development time by 30%. Optimized state management with Redux (Thunk/Saga). Architected AWS cloud infrastructure (S3, EC2, Lambda, CloudFront) achieving 20% faster load times. Automated CI/CD pipelines using AWS CodeBuild/CodePipeline, reducing deployment time by 50% and errors by 40%. Improved test coverage to ~95% using Jest/RTL. Reduced package load time from 15 minutes to <1 second. Mentored 4+ junior developers in React, Redux, and testing frameworks.',
				type: 'work',
				skills: [
					'React',
					'Redux',
					'AWS',
					'CI/CD',
					'Micro-frontends',
					'Jest',
				],
			},
			{
				title: 'Associate Software Engineer',
				company: 'Innova Solutions (formerly ACS Solutions)',
				date: 'Mar 2021 - Mar 2022',
				year: '2021',
				description:
					'WordPress Developer: Developed complete web applications independently from setting up Cloudways hosting to configuring domains and optimizing SEO visibility. Implemented custom UI components and shortcodes based on Figma designs. Created custom post types and shortcodes to improve content management. Optimized site performance, reducing load times by 30% and boosting mobile experience. Integrated WooCommerce, driving a 20% increase in client sales. Conducted performance audits using Google Lighthouse, achieving 90+ scores in performance, accessibility, and SEO. Notable projects: Posrg.com, Medisysqi.com.',
				type: 'work',
				skills: [
					'WordPress',
					'WooCommerce',
					'SEO',
					'Web Performance',
					'Figma',
				],
			},
			{
				title: 'Junior Software Developer',
				company: 'OaksPro Software Solutions',
				date: 'Mar 2020 - Mar 2021',
				year: '2020',
				description:
					'Developed solutions for pose recognition using ergocentric videos and DynamoDB for managing millions of daily API calls. Automated Git pull request merges, improving code integrity and reducing manual efforts. Created productivity-boosting scripts to streamline development workflows. Supported development and customization of web applications, enhancing functionality, cross-device compatibility, and user experience.',
				type: 'work',
				skills: ['DynamoDB', 'Git', 'Scripting', 'Web Development'],
			},
			{
				title: 'Bachelor of Computer Science and Engineering',
				company: 'JNTUH University',
				date: 'Aug 2016 - Nov 2020',
				year: '2016',
				description:
					'GPA: 3.5/4.0. Focused on full-stack web development, specializing in JavaScript and also writing Java, Python. Participated in coding competitions and hackathons.',
				type: 'education',
				skills: ['JavaScript', 'Java', 'Python', 'Web Development'],
			},
		],
		[]
	);

	const filteredExperiences = useMemo(() => {
		if (filter === 'all') return experiences;
		return experiences.filter((exp) => exp.type === filter);
	}, [experiences, filter]);

	const renderGridView = () => (
		<GridContainer
			key='grid'
			initial='hidden'
			animate='visible'
			exit='exit'
			variants={containerVariants}>
			{filteredExperiences.length > 0 ? (
				filteredExperiences.map((exp, index) => (
					<GridCard
						className={index == 1 ? 'exp-card' : ''}
						key={index}>
						<CardHeader
							onClick={() => toggleExpand(index)}
							$isExpanded={expandedItems[index]}>
							<CardHeaderContent>
								<CardType>
									{exp.type === 'work' ? (
										<>
											<FaBriefcase /> Work Experience
										</>
									) : (
										<>
											<FaGraduationCap /> Education
										</>
									)}
								</CardType>
								<CardDate>{exp.date}</CardDate>
								<CardTitle>{exp.title}</CardTitle>
								<CardSubtitle>{exp.company}</CardSubtitle>

								<BadgeContainer>
									{exp.skills
										.slice(
											0,
											expandedItems[index]
												? exp.skills.length
												: Math.min(2, exp.skills.length)
										)
										.map((skill, i) => (
											<Badge key={i}>{skill}</Badge>
										))}
									{!expandedItems[index] &&
										exp.skills.length > 2 && (
											<Badge>
												+{exp.skills.length - 2}
											</Badge>
										)}
								</BadgeContainer>
							</CardHeaderContent>

							<ExpandButton>
								{expandedItems[index] ? (
									<FaChevronUp />
								) : (
									<FaChevronDown />
								)}
							</ExpandButton>
						</CardHeader>

						<AnimatePresence>
							{expandedItems[index] && (
								<CardContent
									initial='hidden'
									animate='visible'
									exit='hidden'
									variants={contentVariants}>
									<CardDescription>
										{exp.description}
									</CardDescription>
								</CardContent>
							)}
						</AnimatePresence>
					</GridCard>
				))
			) : (
				<NoResults>
					No experiences found for the selected filter.
				</NoResults>
			)}
		</GridContainer>
	);

	const renderTimelineView = () => {
		// Group experiences by year for timeline view
		const groupedByYear = {};
		filteredExperiences.forEach((exp) => {
			if (!groupedByYear[exp.year]) {
				groupedByYear[exp.year] = [];
			}
			groupedByYear[exp.year].push(exp);
		});

		// Sort years in descending order
		const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

		return (
			<TimelineContainer
				key='timeline'
				initial='hidden'
				animate='visible'
				exit='exit'
				variants={containerVariants}>
				{sortedYears.map((year, yearIndex) => (
					<TimelineYearSection key={year}>
						<YearLabel>{year}</YearLabel>
						<TimelineLine />
						<TimelineItems>
							{groupedByYear[year].map((exp, expIndex) => {
								const itemIndex = yearIndex * 10 + expIndex;
								return (
									<TimelineItem key={itemIndex}>
										<TimelineIcon>
											{exp.type === 'work' ? (
												<FaBriefcase />
											) : (
												<FaGraduationCap />
											)}
										</TimelineIcon>
										<TimelineCard
											onClick={() =>
												toggleExpand(itemIndex)
											}>
											<TimelineCardHeader>
												<TimelineCardContent>
													<TimelineDate>
														{exp.date}
													</TimelineDate>
													<CardTitle>
														{exp.title}
													</CardTitle>
													<CardSubtitle>
														{exp.company}
													</CardSubtitle>
												</TimelineCardContent>
												<ExpandButton>
													{expandedItems[
														itemIndex
													] ? (
														<FaChevronUp />
													) : (
														<FaChevronDown />
													)}
												</ExpandButton>
											</TimelineCardHeader>

											<BadgeContainer>
												{exp.skills
													.slice(
														0,
														expandedItems[itemIndex]
															? exp.skills.length
															: Math.min(
																	3,
																	exp.skills
																		.length
															  )
													)
													.map((skill, i) => (
														<Badge key={i}>
															{skill}
														</Badge>
													))}
												{!expandedItems[itemIndex] &&
													exp.skills.length > 3 && (
														<Badge>
															+
															{exp.skills.length -
																3}
														</Badge>
													)}
											</BadgeContainer>

											<AnimatePresence>
												{expandedItems[itemIndex] && (
													<CardContent
														initial='hidden'
														animate='visible'
														exit='hidden'
														variants={
															contentVariants
														}>
														<CardDescription>
															{exp.description}
														</CardDescription>
													</CardContent>
												)}
											</AnimatePresence>
										</TimelineCard>
									</TimelineItem>
								);
							})}
						</TimelineItems>
					</TimelineYearSection>
				))}

				{filteredExperiences.length === 0 && (
					<NoResults>
						No experiences found for the selected filter.
					</NoResults>
				)}
			</TimelineContainer>
		);
	};

	return (
		<ExperienceContainer id='experience'>
			<ExperienceHeader>
				<ExperienceTitle tabIndex='0'>
					Experience{' '}
					<FaBriefcase
						aria-label='Experience icon'
						title='Experience icon'
					/>
				</ExperienceTitle>
				{/* <ExperienceSubtitle>
					My professional journey and educational background
				</ExperienceSubtitle> */}
			</ExperienceHeader>

			<ControlsContainer>
				<FilterContainer>
					<FilterButton
						$active={filter === 'all'}
						onClick={() => setFilter('all')}>
						All
					</FilterButton>
					<FilterButton
						$active={filter === 'work'}
						onClick={() => setFilter('work')}>
						Work
					</FilterButton>
					<FilterButton
						$active={filter === 'education'}
						onClick={() => setFilter('education')}>
						Education
					</FilterButton>
				</FilterContainer>

				<ViewToggle>
					<ToggleButton
						$position='left'
						$active={viewMode === 'timeline'}
						onClick={() => setViewMode('timeline')}>
						<FaStream size={18} /> Timeline
					</ToggleButton>
					<ToggleButton
						position='right'
						$active={viewMode === 'grid'}
						onClick={() => setViewMode('grid')}>
						<FaThLarge size={18} /> Grid
					</ToggleButton>
				</ViewToggle>
			</ControlsContainer>

			<AnimatePresence mode='wait'>
				{viewMode === 'grid' ? renderGridView() : renderTimelineView()}
			</AnimatePresence>
		</ExperienceContainer>
	);
};

export default Experience;
