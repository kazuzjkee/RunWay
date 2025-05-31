import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/CartPage.css';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  // Функция для загрузки корзины
  const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  };

  // Загружаем корзину при монтировании
  useEffect(() => {
    loadCart();

    // Слушаем событие storage (срабатывает при изменении localStorage в других вкладках)
    window.addEventListener('storage', loadCart);

    return () => {
      window.removeEventListener('storage', loadCart);
    };
  }, []);

  // Удаление товара
  const handleRemoveItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Очистка корзины
  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  // Общая сумма
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <Header />
      <main className="cart-container">
        <h2>Корзина</h2>
        {cart.length === 0 ? (
          <p>Ваша корзина пуста.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    <p>Размер: {item.size}</p>
                    <p>Цена: {item.price} ₽</p>
                    <button onClick={() => handleRemoveItem(index)} className="remove-btn">Удалить</button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <p><strong>Итого:</strong> {totalPrice} ₽</p>
              <div className="buttons-container">
                <Link to="/checkout" className="checkout-btn">Перейти к оформлению</Link>
                <button className="clear-cart-btn" onClick={handleClearCart}>
                  Очистить корзину
                </button>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;