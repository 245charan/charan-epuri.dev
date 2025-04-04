import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import ThemeCustomizer from './components/theme/ThemeCustomizer';
import PageLoader from './components/loader/PageLoader';
import ProgressBar from './components/progress/ProgressBar';

// const Skills = React.lazy(() => import('./sections/Skills'));
// const Projects = React.lazy(() => import('./sections/Projects'));
// const Experience = React.lazy(() => import('./sections/Experience'));
// const Contact = React.lazy(() => import('./sections/Contact'));

const ThemedApp = () => {
	const { currentTheme } = useSelector((state) => state.theme);

	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyles />
			<PageLoader />
			<Layout>
				<section id='home'>
					<Hero />
				</section>
				<section id='about'>
					<About />
				</section>
				<section id='skills'>
					<Skills />
				</section>
				<section id='projects'>
					<Projects />
				</section>
				<section id='experience'>
					<Experience />
				</section>
				<section id='contact'>
					<Contact />
				</section>
			</Layout>
			<ThemeCustomizer />
		</ThemeProvider>
	);
};

const App = () => {
	return (
		<Provider store={store}>
			<ProgressBar />
			<ThemedApp />
		</Provider>
	);
};

export default App;
