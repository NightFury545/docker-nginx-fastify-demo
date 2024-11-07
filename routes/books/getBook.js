const { bookRepository } = require("./../../repositories/book.repo");

module.exports = {
  getBook: {
    url: "/books/:id",
    method: "GET",
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
        required: ["id"],
      },
    },
    handler: async (request, reply) => {
      try {
        const targetId = request.params.id;
        const book = await bookRepository.read(targetId);
        return reply.code(200).send(book);
      } catch (error) {
        request.log.error(error);
        return reply.code(404).send({ error: "Book not found" });
      }
    },
  },
};
