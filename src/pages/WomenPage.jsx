import React from 'react';
import '../styles/CatalogPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import products from '../assets/data/products';

const WomenPage = () => {
  const womenProducts = products.filter(p => p.gender === 'woman');

  return (
    <div className="catalog-page">
      <Header />
      <section className="catalog">
        <h2>Женские кроссовки</h2>
        <div className="product-list">
          {womenProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WomenPage;