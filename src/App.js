import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Form from './components/Form';

function App() {
  return (
    <div>
      <Header />
      <main style={{ textAlign: 'center', marginTop: '20px' }}>
        <Card />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
