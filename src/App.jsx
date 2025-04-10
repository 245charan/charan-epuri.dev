import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from 'styled-components';
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
					<h3>Let’s chat! ☕</h3>
				</div>
			),
			placement: 'top-start',
		},
		{
			target: '#theme-customize',
			content: (
				<div>
					<h3>Style your vibe 🎨</h3>
				</div>
			),
			placement: 'top',
		},
		{
			target: '#project-toggle',
			content: (
				<div>
					<h3>Switch the view 🔁</h3>
				</div>
			),
			placement: 'top',
		},
		{
			target: '#scroll',
			content: (
				<div>
					<h3>Scroll fatigue ? Feel Gravity on click 🚀</h3>
				</div>
			),
			placement: 'bottom',
		},
		{
			target: '#about',
			content: (
				<div>
					<h3>Know me 👨‍💻</h3>
				</div>
			),
			placement: 'top',
		},
		{
			target: '#projects',
			content: (
				<div>
					<h3>Explore projects 🔍</h3>
				</div>
			),
			placement: 'bottom',
		},
		{
			target: '#skills',
			content: (
				<div>
					<h3>Toolbox peek 🛠️</h3>
				</div>
			),
			placement: 'bottom',
		},
		{
			target: '#experience',
			content: (
				<div>
					<h3>Track my path 🧭</h3>
				</div>
			),
			placement: 'bottom',
		},
		{
			target: '#contact',
			content: (
				<div>
					<h3>Say hi! 👋</h3>
				</div>
			),
			placement: 'bottom',
		},
	];

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
			<ThemedApp />
		</Provider>
	);
};

export default App;
