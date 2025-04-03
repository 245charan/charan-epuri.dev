import { createSlice } from '@reduxjs/toolkit';

// Define the initial theme options
const themes = {
	sunset: {
		primary: '#FF671F',
		background: '#FFF9F5',
		card: '#FFFFFF',
		text: '#333333',
		secondaryText: '#333333',
	},
	midnightTeal: {
		primary: '#0EA5E9',
		background: '#0F1729',
		card: '#1E2A3B',
		text: '#F1F5F9',
		secondaryText: '#94A3B8',
	},
	carbonViolet: {
		primary: '#A855F7',
		background: '#18181B',
		card: '#27272A',
		text: '#FAFAFA',
		secondaryText: '#A1A1AA',
	},
	lavenderFrost: {
		primary: '#7C3AED',
		background: '#F5F3FF',
		card: '#FFFFFF',
		text: '#1F2937',
		secondaryText: '#4B5563',
	},
	mintBreeze: {
		primary: '#059669',
		background: '#ECFDF5',
		card: '#FFFFFF',
		text: '#111827',
		secondaryText: '#374151',
	},
	skyAzure: {
		primary: '#3B82F6',
		background: '#F0F9FF',
		card: '#FFFFFF',
		text: '#0F172A',
		secondaryText: '#334155',
	},
};

const initialState = {
	themeName: 'sunset',
	currentTheme: themes.sunset,
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
