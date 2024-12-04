import { Entities } from '../../entities/interfaces/Library';

declare namespace Services {
  interface ILibraryService {
    createLibrary(userId: string, name: string): Promise<Entities.Library>;
    getLibraryById(libraryId: string): Promise<Entities.Library | null>;
    getLibraryByUserId(userId: string): Promise<Entities.Library | null>;
    updateLibrary(libraryId: string, updates: Partial<Entities.Library>): Promise<Entities.Library>;
    deleteLibrary(libraryId: string): Promise<void>;
    addBookToLibrary(libraryId: string, bookId: string): Promise<void>;
    removeBookFromLibrary(libraryId: string, bookId: string): Promise<void>;
  }
}
