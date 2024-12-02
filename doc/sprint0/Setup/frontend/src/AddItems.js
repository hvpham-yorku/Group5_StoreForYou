import React, { useState } from 'react';
import './AddItems.css';


function AddItems(){
    const [product, setProduct] = useState({ name: '', price: '', description: '', stock: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [added, setAdded] = useState(false);

    const add = async (p) => {  
        const response = await fetch('http://localhost:5000/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(p),
        });
  
        if (response.ok) {
          console.log(`Product "${p.name}" added successfully!`);
        } else {
          console.error(`Failed to add product "${p.name}".`);
        }
  
    };
    const clickAdded = async () => {
        await add({ name: product.name, price: parseFloat(product.price), description: product.description, stock: parseInt(product.stock)});
        alert('New product added successfully!');
        setProduct({name: '', price: '', description: '', stock: ''})
        console.log("ohoho");
        setAdded(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));;
    };
  
    return(
        <div>
            <div className='infobox'>
                <div className='titleshow'><h2>DETAILS</h2></div> 
                <form onSubmit={clickAdded}>
                    <div className='textbox'>
                        <label> 
                            <div className='textline'>
                                <span className='prefix'>Name</span><span className='content'>
                                    <input className='inputB' type="text" placeholder='required' name='name' value={product.name} onChange={handleChange} required /></span> 
                            </div>
                            
                            <div className='textline'>
                                <span className='prefix'>Price</span><span className='content'>
                                    <input className='inputB' type="number" placeholder='required' name='price' value={product.price} onChange={handleChange} required/></span>
                            </div>
                            
                            <div className='textline'>
                                <span className='prefix'>Description</span><span className='content'>
                                    <input className='inputB' type="text" placeholder='optional' name='description' value={product.description} onChange={handleChange} /></span>
                            </div>

                            <div className='textline'>
                                <span className='prefix'>Quantity</span><span className='content'>
                                    <input className='inputB' type="number" placeholder='required' name='stock' value={product.stock} onChange={handleChange} required/></span>
                            </div>
                            
                        </label>
                        
                    </div>
                    <button type='submit' >Add new product</button>
                </form>
                <br></br>
            </div>

        </div>
    );

}


export default AddItems;