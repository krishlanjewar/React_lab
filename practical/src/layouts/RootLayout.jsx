import React from 'react';
import './Layout.css';

const Header = () => (
  <header className="header">
    <div className="container header-inner">
      <div className="logo">
        <span style={{ color: 'var(--indigo-500)' }}>⚛</span> React Labs
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Profile</a>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      &copy; {new Date().getFullYear()} React Labs. Professional Edition.
    </div>
  </footer>
);

export const RootLayout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};
