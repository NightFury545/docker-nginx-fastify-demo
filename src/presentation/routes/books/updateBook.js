const updateBook = require("../../../app/actions/book/updateBook");

module.exports = {
  method: "PUT",
  url: "/books/:bookId",
  schema: {
    tags: ['Books'],
    summary: 'Update the book',
    description: 'Endpoint to update the book in the system',
    body: {
      type: "object",
      properties: {
        title: { type: "string" },
        author: { type: "string" },
        year: { type: "number" },
        genre: { type: "string" },
      },
    },
    params: {
      type: "object",
      required: ["bookId"],
      properties: {
        bookId: { type: "string" },
      },
    },
  },
  handler: updateBook,
};
