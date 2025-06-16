import React, { useState } from 'react';
import '../styles/CatalogPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import products from '../assets/data/products';

// Список поддерживаемых брендов (для фильтрации)
const BRANDS = ['nike', 'adidas', 'puma', 'new balance', 'reebok', 'jordan', 'converse', 'vans'];

// Функция определения бренда из названия
function detectBrand(title) {
  const lowerTitle = title.toLowerCase();
  return (
    BRANDS.find(brand => lowerTitle.includes(brand)) || 'other'
  );
}

const WomenPage = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortOption, setSortOption] = useState('default');

  // Фильтруем товары по гендеру и бренду
  const filteredProducts = products
    .filter(p => p.gender === 'woman')
    .filter(p => selectedBrand === 'all' ? true : detectBrand(p.title) === selectedBrand);

  // Сортируем товары
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'alpha_asc') return a.title.localeCompare(b.title);
    if (sortOption === 'alpha_desc') return b.title.localeCompare(a.title);
    if (sortOption === 'price_asc') return a.price - b.price;
    if (sortOption === 'price_desc') return b.price - a.price;
    return 0;
  });

  // Получаем доступные бренды для фильтра
  const availableBrands = [...new Set(products.map(p => detectBrand(p.title)))];

  return (
    <div className="catalog-page">
      <Header />

      <section className="catalog">
        <h2>Женские кроссовки</h2>

        {/* Фильтры */}
        <div className="filters">
          <label>
            Бренд:
            <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
              <option value="all">Все бренды</option>
              {availableBrands.map(brand => (
                <option key={brand} value={brand}>
                  {brand.charAt(0).toUpperCase() + brand.slice(1)}
                </option>
              ))}
            </select>
          </label>

          <label>
            Сортировать:
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="default">По умолчанию</option>
              <option value="alpha_asc">По алфавиту ↑</option>
              <option value="alpha_desc">По алфавиту ↓</option>
              <option value="price_asc">Сначала дешёвые</option>
              <option value="price_desc">Сначала дорогие</option>
            </select>
          </label>
        </div>

        {/* Список товаров */}
        <div className="product-list">
          {sortedProducts.length > 0 ? (
            sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>Товаров не найдено</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WomenPage;