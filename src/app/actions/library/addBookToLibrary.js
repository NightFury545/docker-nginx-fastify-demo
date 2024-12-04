const { libraryService } = require('../../../domain/services/library.service');

async function addBookToLibrary(req, res) {
  try {
    const { libraryId, bookId } = req.body;
    if (!libraryId || !bookId) {
      return res.status(400).json({ message: "libraryId and bookId are required." });
    }
    const updatedLibrary = await libraryService.addBookToLibrary(libraryId, bookId);
    res.send(updatedLibrary);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = addBookToLibrary;
