import './App.css';
import Search from './home/Search';
import Show from './home/Show';
import Menu from './home/Menu';
import ProductInfo from './home/ProductInfo';

function App() {
  return (
    <div className="App">
     
      <body>
      <Search />
      <Show />
      <ProductInfo />
      </body>
      <footer className="bar">   <Menu /></footer>
    </div>
    
  );
}

export default App;
