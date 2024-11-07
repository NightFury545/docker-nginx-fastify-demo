const { bookRepository } = require("./../../repositories/book.repo");

module.exports = {
  deleteBook: {
    url: "/books/:id",
    method: "DELETE",
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
        const deletedBook = await bookRepository.delete(targetId);
        return reply.code(200).send(deletedBook);
      } catch (error) {
        request.log.error(error);
        return reply.code(500).send({ error: "Failed to delete book" });
      }
    },
  },
};
