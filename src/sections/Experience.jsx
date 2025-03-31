import React from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const ExperienceContainer = styled.div`
  margin-bottom: 3rem;
`;

const ExperienceTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -.625rem;
    left: 0;
    width: 3.125rem;
    height: .1875rem;
    background-color: var(--primary-color);
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: .25rem;
    background-color: var(--primary-color);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1.5px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${props => props.position === 'right' ? '50%' : '0'};
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }
`;

const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: var(--card-background);
  position: relative;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  top: 15px;
  right: ${props => props.position === 'left' ? '-20px' : 'auto'};
  left: ${props => props.position === 'right' ? '-20px' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
  
  @media (max-width: 768px) {
    left: 10px;
    right: auto;
  }
`;

const TimelineDate = styled.div`
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const TimelineSubtitle = styled.h4`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-weight: 500;
`;

const TimelineDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 0;
`;

const Experience = () => {
  const experiences = [
    {
      title: 'Digital Education LMS QAT',
      company: 'Marist College',
      date: 'Oct 2023 - Present',
      description: 'Contributed to Marist University to designed and developed a 150+ page website for digital education.  Managed LMS content, troubleshot issues, and reported bugs in Jira/TDX. Contributed to Sakai\'s open Jira bug fixes (#30).',
      type: 'work'
    },
    {
      title: 'Computer Science Tutor',
      company: 'Marist College',
      date: 'Oct 2023 - Mar 2024',
      description: 'Provided personalized tutoring sessions in Computer Science, covering programming languages (Java, Python, JavaScript), data structures, algorithms, and technologies like React, Redux, JavaScript, and Python. Offered ongoing mentorship to help students develop practical skills and theoretical understanding.',
      type: 'work'
    },
    {
      title: 'Software Engineer',
      company: 'Innova Solutions (formerly ACS Solutions)',
      date: 'Mar 2021 - Aug 2023',
      description: 'Led development for BNY Mellon Fund Management & Accounting Application. Built backend-driven UI with scalable SPAs/MPAs using React and micro-frontends, improving responsiveness and reducing latency by 25%. Created reusable React component libraries (Disclosures/Notifications) reducing development time by 30%. Optimized state management with Redux (Thunk/Saga). Architected AWS cloud infrastructure (S3, EC2, Lambda, CloudFront) achieving 20% faster load times. Automated CI/CD pipelines using AWS CodeBuild/CodePipeline, reducing deployment time by 50% and errors by 40%. Improved test coverage to ~95% using Jest/RTL. Reduced package load time from 15 minutes to <1 second. Mentored 4+ junior developers in React, Redux, and testing frameworks.',
      type: 'work'
    },
    {
      title: 'WordPress Developer',
      company: 'Innova Solutions (formerly ACS Solutions)',
      date: 'Nov 2020 - Mar 2021',
      description: 'Developed complete web applications independently from setting up Cloudways hosting to configuring domains and optimizing SEO visibility. Implemented custom UI components and shortcodes based on Figma designs. Created custom post types and shortcodes to improve content management. Optimized site performance, reducing load times by 30% and boosting mobile experience. Integrated WooCommerce, driving a 20% increase in client sales. Conducted performance audits using Google Lighthouse, achieving 90+ scores in performance, accessibility, and SEO. Notable projects: Posrg.com, Medisysqi.com.',
      type: 'work'
    },
    {
      title: 'Junior Software Developer',
      company: 'OaksPro Software Solutions',
      date: 'Mar 2016 - Mar 2017',
      description: 'Developed solutions for pose recognition using ergocentric videos and DynamoDB for managing millions of daily API calls. Automated Git pull request merges, improving code integrity and reducing manual efforts. Created productivity-boosting scripts to streamline development workflows. Supported development and customization of web applications, enhancing functionality, cross-device compatibility, and user experience.',
      type: 'work'
    },
    {
      title: 'Master of Science in Information Systems (Business Analytics)',
      company: 'Marist College',
      date: 'Aug 2023 - May 2025 (Expected)',
      description: 'GPA: 3.8/4.0. Coursework: Data Management, Data Communication, Predictive Analysis, Exploratory Data Analytics, Decision Support System, Data Mining, Finance & Management Accounting.',
      type: 'education'
    },
    {
      title: 'Bachelor of Computer Science and Engineering',
      company: 'JNTUH',
      date: 'Aug 2016 - Nov 2020',
      description: 'GPA: 3.5/4.0. Focused on full-stack web development, specializing in JavaScript and also writing Java, Python. Participated in coding competitions and hackathons.',
      type: 'education'
    }
  ];

  return (
    <ExperienceContainer id="experience">
      <ExperienceTitle>Experience</ExperienceTitle>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem 
            key={index} 
            position={index % 2 === 0 ? 'left' : 'right'}
          >
            <TimelineContent>
              <TimelineDate>{exp.date}</TimelineDate>
              <TimelineTitle>{exp.title}</TimelineTitle>
              <TimelineSubtitle>{exp.company}</TimelineSubtitle>
              <TimelineDescription>{exp.description}</TimelineDescription>
            </TimelineContent>
            <TimelineIcon position={index % 2 === 0 ? 'left' : 'right'}>
              {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
            </TimelineIcon>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience;
