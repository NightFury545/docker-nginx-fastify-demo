const { libraryRepository } = require('../../infra/repositories/library.repo');
const { Library } = require('../entities');
const { generateUUID } = require('./util/uuidGenerator');

/**
 * Клас для роботи з бібліотеками.
 * @implements {Services.ILibraryService}
 */
class LibraryService {
  async createLibrary(userId, name) {
    const library = new Library({ id: generateUUID(), name });
    return await libraryRepository.save(library, userId);
  }

  async getLibraryByUserId(userId) {
    return await libraryRepository.findByUserId(userId);
  }

  async updateLibrary(libraryId, updates) {
    const library = await libraryRepository.findById(libraryId);
    if (!library) throw new Error('Library not found');

    Object.assign(library, updates);
    return await libraryRepository.update(library);
  }

  async deleteLibrary(userId) {
    await libraryRepository.deleteByUserId(userId);
  }

  async addBookToLibrary(libraryId, bookId) {

    const library = await libraryRepository.findById(libraryId);
    if (!library) throw new Error('Library not found');

    library.booksRef.push(bookId);
    const updatedLibrary = await libraryRepository.update(library);

    return updatedLibrary;
  }

  async removeBookFromLibrary(libraryId, bookId) {
    return await libraryRepository.removeBook(libraryId, bookId);
  }
}


module.exports = { libraryService: new LibraryService() };
