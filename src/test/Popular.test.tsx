import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Popular from '../components/Popular/Popular';


jest.mock('react-icons/io', () => ({
  IoIosAdd: () => <div data-testid="io-ios-add" />,
}));

describe('Popular', () => {
  beforeEach(() => {
    render(<Popular />);
  });

  test('renders the "Popular on Spectra" heading', () => {
    expect(screen.getByText('Popular on Spectra')).toBeInTheDocument();
  });

  test('renders the "See More >" link', () => {
    expect(screen.getByText('See More >')).toBeInTheDocument();
  });

  test('renders all four images', () => {
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(4);
  });

  test('renders the correct titles for each show', () => {
    expect(screen.getByText('Friends')).toBeInTheDocument();
    expect(screen.getByText('The Green Planet')).toBeInTheDocument();
    expect(screen.getByText('Game of Thrones')).toBeInTheDocument();
    expect(screen.getByText('Sherlock Holmes')).toBeInTheDocument();
  });

  test('renders the correct number of episodes for each show', () => {
    expect(screen.getByText('267 Ep')).toBeInTheDocument();
    expect(screen.getByText('6Ep')).toBeInTheDocument();
    expect(screen.getByText('120 Ep')).toBeInTheDocument();
    expect(screen.getByText('80 Ep')).toBeInTheDocument();
  });

  test('renders the correct subtitles for each show', () => {
    expect(screen.getByText('Sitcom')).toBeInTheDocument();
    expect(screen.getByText('Documentary')).toBeInTheDocument();
    expect(screen.getByText('Fantasy')).toBeInTheDocument();
    expect(screen.getByText('Thriller')).toBeInTheDocument();
  });

  test('renders star ratings for each show', () => {
    const stars = screen.getAllByText('★');
    expect(stars).toHaveLength(20); 
  });

  test('renders "Watch" buttons for each show', () => {
    const watchButtons = screen.getAllByText('Watch');
    expect(watchButtons).toHaveLength(4);
  });

  test('renders add buttons for each show', () => {
    const addButtons = screen.getAllByTestId('io-ios-add');
    expect(addButtons).toHaveLength(4);
  });
});