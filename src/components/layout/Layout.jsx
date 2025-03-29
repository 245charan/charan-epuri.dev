import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../navbar/Navbar';
import ProfileCard from '../profile/ProfileCard';
import { media } from '../../styles/Responsive';

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: var(--background-color);
	color: var(--text-color);
	transition: background-color 0.3s ease, color 0.3s ease;

	${media.desktop`
    flex-direction: row;
  `}
`;

const LeftSection = styled.div`
	position: relative;
	width: 100%;
	// background-color: var(--card-background);
	padding: 1rem;

	${media.desktop`
    position: fixed;
    // width: 350px;
    // height: 100vh;
    flex-basis: 30%;
    max-width: 30%;
    overflow-y: auto;
    padding: 2rem;
  `}
`;

const RightSection = styled.div`
	width: 100%;
	padding: 1rem;

	${media.desktop`
    flex-basis: 70%;

    margin-left: 30%;
    max-width: 70%;
    padding: 2rem;
  `}
`;

const MobileNavbarContainer = styled.div`
	display: block;
	position: sticky;
	top: 0;
	z-index: 100;
	${media.desktop`
    display: none;
  `}
`;

const DesktopNavbarContainer = styled.div`
	display: none;

	${media.desktop`
    display: block;
    margin-bottom: 2rem;
  `}
`;

const Layout = ({ children }) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 992);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<LayoutContainer>
			{isMobile && (
				<MobileNavbarContainer>
					<Navbar isMobile={isMobile} />
				</MobileNavbarContainer>
			)}

			<LeftSection>
				<ProfileCard isMobile={isMobile} />
			</LeftSection>

			<RightSection>
				{!isMobile && (
					<DesktopNavbarContainer>
						<Navbar isMobile={isMobile} />
					</DesktopNavbarContainer>
				)}
				{children}
			</RightSection>
		</LayoutContainer>
	);


	//future todo

	// return (
	// 	<LayoutContainer>
	// 		<DesktopNavbarContainer >
	// 			<Navbar isMobile={isMobile}>
	// 				<LeftSection>
	// 					<ProfileCard />
	// 				</LeftSection>
	// 				<RightSection>{children}</RightSection>
	// 			</Navbar>
	// 		</DesktopNavbarContainer>
	// 	</LayoutContainer>
	// );
};

export default Layout;
