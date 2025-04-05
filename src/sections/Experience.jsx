import React, { useMemo } from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { media } from '../styles/Responsive';

const ExperienceContainer = styled.div`
	margin-bottom: 48px;
`;

const ExperienceTitle = styled.h2`
	font-size: 32px;
	margin-bottom: 24px;
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
`;

const Timeline = styled.div`
	position: relative;
	max-width: 75rem;
	margin: 0 auto;

	&::after {
		content: '';
		position: absolute;
		width: 4px;
		background-color: var(--primary-color);
		top: 0;
		bottom: 0;
		left: 50%;
		margin-left: -0.0938rem;

		@media (max-width: 48rem) {
			left: 1.9375rem;
		}
	}
`;

const TimelineItem = styled.div`
	padding: 0.625rem 2.5rem;
	position: relative;
	width: 50%;
	left: ${(props) => (props.position === 'right' ? '50%' : '0')};

	@media (max-width: 48rem) {
		width: 100%;
		padding-left: 4.375rem;
		padding-right: 1.5625rem;
		left: 0;
	}
`;

const TimelineContent = styled.div`
	padding: 1.25rem 1.875rem;
	background-color: var(--card-background);
	position: relative;
	border-radius: var(--border-radius);
	box-shadow: var(--card-shadow);
	transition: var(--transition);

	&:hover {
		transform: translateY(-0.3125rem);
		box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.2);
	}
`;

const TimelineIcon = styled.div`
	position: absolute;
	font-size: 1.5rem;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	background-color: var(--primary-color);
	top: 0.9375rem;
	right: ${(props) => (props.position === 'left' ? '-1.25rem' : 'auto')};
	left: ${(props) => (props.position === 'right' ? '-1.25rem' : 'auto')};
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	z-index: 1;

	@media (max-width: 48rem) {
		left: 0.625rem;
		right: auto;
	}
`;

const TimelineDate = styled.div`
	color: var(--primary-color);
	font-weight: 600;
	margin-bottom: 8px;
`;

const TimelineTitle = styled.h3`
	font-size: 20px;
	margin-bottom: 8px;
	color: var(--text-color);
`;

const TimelineSubtitle = styled.h4`
	font-size: 16px;
	color: var(--text-secondary);
	margin-bottom: 16px;
	font-weight: 500;
`;

const TimelineDescription = styled.p`
	color: var(--text-secondary);
	margin-bottom: 0;
	${media.mobile`
    display: none;
    // &:hover{
    //   todo imporve on-click expand the 
    //   }
  `}
`;

const Experience = () => {
	const experiences = useMemo(() => ([
		{
			title: 'Digital Education LMS QAT',
			company: 'Marist University',
			date: 'Oct 2023 - Present',
			description:
				"Contributed to Marist University to designed and developed a 150+ page website for digital education.  Managed LMS content, troubleshot issues, and reported bugs in Jira/TDX. Contributed to Sakai's open Jira bug fixes (#30).",
			type: 'work',
		},
		{
			title: 'Computer Science Tutor',
			company: 'Marist University',
			date: 'Oct 2023 - Mar 2024',
			description:
				'Provided personalized tutoring sessions in Computer Science, covering programming languages (Java, Python, JavaScript), data structures, algorithms, and technologies like React, Redux, JavaScript, and Python. Offered ongoing mentorship to help students develop practical skills and theoretical understanding.',
			type: 'work',
		},
		{
			title: 'Master of Science in Information Systems (Business Analytics)',
			company: 'Marist University',
			date: 'Aug 2023 - May 2025 (Expected)',
			description:
				'GPA: 3.8/4.0. Coursework: Data Management, Data Communication, Predictive Analysis, Exploratory Data Analytics, Decision Support System, Data Mining, Finance & Management Accounting.',
			type: 'education',
		},
		{
			title: 'Software Engineer',
			company: 'Innova Solutions (formerly ACS Solutions)',
			date: 'Mar 2021 - Aug 2023',
			description:
				'Led development for BNY Mellon Fund Management & Accounting Application. Built backend-driven UI with scalable SPAs/MPAs using React and micro-frontends, improving responsiveness and reducing latency by 25%. Created reusable React component libraries (Disclosures/Notifications) reducing development time by 30%. Optimized state management with Redux (Thunk/Saga). Architected AWS cloud infrastructure (S3, EC2, Lambda, CloudFront) achieving 20% faster load times. Automated CI/CD pipelines using AWS CodeBuild/CodePipeline, reducing deployment time by 50% and errors by 40%. Improved test coverage to ~95% using Jest/RTL. Reduced package load time from 15 minutes to <1 second. Mentored 4+ junior developers in React, Redux, and testing frameworks.',
			type: 'work',
		},
		{
			title: 'Associate Software Engineer',
			company: 'Innova Solutions (formerly ACS Solutions)',
			date: 'Mar 2021 - Mar 2021',
			description:
				'WordPress Developer: Developed complete web applications independently from setting up Cloudways hosting to configuring domains and optimizing SEO visibility. Implemented custom UI components and shortcodes based on Figma designs. Created custom post types and shortcodes to improve content management. Optimized site performance, reducing load times by 30% and boosting mobile experience. Integrated WooCommerce, driving a 20% increase in client sales. Conducted performance audits using Google Lighthouse, achieving 90+ scores in performance, accessibility, and SEO. Notable projects: Posrg.com, Medisysqi.com.',
			type: 'work',
		},
		{
			title: 'Junior Software Developer',
			company: 'OaksPro Software Solutions',
			date: 'Mar 2020 - Mar 2021',
			description:
				'Developed solutions for pose recognition using ergocentric videos and DynamoDB for managing millions of daily API calls. Automated Git pull request merges, improving code integrity and reducing manual efforts. Created productivity-boosting scripts to streamline development workflows. Supported development and customization of web applications, enhancing functionality, cross-device compatibility, and user experience.',
			type: 'work',
		},
		{
			title: 'Bachelor of Computer Science and Engineering',
			company: 'JNTUH University',
			date: 'Aug 2016 - Nov 2020',
			description:
				'GPA: 3.5/4.0. Focused on full-stack web development, specializing in JavaScript and also writing Java, Python. Participated in coding competitions and hackathons.',
			type: 'education',
		},
	]),[]);

	return (
		<ExperienceContainer id='experience'>
			<ExperienceTitle>Experience</ExperienceTitle>
			<Timeline>
				{experiences.map((exp, index) => (
					<TimelineItem
						key={index}
						position={index % 2 === 0 ? 'left' : 'right'}>
						<TimelineContent>
							<TimelineDate>{exp.date}</TimelineDate>
							<TimelineTitle>{exp.title}</TimelineTitle>
							<TimelineSubtitle>{exp.company}</TimelineSubtitle>
							<TimelineDescription>
								{exp.description}
							</TimelineDescription>
						</TimelineContent>
						<TimelineIcon
							position={index % 2 === 0 ? 'left' : 'right'}>
							{exp.type === 'work' ? (
								<FaBriefcase />
							) : (
								<FaGraduationCap />
							)}
						</TimelineIcon>
					</TimelineItem>
				))}
			</Timeline>
		</ExperienceContainer>
	);
};

export default Experience;
