import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../navbar/Navbar';
import ProfileCard from '../profile/ProfileCard';
import { media, breakpoints } from '../../styles/Responsive';

const LayoutContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	min-height: 100dvh;
	background-color: var(--background-color);
	color: var(--text-color);
	transition: background-color 0.3s ease, color 0.3s ease;
	overflow: hidden;

	${media.desktop`
		flex-direction: row;
		height: 100vh;
		height: 100dvh;
	`}
	${media.mobile`
		align-self:center;
	`}
`;

const LeftSection = styled.div`
	position: relative;
	width: 100%;
	max-width: 450px;
	padding: 1rem;
	display: flex;
	flex-direction: column;

	${media.tablet`
		align-self:center;
		`}
	${media.md`
			align-self:center;
  	`}
	${media.desktop`
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		height: 100dvh;
		min-width: 350px;
		flex-basis: 30%;
		max-width: 30%;
		overflow: hidden;
		padding: 0;
		z-index: 10;
  	`}
`;

const RightSection = styled.div`
	width: 100%;
	padding: 1rem;
	flex: 1;
	display: flex;
	flex-direction: column;
	overflow: hidden;

	${media.desktop`
		flex-basis: 70%;
		max-width: 70%;
		margin-left: 30%;
		padding: 2rem;
		height: 100vh;
		height: 100dvh;
	`}
`;

const RightSectionContent = styled.div`
	flex: 1;
	overflow-y: auto;
	overflow-x: hidden;
	min-height: 0;
	
	&::-webkit-scrollbar {
		display: none;
	}
	
	-ms-overflow-style: none;
	scrollbar-width: none;
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

const LeftSectionContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	padding: 1rem;
	overflow: hidden;

	${media.desktop`
		padding: 2rem;
		justify-content: flex-start;
	`}
`;

const ProfileCardWrapper = styled.div`
	flex: 1;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	border-radius: var(--border-radius);
`;

const DesktopNavbarContainer = styled.div`
	display: none;

	${media.desktop`
		display: flex;
		align-items: center;
		justify-content: center;
		position: sticky;
		top: 0;
		z-index: 100;
		background-color: var(--background-color);
		padding: 1rem 0;
		margin-bottom: 2rem;
		flex-shrink: 0;
		width: 100%;
	`}
`;

const Layout = ({ children }) => {
	const [isMobile, setIsMobile] = useState(
		window.innerWidth < parseInt(breakpoints.lg)
	);

	const isProjectDetailPage =
		location.pathname.startsWith('/charan-epuri.dev/') &&
		location.pathname !== '/charan-epuri.dev' &&
		location.pathname !== '/charan-epuri.dev/' &&
		location.hash === '';

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < parseInt(breakpoints.lg));
		};
		handleResize()
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const showProfile = !(isProjectDetailPage && isMobile);

	return (
		<LayoutContainer>
			{isMobile && (
				<MobileNavbarContainer>
					<Navbar isMobile={isMobile} />
				</MobileNavbarContainer>
			)}

			{showProfile && (
				<LeftSection>
					<LeftSectionContent>
						<ProfileCardWrapper>
							<ProfileCard />
						</ProfileCardWrapper>
					</LeftSectionContent>
				</LeftSection>
			)}

			<RightSection>
				{!isMobile && (
					<DesktopNavbarContainer>
						<Navbar isMobile={isMobile} />
					</DesktopNavbarContainer>
				)}
				<RightSectionContent>
					{children}
				</RightSectionContent>
			</RightSection>
		</LayoutContainer>
	);

};

export default Layout;
