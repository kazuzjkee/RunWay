import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import '../styles/CheckoutPage.css';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [cart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    comment: '',
  });

  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: cart,
      total: totalPrice,
      customer: formData,
    };

    const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.REACT_APP_CHAT_ID;
    
    const messageText = `
📦 Новый заказ!

ID: ${order.id}
Дата: ${order.date}

Покупатель:
Имя: ${order.customer.name}
Телефон: ${order.customer.phone}
Адрес: ${order.customer.address}
Комментарий: ${order.customer.comment}

Товары:
${order.items.map(item => `- ${item.title} (${item.size}), ${item.price} ₽`).join('\n')}

Итого: ${order.total} ₽
    `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: messageText,
            }),
        });

        if (!response.ok) {
            throw new Error('Ошибка отправки сообщения через Telegram API');
        }

        navigate('/thankyou', { state: { order } });

        localStorage.removeItem('cart'); 
        setFormData({ name: '', phone: '', address: '', comment: '' });
    } catch (error) {
        console.error('Ошибка при оформлении заказа:', error);
        alert('Произошла ошибка при отправке заказа. Попробуйте позже.');
    }
  };

  return (
    <div className="checkout-page">
      <Header />
      <main className="checkout-container">
        <h2>Оформление заказа</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Имя:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Телефон:</label>
            <PhoneInput
              defaultCountry="RU"
              value={formData.phone}
              onChange={handlePhoneChange}
              name="phone"
              placeholder="Введите номер телефона"
              international
              countryCallingCodeEditable={false}
              style={{ width: '100%' }}
            />
          </div>

          <div className="form-group">
            <label>Адрес доставки:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Комментарий к заказу:</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
          </div>

          <h3 className="price">Итого: {totalPrice} ₽</h3>
          <button type="submit" className="submit-btn">Подтвердить заказ</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;