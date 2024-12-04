const { bookService } = require('../../../domain/services/book.service');

async function updateBook(req, res) {
  try {
    const { bookId } = req.params;
    const updates = req.body;
    const updatedBook = await bookService.updateBook(bookId, updates);
    res.send(updatedBook);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = updateBook;
