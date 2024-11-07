const { bookRepository } = require("./../../repositories/book.repo");

module.exports = {
  updateBook: {
    url: "/books/:id",
    method: "PUT",
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
        required: ["id"],
      },
      body: {
        type: "object",
        required: ["title", "author"],
        properties: {
          title: { type: "string" },
          author: { type: "string" },
          year: { type: "number" },
          genre: { type: "string" },
          price: { type: "number" },
        },
      },
    },
    handler: async (request, reply) => {
      try {
        const targetId = request.params.id;
        const { title, author, year, genre, price } = request.body;

        const updatedBook = await bookRepository.update(targetId, {
          title,
          author,
          year,
          genre,
          price,
        });

        return reply.code(200).send(updatedBook);
      } catch (error) {
        request.log.error(error);
        return reply.code(500).send({ error: "Failed to update book" });
      }
    },
  },
};
