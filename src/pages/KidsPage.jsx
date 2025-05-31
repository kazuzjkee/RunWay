import React from 'react';
import '../styles/CatalogPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import products from '../assets/data/products';

const KidsPage = () => {
  const kidsProducts = products.filter(p => p.gender === 'kids');

  return (
    <div className="catalog-page">
      <Header />
      <section className="catalog">
        <h2>Детские кроссовки</h2>
        <div className="product-list">
          {kidsProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default KidsPage;