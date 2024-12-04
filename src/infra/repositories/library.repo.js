const { postgresAdapter: { $prisma } } = require('./../database/postgres');
const { Library } = require('../../domain/entities');

/**
 * @implements {Repositories.ILibraryRepository}
 */
class LibraryRepository {
  #db = $prisma;

  /**
   * Знайти бібліотеку за ID користувача.
   * @param {string} userId - Ідентифікатор користувача.
   * @returns {Promise<Library | null>} - Об'єкт бібліотеки або `null`, якщо не знайдено.
   */
  async findByUserId(userId) {
    const libraryData = await this.#db.library.findUnique({
      where: { userId },
      include: { books: true },
    });

    if (!libraryData) return null;

    return new Library({
      id: libraryData.id,
      name: libraryData.name,
      booksRef: libraryData.books.map((book) => book.id),
    });
  }

  /**
   * Знайти бібліотеку за ID.
   * @param {string} libraryId - ID бібліотеки.
   * @returns {Promise<Entities.Library | null>} - Повертає бібліотеку або null, якщо не знайдено.
   */
  async findById(libraryId) {
    const libraryData = await this.#db.library.findUnique({
      where: { id: libraryId },
      include: { books: true },
    });

    if (!libraryData) return null;

    return new Library({
      id: libraryData.id,
      name: libraryData.name,
      booksRef: libraryData.books.map((book) => book.id),
    });
  }

  /**
   * Зберегти нову бібліотеку.
   * @param {Library} library - Об'єкт бібліотеки.
   * @returns {Promise<Library>} - Збережений об'єкт бібліотеки.
   */
  async save(library, userId) {
    const savedLibrary = await this.#db.library.create({
      data: {
        id: library.id,
        name: library.name,
        userId,
      },
    });

    return new Library({
      id: savedLibrary.id,
      name: savedLibrary.name,
      userId: savedLibrary.userId,
      booksRef: [],
    });
  }

  /**
   * Оновити бібліотеку.
   * @param {Library} library - Об'єкт бібліотеки.
   * @returns {Promise<Library>} - Оновлений об'єкт бібліотеки.
   */
  async update(library) {
    const updatedLibrary = await this.#db.library.update({
      where: { id: library.id },
      data: {
        name: library.name,
        books: {
          connect: library.booksRef && library.booksRef.length
            ? library.booksRef.map((bookId) => ({ id: bookId }))
            : [],
        },
      },
      include: { books: true },
    });

    return new Library({
      id: updatedLibrary.id,
      name: updatedLibrary.name,
      booksRef: updatedLibrary.books.map((book) => book.id),
    });
  }

  async removeBook(libraryId, bookIdToRemove) {
    const updatedLibrary = await this.#db.library.update({
      where: { id: libraryId },
      data: {
        books: {
          disconnect: { id: bookIdToRemove },
        },
      },
      include: { books: true },
    });

    return new Library({
      id: updatedLibrary.id,
      name: updatedLibrary.name,
      booksRef: updatedLibrary.books.map((book) => book.id),
    });
  }


  /**
   * Видалити бібліотеку за ID користувача.
   * @param {string} userId - Ідентифікатор користувача.
   * @returns {Promise<void>}
   */
  async deleteByUserId(userId) {
    await this.#db.library.delete({
      where: { userId },
    });
  }
}

module.exports = { libraryRepository: new LibraryRepository() };
