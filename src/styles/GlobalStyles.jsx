import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${props => props.theme.primary};
    --primary-color-rgb: ${props => {
      // Convert hex to rgb
      const hex = props.theme.primary.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `${r}, ${g}, ${b}`;
    }};
    --background-color: ${props => props.theme.background};
    --card-background: ${props => props.theme.card};
    --text-color: ${props => props.theme.text};
    // --text-secondary: ${props => props.theme.text === '#ffffff' ? '#ffffff' : '#333333'};
    --text-secondary: ${props => props.theme.secondaryText};
    --border-radius: 1rem;
    --card-shadow: 0 .25rem 1.25rem rgba(0, 0, 0, 0.15);
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Roboto', 'Helvetica Neue', sans-serif;
    background: linear-gradient(90deg, rgba(249, 247, 247, 0.7), rgba(241, 239, 239, 0.7));
    color: var(--text-color);
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
    position: relative;
  }
  
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(90deg, rgba(249, 247, 247, 0.7), rgba(241, 239, 239, 0.7));
    opacity: 0.8;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  section {
    margin-bottom: 3rem;
  }

  .container {
    width: 100%;
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -.625rem;
      left: 0;
      width: 3.125rem;
      height: .1875rem;
      background-color: var(--primary-color);
    }
  }

  .card {
    background-color: var(--card-background);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: var(--card-shadow);
    transition: var(--transition);
    
    &:hover {
      transform: translateY(-.3125rem);
      box-shadow: 0 .625rem 1.875rem rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 1.75rem;
    }
  }
`;

export default GlobalStyles;
