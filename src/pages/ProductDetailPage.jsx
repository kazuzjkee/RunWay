import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import products from '../assets/data/products';
import Slider from 'react-slick';
import PrevArrow from '../components/PrevArrow'; 
import NextArrow from '../components/NextArrow';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ProductDetailPage.css"; 

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return <h2>Товар не найден</h2>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Выберите размер перед добавлением в корзину');
      return;
    }

    const cartItem = {
      id: product.id,
      title: product.title,
      price: Math.floor(product.price),
      size: selectedSize,
      image: product.images[0],
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));

    alert(`Товар "${product.title}" ${selectedSize} размера добавлен в корзину`);
  };

  return (
    <div className="product-detail">
      <Header />

      <div className="product-images">
        <Slider {...settings}>
          {product.images.map((img, i) => (
            <div key={i} className="slide">
              <img src={img.trim()} alt={`${product.title} ${i}`} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="price"><strong>Цена:</strong> {Math.floor(product.price)} ₽</p>

        <div className="size-picker">
          <strong>Доступные размеры:</strong>
          <div className="sizes">
            {product.sizes.map(size => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <p className="description">{product.description}</p>

        <button className="add-to-cart-btn" onClick={handleAddToCart} disabled={!selectedSize}>
          Добавить в корзину
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;