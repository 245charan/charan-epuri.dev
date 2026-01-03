import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer, { setTheme } from '../redux/slices/themeSlice';
import ThemeCustomizer from '../components/theme/ThemeCustomizer';

const createMockStore = (initialState) => {
  return configureStore({
    reducer: {
      theme: themeReducer
    },
    preloadedState: {
      theme: initialState
    }
  });
};

describe('ThemeCustomizer Component', () => {
  const initialThemeState = {
    themeName: 'dark',
    currentTheme: {
      primary: '#8a56ff',
      background: '#121212',
      card: '#1e1e1e',
      text: '#ffffff'
    },
    themes: {
      dark: {
        primary: '#8a56ff',
        background: '#121212',
        card: '#1e1e1e',
        text: '#ffffff'
      },
      light: {
        primary: '#8a56ff',
        background: '#f5f5f5',
        card: '#ffffff',
        text: '#333333'
      }
    }
  };

  test('renders theme customizer button', () => {
    const mockStore = createMockStore(initialThemeState);
    
    render(
      <Provider store={mockStore}>
        <ThemeCustomizer />
      </Provider>
    );
    
    const customizerButton = screen.getByRole('button');
    expect(customizerButton).toBeInTheDocument();
  });
  
  test('opens theme panel when button is clicked', () => {
    const mockStore = createMockStore(initialThemeState);
    
    render(
      <Provider store={mockStore}>
        <ThemeCustomizer />
      </Provider>
    );
    
    expect(screen.queryByText('Theme Customizer')).not.toBeVisible();
    
    const customizerButton = screen.getByRole('button');
    fireEvent.click(customizerButton);
    
    expect(screen.getByText('Theme Customizer')).toBeVisible();
    expect(screen.getByText('Choose Theme')).toBeVisible();
    expect(screen.getByText('Customize Colors')).toBeVisible();
  });
  
  test('changes theme when a theme option is clicked', () => {
    const mockStore = createMockStore(initialThemeState);
    
    render(
      <Provider store={mockStore}>
        <ThemeCustomizer />
      </Provider>
    );
    
    const customizerButton = screen.getByRole('button');
    fireEvent.click(customizerButton);
    
    const themeOptions = screen.getAllByRole('button');
    fireEvent.click(themeOptions[2]);
    
    const actions = mockStore.getActions();
    expect(actions).toContainEqual(expect.objectContaining({
      type: 'theme/setTheme',
      payload: expect.any(String)
    }));
  });
});
