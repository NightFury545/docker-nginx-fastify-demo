const { bookRepository } = require("./../../repositories/book.repo");

module.exports = {
  createBook: {
    url: "/books",
    method: "POST",
    bodyLimit: 1024,
    schema: {
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
        const { title, author, year = null, genre = "Unknown", price = 0 } = request.body;

        const book = await bookRepository.create({
          title,
          author,
          year,
          genre,
          price,
        });

        return reply.code(201).send(book);
      } catch (error) {
        request.log.error(error);
        return reply.code(500).send({ error: "Failed to create book" });
      }
    },
  },
};
