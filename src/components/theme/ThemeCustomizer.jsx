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
	box-shadow: 0 0.25rem 0.9375rem rgba(0, 0, 0, 0.2);
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
	box-shadow: -0.3125rem 0 0.9375rem rgba(0, 0, 0, 0.1);
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
	padding: 1rem;
	border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.1);
`;

const CustomizerTitle = styled.h3`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin: 0;
	color: var(--text-color);
`;

const CloseButton = styled.button`
	background: transparent;
	border: none;
	color: var(--text-color);
	font-size: 1.2rem;
	cursor: pointer;

	&:hover {
		color: var(--primary-color);
	}
`;

const CustomizerContent = styled.div`
	padding: 1rem;
	overflow-y: auto;
	flex: 1;

	${media.mobile`
    padding: 1.5rem;
  `}
`;

const SectionTitle = styled.h4`
	margin: 1.5rem 0 1rem;
	color: var(--text-color);
	font-size: 1rem;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: -0.3125rem;
		left: 0;
		width: 1.875rem;
		height: 0.125rem;
		background-color: var(--primary-color);
	}

	&:first-child {
		margin-top: 0;
	}
`;

const ThemeGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	margin-bottom: 1.5rem;

	${media.mobile`
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  `}
`;

const ThemeOption = styled.div`
	position: relative;
	cursor: pointer;
	border-radius: 0.5rem;
	overflow: hidden;
	border: 0.125rem solid
		${(props) => (props.isActive ? 'var(--primary-color)' : 'transparent')};
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-0.1875rem);
	}
	order: ${(props) => props.$desktopThemeOrder};

	${media.mobile`
    height: 5rem;
	order: ${(props) => props.$mobileThemeOrder};
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
	left: 0.625rem;
	width: 0.9375rem;
	height: 2.5rem;
	background-color: ${(props) => props.color};
	border-radius: 0.1875rem;
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
	margin-bottom: 1rem;

	${media.mobile`
    margin-bottom: 1.5rem;
  `}
`;

const ColorPickerLabel = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	color: var(--text-color);
	font-size: 0.9rem;

	${media.mobile`
    font-size: 1rem;
  `}
`;

const ColorPickerWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const ColorPreview = styled.div`
	width: 1.875rem;
	height: 1.875rem;
	border-radius: 0.25rem;
	background-color: ${(props) => props.color};
	margin-right: 0.5rem;
	border: 2px solid rgba(255, 255, 255, 0.1);

	${media.mobile`
		width: 2.5rem;
		height: 2.5rem;
		`}
`;

const ColorInput = styled.input`
	width: 100%;
	height: 2.5rem;
	border-radius: 0.25rem;
	border: 0.0625rem solid rgba(255, 255, 255, 0.1);

	// background: transparent;
	cursor: pointer;

	&::-webkit-color-swatch-wrapper {
		padding: 0;
	}

	&::-webkit-color-swatch {
		border: 0.0625rem solid rgba(255, 255, 255, 0.1);
		border-radius: 0.25rem;
	}

	${media.mobile`
    height: 3.125rem;
  `}
`;

const ResetButton = styled.button`
	width: 100%;
	padding: 0.75rem;
	margin-top: 1.5rem;
	background-color: transparent;
	border: 0.125rem solid var(--primary-color);
	color: var(--text-color);
	border-radius: 0.5rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: var(--primary-color);
		color: white;
	}

	${media.mobile`
    padding: 1rem;
    font-size: 1.1rem;
  `}
`;

const ThemeCustomizer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();
	const { currentTheme, themeName } = useSelector((state) => state.theme);

	const toggleCustomizer = () => {
		setIsOpen(!isOpen);
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
			background: '#f5f3ff',
			card: '#ffffff',
			text: '#333333',
			secondaryText: '#333333',
			desktopThemeOrder: 1,
			mobileThemeOrder: 5,
		},
		{
			name: 'purple',
			primary: '#8a56ff',
			background: '#261a35',
			card: '#1a1025',
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
			background: '#fff1f1',
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
		dispatch(setTheme('red'));
	};

	return (
		<>
			<CustomizerButton
				aria-label ='theme-customizer-button'
				title ='Theme Customizer'
				onClick={toggleCustomizer}>
				<FaPalette />
			</CustomizerButton>

			<CustomizerPanel isOpen={isOpen}>
				<CustomizerHeader>
					<CustomizerTitle>
						<FaPalette /> Theme Customizer
					</CustomizerTitle>
					<CloseButton title='Close' aria-label="close" onClick={toggleCustomizer}>
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
								$mobileThemeOrder={theme.mobileThemeOrder}
								$desktopThemeOrder={theme.desktopThemeOrder}>
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
								aria-label='primary-color'
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
								aria-label='background-color'
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
								aria-label="card-background-color"
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
								aria-label="text-color"
								type='color'
								value={currentTheme.text}
								onChange={(e) =>
									handleColorChange('text', e.target.value)
								}
							/>
						</ColorPickerWrapper>
					</ColorPickerGroup>

					<ResetButton title='Reset' aria-label="reset" onClick={resetToDefault}>
						Reset to Default
					</ResetButton>
				</CustomizerContent>
			</CustomizerPanel>
		</>
	);
};

export default ThemeCustomizer;
