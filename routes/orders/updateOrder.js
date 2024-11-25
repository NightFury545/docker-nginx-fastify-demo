const { orderRepository } = require("./../../repositories/order.repo");

module.exports = {
  updateOrder: {
    url: "/orders/:id",
    method: "PUT",
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
        required: ["id"],
      },
      body: {
        type: "object",
        properties: {
          customerName: { type: "string" },
          email: { type: "string" },
          items: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                quantity: { type: "number" },
                price: { type: "number" },
              },
              required: ["name", "quantity", "price"],
            },
          },
          totalPrice: { type: "number" },
          status: { type: "string" },
        },
        required: ["customerName", "email", "items", "totalPrice", "status"],
      },
    },
    handler: async (request, reply) => {
      try {
        const targetId = request.params.id;
        const orderData = request.body;

        const updatedOrder = await orderRepository.update(targetId, orderData);

        return reply.code(200).send(updatedOrder);
      } catch (error) {
        request.log.error(error);
        return reply.code(500).send({ error: "Failed to update order" });
      }
    },
  },
};
