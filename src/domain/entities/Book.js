/**
 * Клас книги.
 * @implements {Entities.Book}
 */
class Book {
  /**
   * Створює об'єкт книги.
   * @param {Object} fields - Параметри для створення книги
   * @param {string} [fields.id] - Ідентифікатор книги
   * @param {string} [fields.title] - Назва книги
   * @param {string} [fields.author] - Автор книги
   * @param {number} [fields.year] - Рік видання
   * @param {string} [fields.genre] - Жанр книги
   */
  constructor({ id, title, author, year, genre }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }
}

module.exports = { Book };
