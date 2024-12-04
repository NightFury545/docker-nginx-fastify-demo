const getBooks = require("../../../app/actions/book/getBooks");

module.exports = {
  method: "GET",
  url: "/books",
  schema: {
    tags: ["Books"],
    summary: "Get all books",
    description: "Endpoint to get all books in the system",
  },
  handler: getBooks,
};
