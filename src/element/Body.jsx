import React from 'react';
import './Body.css';

const Body = () => {
  const products = [
    { id: 1, name: 'Handbag 1', image: `${process.env.PUBLIC_URL}/products/bag1.jpg`, price: '$100' },
    { id: 2, name: 'Handbag 2', image: `${process.env.PUBLIC_URL}/products/bag2.jpg`, price: '$120' },
    { id: 3, name: 'Handbag 3', image: `${process.env.PUBLIC_URL}/products/bag3.jpg`, price: '$150' },
    // Add more products as needed
    { id: 1, name: 'Handbag 1', image: `${process.env.PUBLIC_URL}/products/bag1.jpg`, price: '$100' },
    { id: 2, name: 'Handbag 2', image: `${process.env.PUBLIC_URL}/products/bag2.jpg`, price: '$120' },
    { id: 3, name: 'Handbag 3', image: `${process.env.PUBLIC_URL}/products/bag3.jpg`, price: '$150' },
    { id: 1, name: 'Handbag 1', image: `${process.env.PUBLIC_URL}/products/bag1.jpg`, price: '$100' },
    { id: 2, name: 'Handbag 2', image: `${process.env.PUBLIC_URL}/products/bag2.jpg`, price: '$120' },
    { id: 3, name: 'Handbag 3', image: `${process.env.PUBLIC_URL}/products/bag3.jpg`, price: '$150' },
    { id: 1, name: 'Handbag 1', image: `${process.env.PUBLIC_URL}/products/bag1.jpg`, price: '$100' },
  ];

  return (
    <div className="body-container">
      <h1 className="title">OUR TOP PRODUCTS</h1>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
