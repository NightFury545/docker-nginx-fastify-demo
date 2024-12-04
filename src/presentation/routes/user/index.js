const createUser = require("./createUser");
const getUser = require("./getUser");

module.exports.usersRouter = async function (fastify, opts) {
  fastify.route(createUser);
  fastify.route(getUser);
};
