const { libraryService } = require('../../../domain/services/library.service');

async function updateLibrary(req, res) {
  try {
    const { libraryId } = req.params;
    const updates = req.body;
    const updatedLibrary = await libraryService.updateLibrary(libraryId, updates);
    res.send(updatedLibrary);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = updateLibrary;
