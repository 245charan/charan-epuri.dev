import React from 'react';
import styled from 'styled-components';
import {
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
	SiCucumber,
	SiStorybook,
	SiWebpack,
	SiSass,
	SiTailwindcss,
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

	&::after {
		content: '';
		position: absolute;
		bottom: -0.625rem;
		left: 0;
		width: 3.125rem;
		height: 0.1875rem;
		background-color: var(--primary-color);
	}

	${media.mobile`
    font-size: 1.75rem;
  `}
`;

const SkillsCategoryTitle = styled.h3`
	font-size: 1.5rem;
	margin: 2rem 0 1rem;
	color: var(--text-color);
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: -0.3125rem;
		left: 0;
		width: 1.875rem;
		height: 0.125rem;
		background-color: var(--primary-color);
	}
`;

const TagCloud = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.8rem;
	margin-bottom: 1.5rem;
`;

const SkillTag = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: var(--card-background);
	border-radius: 3.125rem;
	box-shadow: var(--card-shadow);
	transition: var(--transition);
	cursor: default;

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
`;

const TagIcon = styled.div`
	font-size: 1.2rem;
	margin-right: 0.5rem;
	color: var(--primary-color);
	transition: var(--transition);
`;

const TagName = styled.span`
	font-size: 0.9rem;
	font-weight: 500;
	color: var(--text-color);
	transition: var(--transition);
`;

const ExpertiseLevel = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.2rem;
`;

const ExpertiseDot = styled.div`
	width: 0.5rem;
	height: 0.5rem;
	border-radius: 50%;
	background-color: ${(props) =>
		props.active
			? 'var(--primary-color)'
			: 'rgba(var(--primary-color-rgb), 0.3)'};
	margin-right: 0.1875rem;

  ${SkillTag}:hover & {
		background-color: ${(props) => props.active ? '#fff' : '#b9b9b9'};

  }

`;

const SkillsSection = () => {
	// Define skill categories with expertise levels (1-5)
	const skillCategories = [
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
				// { name: 'JUnit', icon: <SiJunit />, level: 4 },
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
				{ name: 'WooCommerce', icon: <FaWordpress />, level: 3 },
				// { name: 'Liferay', icon: <FaWordpress />, level: 4 },
			],
		},
	];

	return (
		<SkillsContainer id='skills'>
			<SkillsTitle>Technical Skills</SkillsTitle>

			{skillCategories.map((category, categoryIndex) => (
				<div key={categoryIndex}>
					<SkillsCategoryTitle>
						{category.category}
					</SkillsCategoryTitle>
					<TagCloud>
						{category.skills.map((skill, skillIndex) => (
							<SkillTag key={`${categoryIndex}-${skillIndex}`}>
								<TagIcon>{skill.icon}</TagIcon>
								<div>
									<TagName>{skill.name}</TagName>
									<ExpertiseLevel>
										{[...Array(5)].map((_, i) => (
											<ExpertiseDot
												key={i}
												active={i < skill.level}
											/>
										))}
									</ExpertiseLevel>
								</div>
							</SkillTag>
						))}
					</TagCloud>
				</div>
			))}
		</SkillsContainer>
	);
};

export default SkillsSection;
