import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
	height: .25rem;
	width: 100%;
	background-color: var(--background-color);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
`;

const ProgressFill = styled.div`
	height: 100%;
	background-color: var(--primary-color);
	width: ${({$scrollPercentage}) => $scrollPercentage}%;
	border-radius: 0rem .25rem .25rem 0rem;
	transition: width 0.2s ease-out;
`;

const ProgressBar = () => {
	const [scrollPercentage, setScrollPercentage] = useState(0);
	
	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const scrollY = window.scrollY;

			const scrollPercent = 
				(scrollY / (documentHeight - windowHeight)) * 100;
			setScrollPercentage(scrollPercent);
		};

		handleScroll();
		
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	
	return (
		<ProgressBarContainer>
			<ProgressFill $scrollPercentage={scrollPercentage} />
		</ProgressBarContainer>
	);
};

export default ProgressBar;