/**
 * Клас бібліотеки.
 * @implements {Entities.Library}
 */
class Library {
  /**
   * Створює об'єкт бібліотеки.
   * @param {Object} fields - Параметри для створення бібліотеки
   * @param {string} [fields.id] - Ідентифікатор бібліотеки
   * @param {string} [fields.name] - Назва бібліотеки
   * @param {string[]} [fields.booksRef] - Посилання на книги в бібліотеці
   */
  constructor({ id, name, booksRef = [] }) {
    this.id = id;
    this.name = name;
    this.booksRef = booksRef;
  }
}

module.exports = { Library };
