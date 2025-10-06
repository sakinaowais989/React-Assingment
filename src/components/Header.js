import React from 'react';

function Header() {
  return (
    <header
      style={{
        backgroundColor: '#7c65ffff',
        padding: '15px',
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      }}
    >
      <h1 style={{ marginBottom: '8px' }}>My React Components App</h1>
      <nav>
        <a href="#" style={{ color: 'white', margin: '0 12px', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: 'white', margin: '0 12px', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ color: 'white', margin: '0 12px', textDecoration: 'none' }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
