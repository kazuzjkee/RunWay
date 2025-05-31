import React from 'react';
import '../styles/Arrows.css';

const PrevArrow = ({ onClick }) => {
  return (
    <button className="custom-prev" onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </button>
  );
};

export default PrevArrow;