const { createOrder } = require("./createOrder");
const { getOrders } = require("./getOrders");
const { getOrder } = require("./getOrder");
const { updateOrder } = require("./updateOrder");
const { deleteOrder } = require("./deleteOrder");

module.exports.ordersRouter = async function (fastify, opts) {
  fastify.route(createOrder);
  fastify.route(getOrders);
  fastify.route(getOrder);
  fastify.route(updateOrder);
  fastify.route(deleteOrder);
};
