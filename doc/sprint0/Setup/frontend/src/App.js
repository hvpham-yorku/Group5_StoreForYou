import React, { useState } from 'react';
import axios from 'axios';


import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import ProductInfo from './home/ProductInfo';
import Search from './Search.js';
import Show from './home/Show';
import Menu from './home/Menu';
import './App.css';

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
			<body>
				<Search/>
				<Show/>
				<ProductInfo/>
			</body>
			<footer className = "bar">  <Menu /> </footer>
		</div>
	</AuthProvider>
  );
}

export default App;