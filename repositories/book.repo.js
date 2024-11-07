const { randomUUID } = require("node:crypto");

class BookRepository {
    constructor() {
        this.storage = new Map();
    }

    async create(data) {
        const id = randomUUID();

        const syncedTimestamp = Date.now();

        this.storage.set(id, {
            id,
            ...data,
            createdAt: syncedTimestamp,
            updatedAt: syncedTimestamp,
        });

        return this.storage.get(id);
    }

    async read(id) {
        if (id && !this.storage.has(id)) {
            throw new Error("Book not found");
        }

        return id ? this.storage.get(id) : Array.from(this.storage.values());
    }

    async update(id, data) {
        if (!this.storage.has(id)) {
            throw new Error("Book not found");
        }

        delete data.id;

        this.storage.set(id, {
            ...this.storage.get(id),
            ...data,
            updatedAt: Date.now(),
        });

        return this.storage.get(id);
    }

    async delete(id) {
        if (!this.storage.has(id)) {
            throw new Error("Book not found");
        }

        const book = this.storage.get(id);

        this.storage.delete(id);

        return book;
    }
}

module.exports.bookRepository = new BookRepository();
