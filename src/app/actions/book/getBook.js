const { bookService } = require('../../../domain/services/book.service');

async function getBook(req, res) {
  try {
    const { bookId } = req.params;
    const book = await bookService.getBookById(bookId);
    res.send(book);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = getBook;
