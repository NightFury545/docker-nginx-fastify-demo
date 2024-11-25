const {
  mongoDBAdapter: { $db, asObjectId },
} = require("./../adapters/mongodb");


class OrderRepository {
  #db;

  #collection;

  constructor() {
    this.#db = $db;
    this.#collection = $db.collection("orders");
  }

  /**
   * Create a new order with the given data
   * @param {object} data
   * @param {string} data.customerName - Name of the customer
   * @param {string} data.email - Customer's email
   * @param {Array}  data.items - List of ordered items
   * @param {number} data.totalPrice - Total price of the order
   * @param {string} data.status - Status of the order (pending, shipped, etc.)
   * @returns {Promise<string>} - The ID of the created order
   */
  async create(data) {
    const { customerName, email, items, totalPrice, status } = data;

    const newOrder = {
      customerName,
      email,
      items,
      totalPrice,
      status,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await this.#collection.insertOne(newOrder);

    return result.insertedId.toString();
  }

  async findById(id) {
    if (id) {
      const order = await this.#collection.findOne({ _id: asObjectId(id) });

      if (!order) {
        throw new Error("Order not found");
      }

      return order;
    } else {
      const orders = await this.#collection.find().toArray();
      return orders;
    }
  }

  async update(id, data) {
    const result = await this.#collection.updateOne(
      { _id: asObjectId(id) },
      { $set: { ...data, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      throw new Error("Order not found");
    }

    const updatedOrder = await this.findById(id);
    return updatedOrder;
  }

  async delete(id) {
    const result = await this.#collection.deleteOne({ _id: asObjectId(id) });

    if (result.deletedCount === 0) {
      throw new Error("Order not found");
    }

    return { message: "Order deleted", id };
  }

  async find({ customerName, status, limit = 10, offset = 0, sort = "createdAt" }) {
    const query = {
      ...(customerName && { customerName: { $regex: customerName, $options: "i" } }),
      ...(status && { status }),
    };

    const orders = await this.#collection
      .find(query)
      .skip(offset)
      .limit(limit)
      .sort({ [sort]: -1 })
      .toArray();

    return orders;
  }
}

module.exports.orderRepository = new OrderRepository();
