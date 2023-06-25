import React, { useState } from 'react';
import axios from "axios";

function AddProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new product object
    const newProduct = {
      title: name,
      price: parseFloat(price),
    };

    try {
      // Send a POST request to the API endpoint
      const response = await axios.post('https://fakestoreapi.com/products', newProduct);
      console.log(response.data); // Newly added product data
      // Reset the form
      setName('');
      setPrice('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
