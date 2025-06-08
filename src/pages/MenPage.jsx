import React, { useEffect, useState } from 'react';
import '../styles/CatalogPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import products from '../assets/data/products';

const MenPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 50;

  useEffect(() => {
    const search = new URLSearchParams(window.location.search).get('search');
    setSearchTerm(search || '');

    const filtered = products.filter(p =>
      p.gender === 'man' &&
      p.title.toLowerCase().includes((search || '').toLowerCase())
    );

    setFilteredProducts(filtered);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

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
        <h2>Мужские кроссовки</h2>
        {searchTerm && <p>Результаты поиска: "{searchTerm}"</p>}
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

export default MenPage;