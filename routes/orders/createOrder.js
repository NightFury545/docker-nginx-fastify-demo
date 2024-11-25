const { orderRepository } = require("./../../repositories/order.repo");

module.exports = {
  createOrder: {
    url: "/orders",
    method: "POST",
    schema: {
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
        const orderData = request.body;
        const orderId = await orderRepository.create(orderData);
        return reply.code(201).send({ id: orderId });
      } catch (error) {
        request.log.error(error);
        return reply.code(500).send({ error: "Failed to create order" });
      }
    },
  },
};
