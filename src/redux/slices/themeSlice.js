import { createSlice } from '@reduxjs/toolkit';

// Define the initial theme options
const themes = {
	dark: {
		primary: '#914bf1',
		background: '#1e1e1e',
		card: '#121212',
		text: '#ffffff',
	},
	light: {
		primary: '#8a56ff',
		background: '#f5f5f5',
		card: '#ffffff',
		text: '#333333',
	},
	purple: {
		primary: '#8a56ff',
		background: '#1a1025',
		card: '#261a35',
		text: '#ffffff',
	},
	ocean: {
		primary: '#56a0ff',
		background: '#0a192f',
		card: '#112240',
		text: '#e6f1ff',
	},
  lavender: {
    primary: '#7b68ee',
    background: '#f5f3ff',
    text: '#333333',
    card: '#ffffff',
  },
	sunset: {
		primary: '#ff7e45',
		background: '#fff9f5',
		card: '#ffffff',
		text: '#dffcef',
	},
};

const initialState = {
	themeName: 'dark',
	currentTheme: themes.dark,
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
