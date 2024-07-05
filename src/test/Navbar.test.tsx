import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '@/components/Navbar/Navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar', () => {
  test('renders the SPECTRA logo', () => {
    render(<Navbar />);
    const logoElement = screen.getByText(/SPECTRA/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Navbar />);
    const moviesLink = screen.getByText(/Movies/i);
    const tvShowsLink = screen.getByText(/TV Shows/i);
    const discoverLink = screen.getByText(/Discover/i);

    expect(moviesLink).toBeInTheDocument();
    expect(tvShowsLink).toBeInTheDocument();
    expect(discoverLink).toBeInTheDocument();
  });

  test('applies active class to TV Shows link', () => {
    render(<Navbar />);
    const tvShowsLink = screen.getByText(/TV Shows/i);
    expect(tvShowsLink).toHaveClass('text-[#b7f7e3]');
    expect(tvShowsLink).toHaveClass('border-b-2');
  });

  test('navigates to correct pages on link click', () => {
    render(<Navbar />);
    const moviesLink = screen.getByText(/Movies/i);
    const tvShowsLink = screen.getByText(/TV Shows/i);
    const discoverLink = screen.getByText(/Discover/i);

    userEvent.click(moviesLink);
    expect(window.location.href).toContain('#');

    userEvent.click(tvShowsLink);
    expect(window.location.href).toContain('#');

    userEvent.click(discoverLink);
    expect(window.location.href).toContain('#');
  });
});
