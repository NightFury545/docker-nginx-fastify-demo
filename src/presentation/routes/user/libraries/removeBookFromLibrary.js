const removeBookFromLibrary = require("../../../../app/actions/library/removeBookFromLibrary");

module.exports = {
  method: "DELETE",
  url: "/libraries/:libraryId/books/:bookId",
  schema: {
    tags: ['Libraries'],
    summary: 'Remove a book from the library',
    description: 'Endpoint to remove a book from the library in the system',
    params: {
      type: "object",
      required: ["libraryId", "bookId"],
      properties: {
        libraryId: { type: "string" },
        bookId: { type: "string" },
      },
    },
  },
  handler: removeBookFromLibrary,
};
