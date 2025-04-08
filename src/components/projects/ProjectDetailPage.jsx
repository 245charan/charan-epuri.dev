import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { media } from '../../styles/Responsive';
import { projectsData } from '../../sections/Projects';
const DetailContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
`;

const BackButton = styled.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	background: none;
	border: none;
	color: var(--text-color);
	font-size: 1rem;
	font-weight: 500;
	cursor: pointer;
	padding: 0.5rem 0;
	margin-bottom: 2rem;
	transition: var(--transition);

	&:hover {
		color: var(--primary-color);
	}
`;

const ProjectHero = styled.div`
	position: relative;
	width: 100%;
	height: 50vh;
	border-radius: var(--border-radius);
	overflow: hidden;
	margin-bottom: 2rem;

	${media.mobile`
    height: 30vh;
  `}
`;

const HeroImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const HeroOverlay = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 2rem;
	background: linear-gradient(
		to top,
		rgba(0, 0, 0, 0.8) 0%,
		rgba(0, 0, 0, 0) 100%
	);
`;

const ProjectTitle = styled.h1`
	color: white;
	font-size: 2.5rem;
	margin-bottom: 0.5rem;

	${media.mobile`
    font-size: 1.8rem;
  `}
`;

const ProjectInfo = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 2rem;

	${media.mobile`
    grid-template-columns: 1fr;
  `}
`;

const ProjectDescription = styled.div`
	color: var(--text-color);
`;

const Description = styled.p`
	font-size: 1.1rem;
	line-height: 1.6;
	margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
	font-size: 1.5rem;
	margin: 2rem 0 1rem;
	color: var(--text-color);
`;

const FeaturesList = styled.ul`
	padding-left: 1.5rem;
	margin-bottom: 2rem;
`;

const Feature = styled.li`
	margin-bottom: 0.5rem;
	font-size: 1.1rem;
`;

const ProjectMeta = styled.div`
	background-color: var(--card-background);
	border-radius: var(--border-radius);
	padding: 1.5rem;
	box-shadow: var(--card-shadow);
`;

const TechStack = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-bottom: 2rem;
`;

const TechTag = styled.span`
	background-color: var(--background-color);
	color: var(--text-color);
	padding: 0.25rem 0.75rem;
	border-radius: 3.125rem;
	font-size: 0.9rem;
	font-weight: 500;
`;

const MetaItem = styled.div`
	margin-bottom: 1.5rem;
`;

const MetaLabel = styled.h4`
	font-size: 1rem;
	margin-bottom: 0.5rem;
	color: var(--text-secondary);
`;

const MetaValue = styled.p`
	font-size: 1rem;
`;

const ProjectLinks = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;
`;

const ProjectLink = styled.a`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	color: white;
	text-decoration: none;
	font-weight: 500;
	background-color: ${({ $primary }) =>
		$primary ? 'var(--primary-color)' : '#333'};
	padding: 0.75rem 1rem;
	border-radius: var(--border-radius);
	transition: var(--transition);

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.2);
	}
`;
const mockProjectData = {
	id: 'project-id',
	title: 'Portfolio Website',
	description:
		'A responsive portfolio website built with React and styled-components to showcase my work and skills. The website features a modern design with dark and light themes, smooth animations, and a contact form.',
	image: '/images/portfolio-large.jpg',
	techStack: [
		'React',
		'Styled Components',
		'JavaScript',
		'Framer Motion',
		'Firebase',
	],
	category: 'Web Development',
	github: 'https://github.com/yourusername/portfolio',
	liveDemo: 'https://yourportfolio.com',
	features: [
		'Responsive design that works on all devices',
		'Dark and light theme with system preference detection',
		'Smooth page transitions and scroll animations',
		'Contact form with email integration',
		'Project filtering and categorization',
		'Blog section with markdown support',
	],
	projectType: 'Personal',
	completionDate: 'January 2024',
	client: 'Self',
	role: 'Full Stack Developer',
};
const ProjectDetailPage = () => {
	const { projectId } = useParams();
	const navigate = useNavigate();
	const [project, setProject] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const foundProject = projectsData.find(
			(projectInfo) => projectInfo.id === projectId
		);

		if (foundProject) {
			setProject(foundProject);
		} else {
			return <DetailContainer>Project Not Found</DetailContainer>;
		}
		setLoading(false);
	}, [projectId, navigate]);

	if (loading) {
		return <DetailContainer>Loading project details...</DetailContainer>;
	}

	if (!project) {
		return <DetailContainer>Project not found</DetailContainer>;
	}

	return (
		<DetailContainer>
			<BackButton
				onClick={() => {
					navigate('/charan-epuri.dev/#projects');
					setTimeout(() => {
						const projectsSection =
							document.getElementById('projects');
						if (projectsSection) {
							projectsSection.scrollIntoView({
								behavior: 'smooth',
							});
						}
					}, 100);
				}}>
				<FaArrowLeft /> Back to Projects
			</BackButton>

			<ProjectHero>
				{project.image && (
					<>
						<HeroImage
							src={project.image}
							alt={project.title || 'Project image'}
						/>

						<HeroOverlay>
							<ProjectTitle>{project.title}</ProjectTitle>
						</HeroOverlay>
					</>
				)}
			</ProjectHero>

			<ProjectInfo>
				<ProjectDescription>
					<Description>{project.description}</Description>

					{project.features?.length > 0 && (
						<>
							<SectionTitle>Key Features</SectionTitle>
							<FeaturesList>
								{project.features.map((feature, index) => (
									<Feature key={index}>{feature}</Feature>
								))}
							</FeaturesList>
						</>
					)}
				</ProjectDescription>

				<ProjectMeta>
					{project.techStack?.length > 0 && (
						<>
							<SectionTitle>Technologies</SectionTitle>
							<TechStack>
								{project.techStack.map((tech, index) => (
									<TechTag key={index}>{tech}</TechTag>
								))}
							</TechStack>
						</>
					)}

					{project.projectType && (
						<MetaItem>
							<MetaLabel>Project Type</MetaLabel>
							<MetaValue>{project.projectType}</MetaValue>
						</MetaItem>
					)}

					{project.completionDate && (
						<MetaItem>
							<MetaLabel>Completion Date</MetaLabel>
							<MetaValue>{project.completionDate}</MetaValue>
						</MetaItem>
					)}

					{project.client && (
						<MetaItem>
							<MetaLabel>Client</MetaLabel>
							<MetaValue>{project.client}</MetaValue>
						</MetaItem>
					)}

					{project.role && (
						<MetaItem>
							<MetaLabel>My Role</MetaLabel>
							<MetaValue>{project.role}</MetaValue>
						</MetaItem>
					)}

					<ProjectLinks>
						{project.liveDemo && (
							<ProjectLink
								href={project.liveDemo}
								target='_blank'
								rel='noopener noreferrer'
								$primary>
								<FaExternalLinkAlt /> View Live Demo
							</ProjectLink>
						)}

						{project.github && (
							<ProjectLink
								href={project.github}
								target='_blank'
								rel='noopener noreferrer'>
								<FaGithub /> View Source Code
							</ProjectLink>
						)}
					</ProjectLinks>
				</ProjectMeta>
			</ProjectInfo>
		</DetailContainer>
	);
};

export default ProjectDetailPage;
