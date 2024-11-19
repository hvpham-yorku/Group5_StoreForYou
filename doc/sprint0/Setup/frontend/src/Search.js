import React, { useState, useEffect } from 'react';

const Search = () => {
    const [searchItem, setSearchItem] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [product, setProduct] = useState({});
    const [clicked, setClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [added, setAdded] = useState(false);

    const initialProducts = ['Jellycat - Betty Corgi', 'Wet Cat Food', 'Dry Cat Food', 'Cat Treats', 'Dog Treats', 'Dog Beds', 'Dog Food']
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
    const addProducts = async () => {
        for (const p of initialProducts) {
            await add({ name: p, price: 10, description: 'some description', stock: 5 });
        }
      };
    const clickAdded = async () => {
        try {
            const response = await fetch('http://localhost:5000/clear', {
              method: 'DELETE',
            });
            
            if (!response.ok) {
              console.error('Failed to clear products');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        await addProducts();
        alert('Products added successfully!');
        setAdded(true);
    };

    const handleProductClick = (product) => {
        setProduct(product);
        setSearchResults([]);
        setSearchItem('');
        setClicked(true);
    }

    useEffect(() => {
        const fetchResults = async () => {
            if (!searchItem.trim()) {
                setSearchResults([]); 
                return;
            }

            setLoading(true);

            try {
                const response = await fetch(`http://localhost:5000/api/products/search?q=${searchItem}`);
                if (response.ok) {
                const data = await response.json();
                setSearchResults(data);
                } else {
                console.error('Failed to fetch results');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        const delayDebounceFn = setTimeout(() => {
        fetchResults();
        }, 300); 

        return () => clearTimeout(delayDebounceFn);
    }, [searchItem]);
    

    return (
        <div id='search_bar'>
            { !added && <button onClick={() => clickAdded()}>Add products for search testing</button>  }
            { added && 
                <input
                type="text"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                placeholder='What are you looking for?'
                />
            }
            {!loading && searchItem &&searchResults.length === 0 && <ul><li>No results found</li></ul>}
            <ul>
                {searchResults.map((product, id) => (
                    <li className='result' key={id} onClick={() => handleProductClick(product)}>{product.name}</li>
                ))}
            </ul>
            { clicked && 
                <div id='foundProduct'>
                    <h3>Product Name: {product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                    <p>Stock: {product.stock}</p>
                </div>
            }
        </div>
    )
}

export default Search;