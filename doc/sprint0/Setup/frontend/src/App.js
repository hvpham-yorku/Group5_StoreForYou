import React, { useState } from 'react';
import axios from 'axios';


import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';


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
  <AuthProvider>
		<div className="App">
		<h1>E-commerce Platform</h1>
			<button onClick={fetchMessage}>Test Backend Connection</button>
			<p>{message}</p>
			<Login />
		</div>
	</AuthProvider>
  );
}

export default App;