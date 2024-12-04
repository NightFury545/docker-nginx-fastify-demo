const createBook = require("./createBook");
const getBooks = require("./getBooks");
const getBook = require("./getBook");
const updateBook = require("./updateBook");
const deleteBook = require("./deleteBook");

module.exports.booksRouter = async function (fastify, opts) {
  fastify.route(createBook);
  fastify.route(getBooks);
  fastify.route(getBook);
  fastify.route(updateBook);
  fastify.route(deleteBook);
};
