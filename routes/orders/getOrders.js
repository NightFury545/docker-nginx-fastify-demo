const { orderRepository } = require("./../../repositories/order.repo");

module.exports = {
  getOrders: {
    url: "/orders",
    method: "GET",
    schema: {
      querystring: {
        type: "object",
        properties: {
          limit: { type: "integer", minimum: 1 },
          offset: { type: "integer", minimum: 0 },
          status: { type: "string" },
          sort: { type: "string" },
        },
      },
    },
    handler: async (request, reply) => {
      try {
        const { limit = 10, offset = 0, status, sort = "createdAt" } = request.query;

        const filter = status ? { status } : {};

        const orders = await orderRepository.find({
          filter,
          limit: parseInt(limit),
          offset: parseInt(offset),
          sort,
        });

        return reply.code(200).send(orders);
      } catch (error) {
        request.log.error(error);
        return reply.code(500).send({ error: "Failed to fetch orders" });
      }
    },
  },
};
