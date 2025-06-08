import React, { useState } from 'react';
import '../styles/CatalogPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import products from '../assets/data/products';

const ITEMS_PER_PAGE = 50;

const KidsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const kidsProducts = products.filter(p => p.gender === 'kids');

  const totalPages = Math.ceil(kidsProducts.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = kidsProducts.slice(indexOfFirstItem, indexOfLastItem);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="catalog-page">
      <Header />
      <section className="catalog">
        <h2>Детские кроссовки</h2>
        <div className="product-list">
          {currentItems.length > 0 ? (
            currentItems.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>Товаров не найдено</p>
          )}
        </div>
        <div className="pagination">
          <button onClick={goToPrevPage} disabled={currentPage === 1}>
            Предыдущая
          </button>
          <span>Страница {currentPage} из {totalPages}</span>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Следующая
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default KidsPage;