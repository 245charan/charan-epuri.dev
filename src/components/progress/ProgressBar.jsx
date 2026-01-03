import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
	height: 0.25rem;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.1);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9999;
	overflow: hidden;
`;

const ProgressFill = styled.div`
	height: 100%;
	background-color: var(--primary-color, #3B82F6);
	width: ${({$scrollPercentage}) => Math.max(0, $scrollPercentage)}%;
	min-width: ${({$scrollPercentage}) => $scrollPercentage > 0 ? '2px' : '0'};
	border-radius: 0rem 0.25rem 0.25rem 0rem;
	transition: width 0.2s ease-out;
`;

const ProgressBar = () => {
	const [scrollPercentage, setScrollPercentage] = useState(0);
	
	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const scrollY = window.scrollY || window.pageYOffset;

			const scrollableHeight = documentHeight - windowHeight;
			
			// Handle edge cases: no scrollable content or calculation issues
			if (scrollableHeight <= 0) {
				setScrollPercentage(0);
				return;
			}

			const scrollPercent = (scrollY / scrollableHeight) * 100;
			// Clamp between 0 and 100
			const clampedPercent = Math.min(100, Math.max(0, scrollPercent));
			setScrollPercentage(clampedPercent);
		};

		// Initial calculation after a small delay to ensure DOM is ready
		const timeoutId = setTimeout(handleScroll, 0);
		
		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll, { passive: true });
		
		return () => {
			clearTimeout(timeoutId);
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, []);
	
	return (
		<ProgressBarContainer>
			<ProgressFill $scrollPercentage={scrollPercentage} />
		</ProgressBarContainer>
	);
};

export default ProgressBar;