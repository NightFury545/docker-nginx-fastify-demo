const { postgresAdapter: { $prisma }, } = require("./../adapters/postgres");

class BookRepository {

  #prisma;

  constructor() {
    this.#prisma = $prisma;
  }

  async create(data) {
    return await this.#prisma.book.create({
      data,
    });
  }

  async findByPK(id) {
    const book = await this.#prisma.book.findUnique({
      where: { id },
    });

    if (!book) {
      throw new Error("Book not found");
    }

    return book;
  }

  async find({ term, limit, offset, sort }) {
    const books = await this.#prisma.book.findMany({
      where: term ? { name: { contains: term } } : {},
      skip: offset,
      take: limit,
      orderBy: { [sort]: "desc" },
    });

    return books;
  }

  async update(id, data) {
    return await this.#prisma.book.update({
      where: { id },
      data,
    });
  }

  async delete(id) {
    return await this.#prisma.book.delete({
      where: { id },
    });
  }
}
module.exports.bookRepository = new BookRepository();
