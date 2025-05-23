import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import {
	FaCode,
	FaJava,
	FaReact,
	FaNodeJs,
	FaPhp,
	FaDatabase,
	FaWordpress,
	FaDocker,
	FaGitAlt,
	FaAws,
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaPython,
	FaAngular,
	FaBootstrap,
	FaFigma,
	FaJira,
} from 'react-icons/fa';
import {
	SiSpringboot,
	SiMysql,
	SiMongodb,
	SiRedux,
	SiJest,
	SiJenkins,
	SiKubernetes,
	SiTypescript,
	SiPostgresql,
	SiOracle,
	SiRedis,
	SiSelenium,
	SiJunit5,
	SiStorybook,
	SiWebpack,
	SiSass,
	SiTailwindcss,
	// SiRxjs,
	// SiHighcharts,
	// SiAgGrid,
	// SiAmazonec2,
	// SiAmazons3,
	// SiAmazonlambda,
	// SiAmazoncloudfront,
	// SiAmazoncloudwatch,
	// SiAmazoncodebuild,
	// SiAmazoncodepipeline,
} from 'react-icons/si';
import { media } from '../styles/Responsive';

const SkillsContainer = styled.div`
	margin-bottom: 2rem;
`;

const SkillsTitle = styled.h2`
	font-size: 2rem;
	margin-bottom: 1.5rem;
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
		bottom: -0.625rem;
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

const TabsContainer = styled.div`
	margin-bottom: 1.5rem;
	display: grid;
	grid-template-columns: repeat(3, minmax(2rem, 1fr));
	gap: 0.5rem;
	border-bottom: 1px solid var(--border-color);
	padding-bottom: 0.5rem;
	${media.desktop`
		grid-template-columns: repeat(3, minmax(2rem, 1fr));
	`}
	@media (min-width: 36rem) {
		grid-template-columns: repeat(3, minmax(120px, 180px));
		justify-content: center;
		grid-auto-rows: minmax(64px, auto);
	}
	${media.xs`
		grid-template-columns: repeat(2, 1fr);
		justify-content: center;
		grid-auto-rows: minmax(64px, auto);`}
`;

const TabButton = styled.button`
	padding: 0.5rem 1rem;
	background-color: ${({ $active }) =>
		$active ? 'var(--primary-color)' : 'var(--card-background)'};
	color: ${({ $active }) => ($active ? 'white' : 'var(--text-color)')};
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
	font-weight: 600;
	font-size: 0.9rem;
	transition: var(--transition);
	box-shadow: var(--card-shadow);
	z-index: 1;

	&:hover {
		background-color: ${({ $active }) =>
			$active
				? 'var(--primary-color)'
				: 'rgba(var(--primary-color-rgb), 0.1)'};
		transform: translateY(-2px);
	}
`;

const TagGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(7.5rem, 9.4375rem));
	gap: 0.8rem;
	margin: auto;
	justify-content: center;
	${media.xs`
		grid-template-columns: repeat(2, 1fr);
	`}
`;

const SkillTag = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem 0.75rem;
	background-color: var(--card-background);
	border-radius: 3.125rem;
	box-shadow: var(--card-shadow);
	transition: var(--transition);
	cursor: default;
	position: relative;
	min-width: fit-content;

	&:hover {
		transform: translateY(-0.1875rem);
		box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.15);
		background-color: var(--primary-color);
		color: white;
	}

	&:hover svg,
	&:hover span {
		color: white;
	}

	/* Tooltip styling */
	&::after {
		content: attr(data-tooltip);
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		background: rgba(0, 0, 0, 0.9);
		color: #fff;
		padding: 8px 12px;
		border-radius: 4px;
		font-size: 14px;
		white-space: nowrap;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.2s;
		pointer-events: none;
		font-family: sans-serif;
		margin-bottom: 8px;
		z-index: 10;
	}

	&::before {
		content: '';
		position: absolute;
		bottom: calc(100% - 4px);
		left: 50%;
		transform: translateX(-50%);
		border-width: 5px;
		border-style: solid;
		border-color: rgba(0, 0, 0, 0.9) transparent transparent transparent;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.2s;
		z-index: 10;
	}

	&:hover::after,
	&:hover::before {
		opacity: 1;
		visibility: visible;
		transition-delay: 0.2s;
	}
