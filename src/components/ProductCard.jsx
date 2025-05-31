import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-wrapper">
        <img src={product.images[0]} alt={product.title} className="product-image" />
        <img src={product.images[1]} alt={`${product.title} hover`} className="product-image-hover" />
      </div>
      <div className="product-info">
        <h4>{product.title}</h4>
        <p>Цена: {Math.floor(product.price)} ₽</p>
      </div>
    </Link>
  );
};

export default ProductCard;