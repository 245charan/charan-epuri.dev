import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, setCustomTheme } from '../../redux/slices/themeSlice';
import { FaPalette, FaTimes, FaCheck } from 'react-icons/fa';
import { media } from '../../styles/Responsive';

const CustomizerButton = styled.button`
	position: fixed;
	bottom: 1.875rem;
	right: 1.875rem;
	width: 3.125rem;
	height: 3.125rem;
	border-radius: 50%;
	background-color: var(--primary-color);
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	box-shadow: 0 .25rem .9375rem rgba(0, 0, 0, 0.2);
	cursor: pointer;
	z-index: 999;
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.1);
	}

	${media.mobile`
    width: 2.8125rem;
    height: 2.8125rem;
    bottom: 1.25rem;
    right: 1.25rem;
  `}
`;

const CustomizerPanel = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 18.75rem;
	height: 100vh;
	background-color: var(--card-background);
	box-shadow: -0.3125rem 0 .9375rem rgba(0, 0, 0, 0.1);
	z-index: 1000;
	transform: ${({ isOpen }) =>
		isOpen ? 'translateX(0)' : 'translateX(100%)'};
	transition: transform 0.3s ease-in-out;
	display: flex;
	flex-direction: column;

	${media.mobile`
    width: 100%;
  `}
`;

const CustomizerHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	border-bottom: .0625rem solid rgba(255, 255, 255, 0.1);
`;

const CustomizerTitle = styled.h3`
	display: flex;
	align-items: center;
	gap: 8px;
	margin: 0;
	color: var(--text-color);
`;

const CloseButton = styled.button`
	background: transparent;
	border: none;
	color: var(--text-color);
	font-size: 19.2px;
	cursor: pointer;

	&:hover {
		color: var(--primary-color);
	}
`;

const CustomizerContent = styled.div`
	padding: 16px;
	overflow-y: auto;
	flex: 1;

	${media.mobile`
    padding: 24px;
  `}
`;

const SectionTitle = styled.h4`
	margin: 24px 0 16px;
	color: var(--text-color);
	font-size: 16px;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: -0.3125rem;
		left: 0;
		width: 1.875rem;
		height: .125rem;
		background-color: var(--primary-color);
	}

	&:first-child {
		margin-top: 0;
	}
`;

const ThemeGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 16px;
	margin-bottom: 24px;

	${media.mobile`
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  `}
`;

const ThemeOption = styled.div`
	position: relative;
	cursor: pointer;
	border-radius: .5rem;
	overflow: hidden;
	border: .125rem solid
		${(props) => (props.isActive ? 'var(--primary-color)' : 'transparent')};
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-0.1875rem);
	}
	order: ${(props) => props.desktopThemeOrder};

	${media.mobile`
    height: 5rem;
	order: ${(props) => props.mobileThemeOrder};
  `}
`;

const ThemePreview = styled.div`
	width: 100%;
	height: 3.75rem;
	display: flex;
	flex-direction: column;

	${media.mobile`
    height: 100%;
  `}
`;

const ThemePreviewTop = styled.div`
	height: 60%;
	background-color: ${(props) => props.color};
`;
const ThemePreviewSidebar = styled.div`
	position: absolute;
	top: 1.875rem;
	left: .625rem;
	width: .9375rem;
	height: 2.5rem;
	background-color: ${(props) => props.color};
	border-radius: .1875rem;
`;
const ThemePreviewBottom = styled.div`
	height: 40%;
	background-color: ${(props) => props.color};
`;

const ActiveIndicator = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	background-color: var(--primary-color);
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
`;

const ColorPickerGroup = styled.div`
	margin-bottom: 16px;

	${media.mobile`
    margin-bottom: 24px;
  `}
`;

const ColorPickerLabel = styled.label`
	display: block;
	margin-bottom: 8px;
	color: var(--text-color);
	font-size: 14.4px;

	${media.mobile`
    font-size: 16px;
  `}
`;

const ColorPickerWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const ColorPreview = styled.div`
	width: 1.875rem;
	height: 1.875rem;
	border-radius: .25rem;
	background-color: ${(props) => props.color};
	margin-right: 8px;
	border: .0625rem solid rgba(255, 255, 255, 0.1);

	${media.mobile`
    width: 2.5rem;
    height: 2.5rem;
  `}
`;

const ColorInput = styled.input`
	width: 100%;
	height: 2.5rem;
	border: none;
	background: transparent;
	cursor: pointer;

	&::-webkit-color-swatch-wrapper {
		padding: 0;
	}

	&::-webkit-color-swatch {
		border: none;
		border-radius: .25rem;
	}

	${media.mobile`
    height: 3.125rem;
  `}
`;

const ResetButton = styled.button`
	width: 100%;
	padding: 12px;
	margin-top: 24px;
	background-color: transparent;
	border: .125rem solid var(--primary-color);
	color: var(--text-color);
	border-radius: .5rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: var(--primary-color);
		color: white;
	}

	${media.mobile`
    padding: 16px;
    font-size: 17.6px;
  `}
`;

