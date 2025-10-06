import React, { useState } from 'react';
import Button from './Button';

function Form() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name || 'Guest'}!`);
    setName('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        textAlign: 'center',
        marginTop: '40px',
        backgroundColor: '#F5F5F5',
        padding: '20px',
        borderRadius: '10px',
        width: '300px',
        margin: '40px auto',
        boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
      }}
    >
      <h3 style={{ marginBottom: '15px', color: '#333' }}>Enter Your Name</h3>
      <input
        type="text"
        placeholder="Type here..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '80%',
          marginBottom: '10px',
        }}
      />
      <br />
      <Button text="Submit" />
    </form>
  );
}

export default Form;
