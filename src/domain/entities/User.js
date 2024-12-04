/**
 * Клас користувача.
 * @implements {Entities.User}
 */
class User {
  /**
   * Створює об'єкт користувача.
   * @param {Object} params - Параметри для створення користувача
   * @param {string} [params.id] - Ідентифікатор користувача
   * @param {string} [params.username] - Ім'я користувача
   * @param {string|null} [params.libraryRef] - Посилання на бібліотеку користувача або null
   */
  constructor({ id, username, libraryRef = null }) {
    this.id = id;
    this.username = username;
    this.libraryRef = libraryRef;
  }
}

module.exports = { User };
