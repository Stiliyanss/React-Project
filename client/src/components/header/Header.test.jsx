import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { UserContext } from '../../contexts/UserContext';

// Helper to render with router and context
const renderHeader = (user = {}) => {
  return render(
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <Header />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

describe('Header component', () => {
  it('renders static links: Home, Catalog, About, Contact', () => {
    renderHeader();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('shows Login and Register when user is not logged in', () => {
    renderHeader({ email: null });

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
    expect(screen.queryByText('Create Car')).not.toBeInTheDocument();
  });

  it('shows Create Car, Logout, and email when user is logged in', () => {
    const userEmail = 'test@autox.com';
    renderHeader({ email: userEmail });

    expect(screen.getByText('Create Car')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
    expect(screen.getByText(userEmail)).toBeInTheDocument();
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
    expect(screen.queryByText('Register')).not.toBeInTheDocument();
  });

  it('renders AutoX logo with link to home', () => {
    renderHeader();
    const logo = screen.getByText('AutoX');
    expect(logo.closest('a')).toHaveAttribute('href', '/');
  });
});
