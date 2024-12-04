const { libraryService } = require('../../../domain/services/library.service');

async function getLibraryByUser(req, res) {
  try {
    const { userId } = req.params;
    const library = await libraryService.getLibraryByUserId(userId);
    if (!library) {
      return res.status(404).send({ message: 'Library not found' });
    }
    res.send(library);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = getLibraryByUser;
