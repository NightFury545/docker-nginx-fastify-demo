import { Entities } from '../entities/interfaces/Library';

declare namespace Repositories {
  interface ILibraryRepository {
    findByUserId(userId: string): Promise<Entities.Library>;
    findById(libraryId: string): Promise<Entities.Library>;
    save(library: Entities.Library): Promise<Entities.Library>;
    update(library: Entities.Library): Promise<Entities.Library>;
    deleteByUserId(userId: string): Promise<void>;
  }
}
