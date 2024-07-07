import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Navbar/Navbar'; 


jest.mock('../components/RightHand/RightHand', () => ({
  RightHand: () => <div data-testid="right-hand">Mocked RightHand</div>
}));

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('Layout', () => {
  test('renders the SPECTRA logo', () => {
    renderWithRouter(<Layout />);
    const logoElement = screen.getByText(/SPECTRA/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithRouter(<Layout />);
    const moviesLink = screen.getByText(/Movies/i);
    const tvShowsLink = screen.getByText(/TV Shows/i);
    const discoverLink = screen.getByText(/Discover/i);

    expect(moviesLink).toBeInTheDocument();
    expect(tvShowsLink).toBeInTheDocument();
    expect(discoverLink).toBeInTheDocument();
  });

  test('applies active class to TV Shows link when on home route', () => {
    renderWithRouter(<Layout />, { route: '/' });
    const tvShowsLink = screen.getByText(/TV Shows/i);
    expect(tvShowsLink).toHaveClass('text-[#b7f7e3]');
    expect(tvShowsLink).toHaveClass('border-b-4');
  });

  test('applies active class to Discover link when on discover route', () => {
    renderWithRouter(<Layout />, { route: '/discover' });
    const discoverLink = screen.getByText(/Discover/i);
    expect(discoverLink).toHaveClass('text-[#b7f7e3]');
    expect(discoverLink).toHaveClass('border-b-4');
  });

  test('renders RightHand component', () => {
    renderWithRouter(<Layout />);
    const rightHandComponent = screen.getByTestId('right-hand');
    expect(rightHandComponent).toBeInTheDocument();
  });
});