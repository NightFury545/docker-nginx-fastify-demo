const addBookToLibrary = require("../../../../app/actions/library/addBookToLibrary");

module.exports = {
  method: "POST",
  url: "/libraries/add-book",
  schema: {
    tags: ['Libraries'],
    summary: 'Add a book to the library',
    description: 'Endpoint to add a book to the library in the system',
    body: {
      type: "object",
      required: ["libraryId", "bookId"],
      properties: {
        libraryId: { type: "string" },
        bookId: { type: "string" },
      },
    },
  },
  handler: addBookToLibrary,
};
