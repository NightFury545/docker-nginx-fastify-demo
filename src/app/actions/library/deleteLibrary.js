const { libraryService } = require('../../../domain/services/library.service');

async function deleteLibrary(req, res) {
  try {
    const { userId } = req.params;
    await libraryService.deleteLibrary(userId);
    res.status(200).send({ message: 'Library deleted successfully' });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = deleteLibrary;
