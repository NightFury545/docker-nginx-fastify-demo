const createBook = require("../../../app/actions/book/createBook");

module.exports = {
  method: "POST",
  url: "/books",
  bodyLimit: 1024,
  schema: {
    tags: ["Books"],
    summary: "Create the book",
    description: "Endpoint to create the book in the system",
    body: {
      type: "object",
      required: ["title", "author", "year", "genre"],
      properties: {
        title: { type: "string" },
        author: { type: "string" },
        year: { type: "number" },
        genre: { type: "string" },
      },
    },
  },
  handler: createBook,
};
