import React, { useEffect } from 'react';
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
	const location = useLocation();

	useEffect(() => {
		// Force recalculation of progress bar when location changes
		window.scrollTo(window.scrollX, window.scrollY + 1);
		window.scrollTo(window.scrollX, window.scrollY - 1);
	}, [location]);
	return (
		<Provider store={store}>
			<ProgressBar />
			<ThemedApp />
		</Provider>
	);
};

export default App;
