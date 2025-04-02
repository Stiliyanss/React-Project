import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CarCatalogItem from './CarCatalogItem';

const mockCar = {
  brand: 'AutoX',
  model: 'Volt-X',
  horsepower: 410,
  year: 2023,
  description: 'A sleek and powerful EV.',
  imageUrl: 'https://example.com/car.jpg',
  _id: 'abc123'
};

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('CarCatalogItem', () => {
  it('renders car image with correct alt text and src', () => {
    renderWithRouter(<CarCatalogItem {...mockCar} />);
    const image = screen.getByAltText(mockCar.model);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockCar.imageUrl);
  });

  it('renders brand and model', () => {
    renderWithRouter(<CarCatalogItem {...mockCar} />);
    expect(screen.getByText(`${mockCar.brand} ${mockCar.model}`)).toBeInTheDocument();
  });

  it('renders horsepower and year', () => {
    renderWithRouter(<CarCatalogItem {...mockCar} />);
    expect(screen.getByText(`Horsepower: ${mockCar.horsepower} HP`)).toBeInTheDocument();
    expect(screen.getByText(`Year: ${mockCar.year}`)).toBeInTheDocument();
  });

  it('renders a working Details link with correct path', () => {
    renderWithRouter(<CarCatalogItem {...mockCar} />);
    const link = screen.getByRole('link', { name: /details/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/cars/${mockCar._id}/details`);
  });
});
