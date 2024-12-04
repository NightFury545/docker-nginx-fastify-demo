const { Book } = require('../entities');
const { bookRepository } = require('../../infra/repositories/book.repo');
const { generateUUID } = require('./util/uuidGenerator');

/**
 * Клас для роботи з книгами.
 * @implements {Services.IBookService}
 */
class BookService {
  async createBook(details) {
    const book = new Book({ ...details, id: generateUUID() });
    return await bookRepository.save(book);
  }

  async getBookById(bookId) {
    return await bookRepository.getById(bookId);
  }

  async updateBook(bookId, updates) {
    const book = await bookRepository.getById(bookId);
    if (!book) throw new Error('Book not found');

    Object.assign(book, updates);
    return await bookRepository.update(book);
  }

  async deleteBook(bookId) {
    await bookRepository.delete(bookId);
  }

  async listBooks(filters = {}) {
    return await bookRepository.find(filters);
  }
}

module.exports = { bookService: new BookService() };
