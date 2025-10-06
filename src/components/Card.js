import React from 'react';
import Button from './Button';

function Card() {
  const cards = [
    { id: 1, title: 'React', description: 'A JavaScript library for building user interfaces.', color: '#FFD460' },
    { id: 2, title: 'Vue', description: 'A progressive framework for creating web apps.', color: '#68B984' },
    { id: 3, title: 'Angular', description: 'A powerful framework for scalable web apps.', color: '#FF8C8C' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '40px',
        flexWrap: 'wrap',
      }}
    >
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            backgroundColor: card.color,
            borderRadius: '12px',
            padding: '18px',
            width: '180px',
            textAlign: 'center',
            boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h4 style={{ marginBottom: '10px', color: '#333' }}>{card.title}</h4>
          <p style={{ fontSize: '13px', color: '#333', marginBottom: '12px' }}>{card.description}</p>
          <Button text="Read More" onClick={() => alert(`More about ${card.title}`)} />
        </div>
      ))}
    </div>
  );
}

export default Card;
