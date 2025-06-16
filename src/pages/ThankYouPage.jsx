import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "../styles/ThankYouPage.css";

const ThankYouPage = () => {
  const location = useLocation();
  const order = location.state?.order;

  return (
    <div className="thankyou-page">
      <h1>Спасибо за заказ!</h1>
      <p>Мы получили вашу заявку и свяжемся с вами в ближайшее время.</p>

      {order && (
        <div className="order-details">
          <p><strong>Номер заказа:</strong> {order.id}</p>
          <p><strong>Итого:</strong> {order.total} ₽</p>
        </div>
      )}

      <div className="buttons">
        <a href="https://t.me/legchezdohnut" target="_blank" rel="noopener noreferrer"><button className="telegram-button">Написать в Telegram</button></a>

        <Link to="/">
          <button>Вернуться на главную страницу</button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;