const { orderRepository } = require("./../../repositories/order.repo");

module.exports = {
  deleteOrder: {
    url: "/orders/:id",
    method: "DELETE",
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
        await orderRepository.delete(targetId);

        return reply.code(200).send({ message: "Order deleted successfully" });
      } catch (error) {
        request.log.error(error);
        return reply.code(500).send({ error: "Failed to delete order" });
      }
    },
  },
};
