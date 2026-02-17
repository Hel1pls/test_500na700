# Тестовое задание — Frontend (500na700)

Публикация демо: https://test-500na700.vercel.app/news  
Репозиторий: https://github.com/Hel1pls/test_500na700

---

## Краткое описание

Проект реализует страницу новостей по макету: список новостей, детальная страница, закреплённая шапка и форма обратной связи.

## Реализовано

- Закреплённая шапка
- Список новостей (загрузка из `public/api/news.json`)
- Детальная страница новости
- Попап «Связаться с нами» — валидация полей, маска телефона, вывод данных в консоль
- SCSS (CSS Modules), TypeScript

## Технологии

- Next.js (App router)
- React + TypeScript
- SCSS / CSS Modules

## Запуск локально

1. npm install
2. npm run dev — открыть http://localhost:3000/news
3. npm run build && npm run start

## Проверка функционала

- /news — список новостей
- /news/:id — детальная страница
- Кнопка «Связаться с нами» — открыть попап, заполнить форму, проверить вывод в консоли

## Важные файлы

- `public/api/news.json` — mock-данные
- `src/pages/news/NewsPage.tsx` — список
- `src/pages/newsDetail/NewsDetailPage.tsx` — детальная страница
- `src/widgets/header/ContactPopup.tsx` — форма обратной связи
- `src/shared/styles/globals.scss` — глобальные переменные и базовые стили

## Контакты:

Telegram: @MaratProkofev
Email: maratprok@yandex.ru










# Test Assignment — Frontend (500na700)

Demo: https://test-500na700.vercel.app/news  
Repository: https://github.com/Hel1pls/test_500na700

---

## Brief description

Project implements a news page per the design: news list, news detail, sticky header and contact popup.

## Implemented

- Sticky header
- News list (loaded from `public/api/news.json`)
- News detail page
- Contact popup — validation, phone mask, logs form data
- SCSS (CSS Modules), TypeScript

## Technologies

- Next.js (App router)
- React + TypeScript
- SCSS / CSS Modules

## Local setup

1. npm install
2. npm run dev — open http://localhost:3000/news
3. npm run build && npm run start
4. docker compose up --build (optional)

## Verify functionality

- `/news` — news list
- `/news/:id` — detail page
- "Contact us" — open popup, submit, check console

## Important files

- `public/api/news.json` — mock data
- `src/pages/news/NewsPage.tsx` — news list
- `src/pages/newsDetail/NewsDetailPage.tsx` — news detail
- `src/widgets/header/ContactPopup.tsx` — contact form
- `src/shared/styles/globals.scss` — globals and base styles

## Contact:

Telegram: @MaratProkofev
Email: maratprok@yandex.ru
