import React from 'react';
import './Search.css';


function Search() {
  return (
    <div className="SearchBar">
      <div>   <header className="Search">  StoreForYou  </header></div><br/>
   
      <input className='input' type="text" placeholder="Find items for your pets" /> 
       <br/>
       <br/>
       <div className='links'>  <a href='null' >CATEGORY</a> |  <a href='null' >BRAND</a> | <a href='null' >DEALS</a> | <a href='null' >CONTANCT US </a></div>
  
    </div>
  );
}

export default Search;
