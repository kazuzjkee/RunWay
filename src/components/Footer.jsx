import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-contact">
          <h4>Свяжитесь с нами</h4>
          <p>Email: support@runway.com</p>
          <p>Телефон: +7 (900) 123-45-67</p>
        </div>

        <div className="footer-about">
          <h3>RunWay</h3>
          <p>Ваш надежный магазин кроссовок. Только оригинальная продукция, быстрая доставка и отличный сервис.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RunWay. Все права защищены.</p>
        <div className="socials">
          <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/?locale=ru_RU"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;