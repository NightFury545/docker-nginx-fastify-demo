import { Entities } from '../../entities/interfaces/Book';

declare namespace Services {
  interface IBookService {
    createBook(details: {
      title: string;
      author: string;
      year: number;
      genre: string;
    }): Promise<Entities.Book>;
    getBookById(bookId: string): Promise<Entities.Book | null>;
    updateBook(bookId: string, updates: Partial<Entities.Book>): Promise<Entities.Book>;
    deleteBook(bookId: string): Promise<void>;
    listBooks(filters?: {
      term?: string;
      limit?: number;
      offset?: number;
      sort?: string;
    }): Promise<Entities.Book[]>;
  }
}