`;

const TagIcon = styled.div`
	font-size: 1.2rem;
	margin-right: 0.5rem;
	color: var(--primary-color);
	transition: var(--transition);
`;

const TagName = styled.span`
	font-size: 0.85rem;
	font-weight: 500;
	color: var(--text-color);
	transition: var(--transition);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const ExpertiseLevel = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.2rem;
`;

const ExpertiseDot = styled.div`
	width: 0.4rem;
	height: 0.4rem;
	border-radius: 50%;
	background-color: ${({ $active }) =>
		$active
			? 'var(--primary-color)'
			: 'rgba(var(--primary-color-rgb), 0.3)'};
	margin-right: 0.125rem;

	${SkillTag}:hover & {
		background-color: ${({ $active }) => ($active ? '#fff' : '#b9b9b9')};
	}
`;

const ShowAllButton = styled.button`
	display: block;
	background-color: var(--card-background);
	border-radius: 0.5rem;
	border: 1px solid var(--primary-color);
	color: var(--primary-color);
	cursor: pointer;
	font-weight: 500;
	margin: 1.5rem auto;
	padding: 0.5rem 1rem;
	transition: var(--transition);
	position: relative;
	z-index: 1;

	&:hover {
		background-color: var(--primary-color);
		color: white;
	}
`;

const Skills = () => {
	const skillCategories = useMemo(
		() => [
			{
				category: 'Frontend Development',
				skills: [
					{ name: 'React', icon: <FaReact />, level: 5 },
					{ name: 'Redux', icon: <SiRedux />, level: 5 },
					{ name: 'TypeScript', icon: <SiTypescript />, level: 4 },
					{ name: 'JavaScript', icon: <FaJs />, level: 5 },
					{ name: 'Angular', icon: <FaAngular />, level: 4 },
					{ name: 'HTML5', icon: <FaHtml5 />, level: 5 },
					{ name: 'CSS3', icon: <FaCss3Alt />, level: 5 },
					{ name: 'SASS', icon: <SiSass />, level: 4 },
					{ name: 'Bootstrap', icon: <FaBootstrap />, level: 4 },
					{ name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 3 },
					// { name: 'RxJS', icon: <SiRxjs />, level: 4 },
					// { name: 'Highcharts', icon: <SiHighcharts />, level: 4 },
					// { name: 'AG-Grid', icon: <SiAgGrid />, level: 4 },
				],
			},
			{
				category: 'Backend Development',
				skills: [
					{ name: 'Java', icon: <FaJava />, level: 5 },
					{ name: 'Spring Boot', icon: <SiSpringboot />, level: 4 },
					{ name: 'Node.js', icon: <FaNodeJs />, level: 4 },
					{ name: 'Php', icon: <FaPhp />, level: 3 },
					{ name: 'Python', icon: <FaPython />, level: 3 },
					{ name: 'REST APIs', icon: <FaDatabase />, level: 5 },
				],
			},
			{
				category: 'Database Technologies',
				skills: [
					{ name: 'MySQL', icon: <SiMysql />, level: 4 },
					{ name: 'PostgreSQL', icon: <SiPostgresql />, level: 4 },
					{ name: 'MongoDB', icon: <SiMongodb />, level: 4 },
					{ name: 'Oracle DB', icon: <SiOracle />, level: 3 },
					{ name: 'Redis', icon: <SiRedis />, level: 3 },
				],
			},
			{
				category: 'DevOps & Cloud',
				skills: [
					{ name: 'AWS', icon: <FaAws />, level: 4 },
					// { name: 'EC2', icon: <SiAmazonec2 />, level: 4 },
					// { name: 'S3', icon: <SiAmazons3 />, level: 4 },
					// { name: 'Lambda', icon: <SiAmazonlambda />, level: 3 },
					// { name: 'CloudFront', icon: <SiAmazoncloudfront />, level: 3 },
					// { name: 'CloudWatch', icon: <SiAmazoncloudwatch />, level: 3 },
					// { name: 'CodeBuild', icon: <SiAmazoncodebuild />, level: 4 },
					// { name: 'CodePipeline', icon: <SiAmazoncodepipeline />, level: 4 },
					{ name: 'Docker', icon: <FaDocker />, level: 4 },
					{ name: 'Kubernetes', icon: <SiKubernetes />, level: 3 },
					{ name: 'Jenkins', icon: <SiJenkins />, level: 3 },
				],
			},
			{
				category: 'Testing & Tools',
				skills: [
					{ name: 'Jest', icon: <SiJest />, level: 5 },
					{ name: 'RTL', icon: <FaReact />, level: 5 },
					{ name: 'JUnit', icon: <SiJunit5 />, level: 4 },
					{ name: 'Selenium', icon: <SiSelenium />, level: 3 },
					{ name: 'Git', icon: <FaGitAlt />, level: 5 },
					{ name: 'Webpack', icon: <SiWebpack />, level: 4 },
					{ name: 'Storybook', icon: <SiStorybook />, level: 4 },
					{ name: 'Jira', icon: <FaJira />, level: 4 },
					{ name: 'Figma', icon: <FaFigma />, level: 3 },
				],
			},
			{
				category: 'CMS & Other',
				skills: [
					{ name: 'WordPress', icon: <FaWordpress />, level: 4 },
					{ name: 'Elementor', icon: <FaWordpress />, level: 4 },
					{ name: 'Divi', icon: <FaWordpress />, level: 4 },
					{ name: 'WooCommerce', icon: <FaWordpress />, level: 3 },
					{ name: 'Liferay', icon: <FaWordpress />, level: 4 },
				],
			},
		],
		[]
	);

	const [activeTab, setActiveTab] = useState(0);
	const [showAll, setShowAll] = useState(false);

	// Function to display only top skills (level 4-5) unless showAll is true
	const getVisibleSkills = (skills) => {
		if (showAll) return skills;
		return skills.filter((skill) => skill.level >= 4);
	};

	return (
		<SkillsContainer id='skills'>
			<SkillsTitle tabIndex='0'>Technical Skills </SkillsTitle>

			<TabsContainer>
				{skillCategories.map((category, index) => (
					<TabButton
						key={index}
						$active={activeTab === index}
						onClick={() => setActiveTab(index)}>
						{category.category}
					</TabButton>
				))}
			</TabsContainer>

			{skillCategories.map(
				(category, categoryIndex) =>
					categoryIndex === activeTab && (
						<div key={categoryIndex}>
							<TagGrid>
								{getVisibleSkills(category.skills).map(
									(skill, skillIndex) => (
										<SkillTag
											data-tooltip={`Expertise Level: ${skill.level}/5`}
											key={`${categoryIndex}-${skillIndex}`}>
											<TagIcon>{skill.icon}</TagIcon>
											<div>
												<TagName>{skill.name}</TagName>
												<ExpertiseLevel>
													{[...Array(5)].map(
														(_, i) => (
															<ExpertiseDot
																key={i}
																$active={
																	i <
																	skill.level
																}
															/>
														)
													)}
												</ExpertiseLevel>
											</div>
										</SkillTag>
									)
								)}
							</TagGrid>
							{category.skills.some(
								(skill) => skill.level < 4
							) && (
								<ShowAllButton
									onClick={() => setShowAll(!showAll)}>
									{showAll
										? 'Show Key Skills'
										: 'Show All Skills'}
								</ShowAllButton>
							)}
						</div>
					)
			)}
		</SkillsContainer>
	);
};

export default Skills;
