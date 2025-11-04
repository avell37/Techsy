# ⚡ Techsy — Интернет-магазин электроники

**Онлайн-магазин устройств** (смартфоны, ноутбуки, ПК) с полным циклом: от выбора товара до оплаты.  
✅ Регистрация, корзина, заказы, отзывы, админ-панель.

---

## 🛠 **Технологии**

**Backend:**

-   Node.js + Express
-   Prisma (ORM) + PostgreSQL
-   TypeScript
-   JWT-аутентификация
-   Google OAuth

**Frontend:**

-   React + TypeScript
-   Vite
-   Redux Toolkit
-   React Router, Axios
-   Yup, React-hook-form
-   shadcn/ui

---

## **Установка и запуск**

1. **Клонировать репозиторий**:
    - git clone https://github.com/avell37/Techsy.git
    - cd Techsy
2. **Настройка backend'а**
    - cd server
    - npm i
    - npm run dev
3. **Настройка frontend'а**
    - cd client
    - npm i
    - npm run dev

---

---

## **Настройка проекта**

**🔑 Пример основных переменных окружения (Frontend):**

```env
   VITE_API_URL='http://localhost:5000'
   VITE_GOOGLE_CLIENT_ID="your_google_client_id";
```

**🔑 Пример основных переменных окружения (Backend):**

```env
   PORT=5000
   DATABASE_URL="postgresql://yourusername:yourpassword@localhost:5432/yourdatabase?schema=public"
   JWT_SECRET_KEY="your_jwt_secret_key"
   SECRET_SESSION_KEY="your_secret_session_key"
   CLIENT_ID="your_google_client_id"
   CLIENT_SECRET="your_google_client_secret"
   REDIRECT_URL="/auth/google/callback"
   YOOMONEY_SHOP_ID="your_yoomoney_shop_id"
   YOOMONEY_SECRET_KEY="your_yoomoney_secret_key"
   LOCAL_URL="your_local_url"
   PROD_URL="your_prod_url"
```

---

## **Функционал**

1. Пользователи
    - Регистрация/логин с валидацией
    - Смена данных (имя, почта, пароль)
    - Управление контактными данными для доставки
2. Товары
    - Просмотр каталога (фильтрация по категориям)
    - Добавление/редактирование/удаление отзывов
3. Корзина и оплата
    - Добавление товаров в корзину
    - Оформление заказа
    - Оплата заказа (Yoomoney)
    - Просмотр истории заказов
4. Админ-панель
    - Интерфейс в виде таблиц с поиском
    - Управление (добавление/редактирование/удаление):
        - Товарами
        - Брендами
        - Типами
        - Отзывами (только удаление)
