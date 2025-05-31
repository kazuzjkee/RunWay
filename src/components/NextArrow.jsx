import React from 'react';
import '../styles/Arrows.css';

const NextArrow = ({ onClick }) => {
  return (
    <button className="custom-next" onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </button>
  );
};

export default NextArrow;