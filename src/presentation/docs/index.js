/**
 * Patch the Fastify instance to add Swagger documentation
 * @param {import("fastify").FastifyInstance} fastify
 */
module.exports.patchDocs = (fastify) => {

  fastify.register(require('@fastify/swagger'), {
    swagger: {
      info: {
        title: 'Library Management API',
        description: 'API documentation for managing users, libraries, and books',
        version: '1.0.0',
      },
      host: 'localhost:3000',
      basePath: '/api',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'Books', description: 'Endpoints related to book management' },
        { name: 'Libraries', description: 'Endpoints related to library management' },
        { name: 'Users', description: 'Endpoints related to user management' },
      ],
    },
  });

  fastify.register(require('@fastify/swagger-ui'), {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: true,
    },
    exposeRoute: true,
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject;
    },
  });
};
