const { libraryService } = require('../../../domain/services/library.service');

async function createLibrary(req, res) {
  try {
    const { userId, name } = req.body;
    const newLibrary = await libraryService.createLibrary(userId, name);
    res.status(201).send(newLibrary);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = createLibrary;
