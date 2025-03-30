import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-700">
      &copy; {new Date().getFullYear()} AutoX. All rights reserved.
    </footer>
  );
};

export default Footer;
