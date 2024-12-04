const getBook = require("../../../app/actions/book/getBook");

module.exports = {
  method: "GET",
  url: "/books/:bookId",
  schema: {
    tags: ["Books"],
    summary: "Get the book",
    description: "Endpoint to get the book by ID in the system",
    params: {
      type: "object",
      required: ["bookId"],
      properties: {
        bookId: { type: "string" },
      },
    },
  },
  handler: getBook,
};
