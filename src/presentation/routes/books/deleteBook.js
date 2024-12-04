const deleteBook = require("../../../app/actions/book/deleteBook");

module.exports = {
  method: "DELETE",
  url: "/books/:bookId",
  schema: {
    tags: ["Books"],
    summary: "Delete the book",
    description: "Endpoint to delete book in the system",
    params: {
      type: "object",
      required: ["bookId"],
      properties: {
        bookId: { type: "string" },
      },
    },
  },
  handler: deleteBook,
};
