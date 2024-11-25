const { bookRepository } = require("./../../repositories/book.repo");

module.exports = {
  getBooks: {
    url: "/books",
    method: "GET",
    schema: {
      querystring: {
        type: "object",
        properties: {
          term: { type: "string" },
          limit: { type: "integer", minimum: 1, default: 10 },
          offset: { type: "integer", minimum: 0, default: 0 },
          sort: { type: "string", enum: ["name", "createdAt", "updatedAt"], default: "name" },
        },
        required: [],
      },
    },
    handler: async (request, reply) => {
      try {
        const { term, limit, offset, sort } = request.query;

        const books = await bookRepository.find({ term, limit, offset, sort });
        return reply.code(200).send(books);
      } catch (error) {
        request.log.error(error);
        return reply.code(500).send({ error: "Failed to fetch books" });
      }
    },
  },
};
