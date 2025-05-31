import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategoryCard.css';

const CategoryCard = ({ title, image, link }) => {
  return (
    <Link to={link} className="category-card">
      <div className="background" style={{ backgroundImage: `url(${image})` }}></div>
      <h2 className="category-title">{title}</h2>
    </Link>
  );
};

export default CategoryCard;