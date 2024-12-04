const { libraryService } = require('../../../domain/services/library.service');

async function removeBookFromLibrary(req, res) {
  try {
    const { libraryId, bookId } = req.params;
    const updatedLibrary = await libraryService.removeBookFromLibrary(libraryId, bookId);
    res.send(updatedLibrary);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = removeBookFromLibrary;
