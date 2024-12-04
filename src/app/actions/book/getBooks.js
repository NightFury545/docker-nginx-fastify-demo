const { bookService } = require('../../../domain/services/book.service');

async function getBooks(req, res) {
  try {
    const { term, limit, offset, sort } = req.query;
    const books = await bookService.listBooks({ term, limit, offset, sort });
    res.send(books);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = getBooks;
