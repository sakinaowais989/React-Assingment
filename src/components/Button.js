import React from 'react';

function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#00BFA6',
        border: 'none',
        borderRadius: '6px',
        padding: '8px 14px',
        cursor: 'pointer',
        fontSize: '15px',
        color: 'white',
        transition: '0.3s ease',
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = '#00997F')}
      onMouseOut={(e) => (e.target.style.backgroundColor = '#00BFA6')}
    >
      {text}
    </button>
  );
}

export default Button;
