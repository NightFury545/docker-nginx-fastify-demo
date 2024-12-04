const { booksRouter } = require('./books');
const { usersRouter } = require('./user');
const { librariesRouter } = require('./user/libraries');

module.exports.patchRouting = (fastify) => {
  fastify.setNotFoundHandler((request, reply) => {
    reply.status(404).send({ error: "Not Found" });
  });

  fastify.setErrorHandler((error, request, reply) => {
    fastify.log.error(error);

    if (error.validation) {
      return reply
        .status(error.statusCode || 400)
        .send({ error: "Invalid request", message: error.message });
    }

    reply.status(500).send({ error: "Internal Server Error" });
  });

  fastify.register(booksRouter);
  fastify.register(usersRouter);
  fastify.register(librariesRouter);
};
