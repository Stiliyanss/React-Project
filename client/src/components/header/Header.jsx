import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-6">
 <Link to="/" className="text-2xl font-bold tracking-wide text-white hover:text-gray-300 transition">
        AutoX
      </Link>      <nav className="space-x-6">
        <Link to="/" className="hover:text-gray-400 transition">Home</Link>
        <Link to="/create" className="hover:text-gray-400 transition">Create Car</Link>
        <Link to="/catalog" className="hover:text-gray-400 transition">Catalog</Link>
        <Link to="/about" className="hover:text-gray-400 transition">About</Link>
        <Link to="/login" className="hover:text-gray-400 transition">Login</Link>
        <Link to="/register" className="hover:text-gray-400 transition">Register</Link>
        <Link to="/logout" className="hover:text-gray-400 transition">Logout</Link>
        <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
