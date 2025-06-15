# RunWay — Интернет-магазин кроссовок

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23f7df1e.svg?style=for-the-badge&logo=javascript&logoColor=black)

🛒 **RunWay** — это простой интернет-магазин кроссовок, созданный с использованием React.  
Проект позволяет пользователям просматривать товары, добавлять их в корзину, оформлять заказы и получать уведомления через Telegram.

---

## 📸 Скриншоты 

### Главная страница
![Главная страница](/public/screenshots/home.gif)

### Страница товара
![Страница товара](/public/screenshots/product-detail.gif)

### Корзина
![Корзина](/public/screenshots/cart.png)

### Оформление заказа
![Оформление заказа](/public/screenshots/checkout.png)

---

## ✨ Функционал

- [x] Добавление в корзину
- [x] Удаление из корзины
- [x] Выбор размера
- [x] Отправка заказа через Telegram-бота
- [x] Адаптивный дизайн
- [x] Метрики производительности (через Vercel Speed Insights)

---

## 🔧 Используемые технологии

| Категория | Технология |
|----------|------------|
| **Фреймворк** | React + React Router |
| **Стили** | CSS Modules / SCSS |
| **Слайдер** | `react-slick` |
| **Телефон** | `react-phone-number-input` |
| **Telegram-бот** | `fetch()` к API Telegram |
| **Метрики** | `@vercel/speed-insights` |
| **Хостинг** | [Vercel](https://vercel.com/)  |

---

## 🚀 Как запустить проект локально

1. **Склонируйте репозиторий:**

    git clone https://github.com/kazuzjkee/RunWay.git 
    cd ваш-проект

2. **Установите зависимости:**

    npm install
    # или
    yarn install

3. **Создайте .env файл:**

    REACT_APP_TELEGRAM_BOT_TOKEN=ваш_токен
    REACT_APP_CHAT_ID=ваш_chat_id

4. **Запустите dev-сервер:**

    npm start
    # или
    yarn start    

5. Перейдите по адресу http://localhost:3000 в браузере. 
     

## 🌐 Как развернуть на Vercel 

1. Загрузи проект на GitHub.

2. Зайди на Vercel Dashboard . 

3. Нажми "New Project" , выбери свой репозиторий.

4. Настрой переменные окружения:
    REACT_APP_TELEGRAM_BOT_TOKEN
    REACT_APP_CHAT_ID
         
5. Нажми "Deploy"  и получи ссылку вроде https://runway-alpha.vercel.app/.

## 📝 Что можно улучшить в будущем? 

Поддержка пользовательских аккаунтов
Система отслеживания статуса заказов
Интеграция с платежными системами (Stripe, YooKassa)
Админ-панель для управления товарами
Хранение заказов в базе данных

## 💬 Обратная связь 

Если у вас есть идеи, предложения или вы нашли баг — напишите мне! 

📧 Почта: egorlitwinoff@gmail.com 
📱 Telegram: @legchezdohnut