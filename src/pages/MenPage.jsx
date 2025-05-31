import React, { useEffect, useState } from 'react';
import '../styles/CatalogPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import products from '../assets/data/products';

const MenPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const search = new URLSearchParams(window.location.search).get('search');
    setSearchTerm(search || '');

    const filtered = products.filter(p =>
      p.gender === 'man' &&
      p.title.toLowerCase().includes((search || '').toLowerCase())
    );

    setFilteredProducts(filtered);
  }, []);

  return (
    <div className="catalog-page">
      <Header />
      <section className="catalog">
        <h2>Мужские кроссовки</h2>
        {searchTerm && <p>Результаты поиска: "{searchTerm}"</p>}
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>Ничего не найдено</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MenPage;