import { createSlice } from '@reduxjs/toolkit';

// Define the initial theme options
const themes = {
	dark: {
		primary: '#914bf1',
		background: '#1e1e1e',
		card: '#121212',
		text: '#ffffff',
		secondaryText: '#ffffff',
	},
	light: {
		primary: '#8a56ff',
		background: '#f5f3ff',
		card: '#ffffff',
		text: '#333333',
		secondaryText: '#333333',

	},
	purple: {
		primary: '#8a56ff',
		background: '#261a35',
		card: '#1a1025',
		text: '#ffffff',
		secondaryText: '#ffffff',
	},
	ocean: {
		primary: '#56a0ff',
		background: '#0a192f',
		card: '#112240',
		text: '#e6f1ff',
		secondaryText: '#ffffff',
	},
	red: {
		primary: '#b31b1b',
		background: '#fff1f1',
		card: '#ffffff',
		text: '#333333', 
		secondaryText: '#333333',
	},
	sunset: {
		primary: '#ff671f',
		background: '#fff9f5',
		card: '#ffffff',
		text: '#333333',
		secondaryText: '#333333',
	},
};

const initialState = {
	themeName: 'red',
	currentTheme: themes.red,
	themes,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action) => {
			const themeName = action.payload;
			if (state.themes[themeName]) {
				state.themeName = themeName;
				state.currentTheme = state.themes[themeName];
			}
		},
		setCustomTheme: (state, action) => {
			state.themeName = 'custom';
			state.currentTheme = {
				...state.currentTheme,
				...action.payload,
			};
			// Add the custom theme to themes object
			state.themes.custom = state.currentTheme;
		},
	},
});

export const { setTheme, setCustomTheme } = themeSlice.actions;
export default themeSlice.reducer;
