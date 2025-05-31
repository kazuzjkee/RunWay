import React, { useEffect, useState } from 'react';
import '../styles/SearchPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState({
    man: [],
    woman: [],
    kids: [],
  });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('query');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, []);

  const performSearch = (query) => {
    import('../assets/data/products').then(({ default: products }) => {
      const filteredMan = products.filter(p =>
        p.gender === 'man' &&
        p.title.toLowerCase().includes(query.toLowerCase())
      );

      const filteredWoman = products.filter(p =>
        p.gender === 'woman' &&
        p.title.toLowerCase().includes(query.toLowerCase())
      );

      const filteredKids = products.filter(p =>
        p.gender === 'kids' &&
        p.title.toLowerCase().includes(query.toLowerCase())
      );

      setResults({
        man: filteredMan,
        woman: filteredWoman,
        kids: filteredKids,
      });
    });
  };

  return (
    <div className="search-page">
      <Header />

      <section className="search-results">
        <h2>Результаты поиска: "{searchQuery}"</h2>

        {results.man.length > 0 && (
          <div className="category-section">
            <h3>Мужские кроссовки</h3>
            <div className="product-list">
              {results.man.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {results.woman.length > 0 && (
          <div className="category-section">
            <h3>Женские кроссовки</h3>
            <div className="product-list">
              {results.woman.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {results.kids.length > 0 && (
          <div className="category-section">
            <h3>Детские кроссовки</h3>
            <div className="product-list">
              {results.kids.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {results.man.length === 0 &&
         results.woman.length === 0 &&
         results.kids.length === 0 && (
           <p>Ничего не найдено</p>
         )}
      </section>

      <Footer />
    </div>
  );
};

export default SearchPage;