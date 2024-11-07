# Docker-Nginx-Fastify-Demo

Проєкт демонструє створення RESTful API за допомогою Fastify, Docker та Nginx. Реалізовано базові CRUD операції для роботи з ресурсом "Books". Проєкт налаштований для роботи в контейнеризованому середовищі з використанням Docker Compose, де Fastify працює як бекенд, а Nginx – як проксі-сервер для керування запитами.

## Фунції

**CRUD API для книг:** Створення, отримання, оновлення та видалення інформації про книги через RESTful ендпоінти.

- **GET /api/books:** Отримати список всіх книг.
- **GET /api/books/:** Отримати книгу за ідентифікатором.
- **POST /api/books:** Створити нову книгу.
- **PUT /api/books/:** Оновити книгу за ідентифікатором.
- **DELETE /api/books/:** Видалити книгу за ідентифікатором.

## Встановлення

1. Клонувати репозиторій: `git clone https://github.com/your-username/Docker-Nginx-Fastify-Demo.git && cd Docker-Nginx-Fastify-Demo`

2. Створити файл `.env` на основі `.env.example` і налаштувати змінні середовища.

3. Запустити Docker Compose: `docker-compose up --build`

Проєкт буде доступний за адресою `http://localhost/`.
