import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/Responsive';

const HeroContainer = styled.div`
	margin-bottom: 3rem;
	padding: 2rem 0;
`;

const HeroContent = styled.div`
	text-align: left;
`;

const HeroTitle = styled.h1`
	font-size: 3rem;
	font-weight: 700;
	margin-bottom: 1rem;
	color: var(--text-color);
	font-display: swap; /* Ensure text remains visible during webfont load */
	will-change: transform; /* Hint to browser for optimization */

	span {
		color: var(--primary-color);
	}

	@media (min-width: 48rem) {
		font-size: 4rem;
	}
`;

const HeroSubtitle = styled.p`
	font-size: 1.25rem;
	color: var(--text-secondary);
	margin-bottom: 2rem;
	max-width: 37.5rem;
	line-height: 1.8;

	@media (min-width: 48rem) {
		font-size: 1.5rem;
	}
`;

const HeroButtons = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
	display: inline-block;
	padding: 0.75rem 2rem;
	background-color: var(--primary-color);
	color: white;
	border-radius: 3.125rem;
	font-weight: 600;
	text-decoration: none;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-0.1875rem);
		box-shadow: 0 0.25rem 0.9375rem rgba(138, 86, 255, 0.4);
		text-decoration: none;
		color: white;
	}
`;

const SecondaryButton = styled.a`
	display: inline-block;
	padding: 0.75rem 2rem;
	background-color: transparent;
	color: var(--text-color);
	border: 0.125rem solid var(--primary-color);
	border-radius: 3.125rem;
	font-weight: 600;
	text-decoration: none;
	transition: all 0.3s ease;

	&:hover {
		background-color: var(--primary-color);
		color: white;
		transform: translateY(-0.1875rem);
		text-decoration: none;
	}
`;

const Hero = () => {
	return (
		<HeroContainer id='home'>
			<HeroContent>
				{/* <HeroTitle>
					Accessibility Focused Full Stack <span>Java</span> Developer with <br />
					<span>React.Js</span> & <span>WordPress</span> Expertise
				</HeroTitle> */}
				{/* <HeroTitle>
				<span>Java</span> Developer Building <br/>Accessible Web - <span>React</span> & <span>WordPress</span>.
				</HeroTitle> */}
				<HeroTitle>
					Transforming Ideas into <br /><span>Accessible</span> Digital
					Experiences.
				</HeroTitle>
				<HeroSubtitle>
					Code that scales. Experiences that resonate.
				</HeroSubtitle>
				<HeroButtons>
					<PrimaryButton
						aria-label='Explore My Work'
						title='Explore My Work'
						href='#projects'>
						Explore My Work
					</PrimaryButton>
					<SecondaryButton
						aria-label='Lets Collaborate'
						title='Lets Collaborate'
						target='_blank'
						href='https://outlook.office.com/bookwithme/user/15d34846ee2f47be84a77aa55dd0ebbd@marist.edu?anonymous&ep=plink'>
						Let's Collaborate
					</SecondaryButton>
				</HeroButtons>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