const ThemeCustomizer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();
	const { currentTheme, themeName } = useSelector((state) => state.theme);

	const toggleCustomizer = () => {
		setIsOpen(!isOpen);
	};

	const themeOrder = {
		desktop: ['light', 'sunset', 'red', 'dark', 'purple', 'ocean'],
		mobile: ['dark', 'light', 'ocean', 'sunset', 'purple',  'red'],
	};

	const predefinedThemes = [
		{
			name: 'dark',
			primary: '#914bf1',
			background: '#101112',
			card: '#272829',
			text: '#ffffff',
			secondaryText: '#ffffff',
			desktopThemeOrder: 4,
			mobileThemeOrder: 6,
		},
		{
			name: 'light',
			primary: '#8a56ff',
			background: '#f5f5f5',
			card: '#ffffff',
			text: '#333333',
			secondaryText: '#333333',
			desktopThemeOrder: 1,
			mobileThemeOrder: 5,
		},
		{
			name: 'purple',
			primary: '#8a56ff',
			background: '#1a1025',
			card: '#261a35',
			text: '#ffffff',
			secondaryText: '#ffffff',
			desktopThemeOrder: 6,
			mobileThemeOrder: 2,
		},
		{
			name: 'ocean',
			primary: '#56a0ff',
			background: '#0a192f',
			card: '#112240',
			text: '#ffffff',
			secondaryText: '#ffffff',
			desktopThemeOrder: 5,
			mobileThemeOrder: 4,
		},
		{
			name: 'red',
			primary: '#b31b1b',
			background: '#f5f3ff',
			card: '#ffffff',
			text: '#333333',
			secondaryText: '#333333',
			desktopThemeOrder: 2,
			mobileThemeOrder: 1,
			// secondary: '#5a4fcf',
			// buttonPrimary: '#7b68ee',
			// buttonPrimaryHover: '#5a4fcf',
		},
		{
			name: 'sunset',
			primary: '#ff671f',
			background: '#fff9f5',
			// background: '#ff7e45',
			card: '#ffffff',
			text: '#333333',
			secondaryText: '#333333',
			desktopThemeOrder: 3,
			mobileThemeOrder: 3,
			// background: '#fff9f5',
			// secondary: '#e85d04',
			// buttonPrimary: '#ff7e45',
			// buttonPrimaryHover: '#e85d04',
		},
	];

	const handleThemeChange = (theme) => {
		dispatch(setTheme(theme));
	};

	const handleColorChange = (colorType, color) => {
		dispatch(setCustomTheme({ [colorType]: color }));
	};

	const resetToDefault = () => {
		dispatch(setTheme('dark'));
	};

	return (
		<>
			<CustomizerButton onClick={toggleCustomizer}>
				<FaPalette />
			</CustomizerButton>

			<CustomizerPanel isOpen={isOpen}>
				<CustomizerHeader>
					<CustomizerTitle>
						<FaPalette /> Theme Customizer
					</CustomizerTitle>
					<CloseButton onClick={toggleCustomizer}>
						<FaTimes />
					</CloseButton>
				</CustomizerHeader>

				<CustomizerContent>
					<SectionTitle>Choose Theme</SectionTitle>
					<ThemeGrid>
						{predefinedThemes.map((theme) => (
							<ThemeOption
								key={theme.name}
								isActive={themeName === theme.name}
								onClick={() => handleThemeChange(theme.name)}
								mobileThemeOrder={theme.mobileThemeOrder}
								desktopThemeOrder={theme.desktopThemeOrder}
								>
								<ThemePreview>
									<ThemePreviewTop color={theme.background} />
									<ThemePreviewSidebar
										color={theme.primary}
									/>
									<ThemePreviewBottom color={theme.card} />
								</ThemePreview>
								{themeName === theme.name && (
									<ActiveIndicator>
										<FaCheck />
									</ActiveIndicator>
								)}
							</ThemeOption>
						))}
					</ThemeGrid>

					<SectionTitle>Customize Colors</SectionTitle>

					<ColorPickerGroup>
						<ColorPickerLabel>Primary Color</ColorPickerLabel>
						<ColorPickerWrapper>
							<ColorPreview color={currentTheme.primary} />
							<ColorInput
								type='color'
								value={currentTheme.primary}
								onChange={(e) =>
									handleColorChange('primary', e.target.value)
								}
							/>
						</ColorPickerWrapper>
					</ColorPickerGroup>

					<ColorPickerGroup>
						<ColorPickerLabel>Background Color</ColorPickerLabel>
						<ColorPickerWrapper>
							<ColorPreview color={currentTheme.background} />
							<ColorInput
								type='color'
								value={currentTheme.background}
								onChange={(e) =>
									handleColorChange(
										'background',
										e.target.value
									)
								}
							/>
						</ColorPickerWrapper>
					</ColorPickerGroup>

					<ColorPickerGroup>
						<ColorPickerLabel>Card Background</ColorPickerLabel>
						<ColorPickerWrapper>
							<ColorPreview color={currentTheme.card} />
							<ColorInput
								type='color'
								value={currentTheme.card}
								onChange={(e) =>
									handleColorChange('card', e.target.value)
								}
							/>
						</ColorPickerWrapper>
					</ColorPickerGroup>

					<ColorPickerGroup>
						<ColorPickerLabel>Text Color</ColorPickerLabel>
						<ColorPickerWrapper>
							<ColorPreview color={currentTheme.text} />
							<ColorInput
								type='color'
								value={currentTheme.text}
								onChange={(e) =>
									handleColorChange('text', e.target.value)
								}
							/>
						</ColorPickerWrapper>
					</ColorPickerGroup>

					<ResetButton onClick={resetToDefault}>
						Reset to Default
					</ResetButton>
				</CustomizerContent>
			</CustomizerPanel>
		</>
	);
};

export default ThemeCustomizer;
