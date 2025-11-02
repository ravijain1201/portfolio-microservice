import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('http://localhost:8080/hello')
      .then(response => response.text())
      .then(data => {
        setMessage(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage('Error connecting to backend');
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Full Stack Application</h1>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <p style={{ fontSize: '24px', color: '#61dafb' }}>{message}</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
