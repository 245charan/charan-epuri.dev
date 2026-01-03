import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../redux/slices/themeSlice';
import Navbar from '../components/navbar/Navbar';

const mockStore = configureStore({
  reducer: {
    theme: themeReducer
  }
});

describe('Navbar Component', () => {
  test('renders desktop navbar correctly', () => {
    render(
      <Provider store={mockStore}>
        <Navbar isMobile={false} />
      </Provider>
    );
    
    expect(screen.getByText('Charan Epuri')).toBeInTheDocument();
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
  
  test('renders mobile navbar correctly', () => {
    render(
      <Provider store={mockStore}>
        <Navbar isMobile={true} />
      </Provider>
    );
    
    expect(screen.getByText('Charan Epuri')).toBeInTheDocument();
    
    const menuToggleButton = screen.getByRole('button');
    expect(menuToggleButton).toBeInTheDocument();
    
    expect(screen.queryByText('Home')).not.toBeVisible();
    
    fireEvent.click(menuToggleButton);
    
    expect(screen.getByText('Home')).toBeVisible();
    expect(screen.getByText('About')).toBeVisible();
    expect(screen.getByText('Skills')).toBeVisible();
    expect(screen.getByText('Projects')).toBeVisible();
    expect(screen.getByText('Experience')).toBeVisible();
    expect(screen.getByText('Contact')).toBeVisible();
  });
});
