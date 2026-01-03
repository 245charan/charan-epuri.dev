import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import ThemeCustomizer from './components/theme/ThemeCustomizer';
import PageLoader from './components/loader/PageLoader';
import ProgressBar from './components/progress/ProgressBar';
import ProjectDetailPage from './components/projects/ProjectDetailPage';
import HomePage from './components/home/HomePage';
import Joyride from 'react-joyride';
import { initClarity, trackEvent, setTag } from './utils/clarity';
import { media } from './styles/Responsive';

const AppContainer = styled.div`
	background-color: var(--background-color);
`;
const AppContainerMargin = styled.div`
	max-width: calc(var(--inset-max-width) + var(--padding-inline) * 2);
	margin: 0 auto;
	padding: 0 var(--padding-inline);
	width: 100%;

	${media.mobile`
		padding: 0;
	`}
	${media.tablet`
		padding: 0;
	`}
`;

const ThemedApp = () => {
	const { currentTheme } = useSelector((state) => state.theme);

	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyles />
			<PageLoader />
			<Layout>
				<Routes>
					<Route
						path='/charan-epuri.dev'
						element={<HomePage />}
					/>

					<Route
						path='/charan-epuri.dev/:projectId'
						element={<ProjectDetailPage />}
					/>
				</Routes>
			</Layout>
			<ThemeCustomizer />
		</ThemeProvider>
	);
};

const App = () => {
	const [runTour, setRunTour] = useState(true);
	const location = useLocation();
	const steps = [
		{
			target: '#talk',
			content: (
				<div>
					<h3>Available for work ☕</h3>
					<p>Let's discuss opportunities</p>
				</div>
			),
			placement: 'top-start',
		},
		{
			target: '#theme-customize',
			content: (
				<div>
					<h3>Pick your colors 🎨</h3>
				</div>
			),
			placement: 'top',
		},
		{
			target: '#project-toggle',
			content: (
				<div>
					<h3>Toggle view 🔁</h3>
				</div>
			),
			placement: 'top',
		},
		{
			target: '.exp-card',
			content: (
				<div>
					<h3>Click to expand</h3>
				</div>
			),
			placement: 'bottom',
		},
		{
			target: '#scroll',
			content: (
				<div>
					<h3>Scroll fatigue? Try gravity 🚀</h3>
				</div>
			),
			placement: 'bottom',
		},
	];

	useEffect(() => {
		initClarity();
	}, []);

	useEffect(() => {
		const pageId = location.pathname + location.hash;
	}, [location]);

	useEffect(() => {
		window.scrollTo(window.scrollX, window.scrollY + 1);
		window.scrollTo(window.scrollX, window.scrollY - 1);
	}, [location]);

	useEffect(() => {
		const timer = setTimeout(() => setRunTour(true), 300);
		return () => clearTimeout(timer);
	}, []);
	return (
		<Provider store={store}>
			<Joyride
				steps={steps}
				run={runTour}
				continuous
				showProgress
				showSkipButton
				scrollOffset={360}
				scrollToFirstStep
				styles={{
					options: {
						zIndex: 10000,
						borderRadius: '1.5rem',
						display: 'inline-block',
					},
				}}
			/>
			<ProgressBar />

			<AppContainer>
				<AppContainerMargin>
					<ThemedApp />
				</AppContainerMargin>
			</AppContainer>
		</Provider>
	);
};

export default App;
