const {
  postgresAdapter: { $prisma },
} = require('./../database/postgres');
const { Book } = require('../../domain/entities');

/**
 * @implements {Repositories.IBookRepository}
 */
class BookRepository {
  #db = $prisma;

  /**
   * Отримати книгу за ідентифікатором.
   * @param {string} id - Ідентифікатор книги.
   * @returns {Promise<Entities.Book | null>}
   */
  async getById(id) {
    const bookData = await this.#db.book.findUnique({
      where: { id },
    });

    if (!bookData) return null;

    return new Book(bookData);
  }

  /**
   * Зберегти книгу.
   * @param {Entities.Book} book - Об'єкт книги.
   * @returns {Promise<Entities.Book>}
   */
  async save(book) {
    const savedBook = await this.#db.book.create({
      data: {
        id: book.id,
        title: book.title,
        author: book.author,
        year: book.year,
        genre: book.genre,
      },
    });

    return new Book(savedBook);
  }

  /**
   * Оновити книгу.
   * @param {Entities.Book} book - Об'єкт книги.
   * @returns {Promise<Entities.Book>}
   */
  async update(book) {
    const updatedBook = await this.#db.book.update({
      where: { id: book.id },
      data: {
        title: book.title,
        author: book.author,
        year: book.year,
        genre: book.genre,
      },
    });

    return new Book(updatedBook);
  }

  /**
   * Видалити книгу за ідентифікатором.
   * @param {string} id - Ідентифікатор книги.
   * @returns {Promise<void>}
   */
  async delete(id) {
    await this.#db.book.delete({
      where: { id },
    });
  }

  /**
   * Знайти книги за фільтрами.
   * @param {Object} filters - Фільтри для пошуку.
   * @param {string} [filters.term] - Термін для пошуку.
   * @param {number} [filters.limit] - Ліміт результатів.
   * @param {number} [filters.offset] - Зміщення результатів.
   * @param {string} [filters.sort] - Поле для сортування.
   * @returns {Promise<Entities.Book[]>}
   */
  async find({ term, limit, offset, sort }) {
    const booksData = await this.#db.book.findMany({
      where: {
        OR: term
          ? [
              { title: { contains: term, mode: 'insensitive' } },
              { author: { contains: term, mode: 'insensitive' } },
              { genre: { contains: term, mode: 'insensitive' } },
            ]
          : undefined,
      },
      orderBy: sort ? { [sort]: 'asc' } : undefined,
      take: limit,
      skip: offset,
    });

    return booksData.map((book) => new Book(book));
  }
}

module.exports = { bookRepository: new BookRepository() };
