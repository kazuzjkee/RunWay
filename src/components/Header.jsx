import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.PNG';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="RunWay Logo" />
        </Link>
      </div>

      <nav className="menu">
        <ul>
          <li><Link to="/men">Мужчины</Link></li>
          <li><Link to="/women">Женщины</Link></li>
          <li><Link to="/kids">Дети</Link></li>
        </ul>
      </nav>

      <div className="actions">
        <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
          <i className="fas fa-search"></i>
        </button>
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>

      {isSearchOpen && (
        <form onSubmit={handleSearch} className="search-modal">
          <input
            type="text"
            placeholder="Поиск кроссовок..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <button type="submit" className="close-btn">&rarr;</button>
          <button type="button" className="close-btn" onClick={() => setIsSearchOpen(false)}>&times;</button>
        </form>
      )}
    </header>
  );
};

export default Header;