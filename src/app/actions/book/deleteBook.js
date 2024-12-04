const { bookService } = require('../../../domain/services/book.service');

async function deleteBook(req, res) {
  try {
    const { bookId } = req.params;
    await bookService.deleteBook(bookId);
    res.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = deleteBook;
