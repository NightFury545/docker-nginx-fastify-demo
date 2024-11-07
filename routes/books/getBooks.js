const { bookRepository } = require("./../../repositories/book.repo");

module.exports = {
  getBooks: {
    url: "/books",
    method: "GET",
    handler: async (request, reply) => {
      try {
        const books = await bookRepository.read();
        return reply.code(200).send(books);
      } catch (error) {
        request.log.error(error);
        return reply.code(500).send({ error: "Failed to fetch books" });
      }
    },
  },
};
