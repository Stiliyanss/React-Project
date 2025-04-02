import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the correct text with current year', () => {
    render(<Footer />);
    
    const year = new Date().getFullYear();
    

    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument();
    expect(screen.getByText(/autox\. all rights reserved/i)).toBeInTheDocument();
  });
});
