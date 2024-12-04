const createLibrary = require("./createLibrary");
const getLibraryByUser = require("./getLibraryByUser");
const addBookToLibrary = require("./addBookToLibrary");
const removeBookFromLibrary = require("./removeBookFromLibrary");
const deleteLibrary = require("./deleteLibrary");
const updateLibrary = require("./updateLibrary");

module.exports.librariesRouter = async function (fastify, opts) {
  fastify.route(createLibrary);
  fastify.route(getLibraryByUser);
  fastify.route(addBookToLibrary);
  fastify.route(removeBookFromLibrary);
  fastify.route(deleteLibrary);
  fastify.route(updateLibrary);
};
