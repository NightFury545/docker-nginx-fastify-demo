import { Entities } from '../entities/interfaces/Book';

declare namespace Repositories {
  interface IBookRepository {
    getById(id: string): Promise<Entities.Book | null>;
    save(book: Entities.Book): Promise<Entities.Book>;
    update(book: Entities.Book): Promise<Entities.Book>;
    delete(id: string): Promise<void>;
    find(filters: {
      term?: string;
      limit?: number;
      offset?: number;
      sort?: string;
    }): Promise<Entities.Book[]>;
  }
}
