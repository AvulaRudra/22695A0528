import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching the product detail from the Django API
    fetch('http://127.0.0.1:8000/api/categories/mobile/products/1/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProduct(data); // Set the product data
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the product!", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!product) return <p>No product found.</p>;

  return (
    <div>
      <h1>Product Detail</h1>
      <div>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Company: {product.company}</p>
        <p>Category: {product.category}</p>
        <p>Discount: {product.discount}%</p>
        <p>Availability: {product.availability}</p>
      </div>
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
  