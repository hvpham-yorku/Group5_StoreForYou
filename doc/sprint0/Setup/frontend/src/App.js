import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await axios.get('http://localhost:5000');
      setMessage(response.data);
    } catch (error) {
      setMessage('Error connecting to the backend');
    }
  };

  return (
    <div className="App">
      <h1>E-commerce Platform</h1>
      <button onClick={fetchMessage}>Test Backend Connection</button>
      <p>{message}</p>
    </div>
  );
}

export default App;