const { orderRepository } = require("./../../repositories/order.repo");

module.exports = {
  getOrder: {
    url: "/orders/:id",
    method: "GET",
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
        required: ["id"],
      },
    },
    handler: async (request, reply) => {
      try {
        const targetId = request.params.id;
        const foundOrder = await orderRepository.findById(targetId);

        if (!foundOrder) {
          return reply.code(404).send({
            message: "Order not found",
          });
        }

        return reply.code(200).send(foundOrder);
      } catch (error) {
        request.log.error(error);
        return reply.code(500).send({ error: "Failed to fetch order" });
      }
    },
  },
};
