const { bookService } = require('../../../domain/services/book.service');

async function createBook(req, res) {
  try {
    const { title, author, year, genre } = req.body;
    const newBook = await bookService.createBook({ title, author, year, genre });
    res.status(201).send(newBook);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = createBook;
