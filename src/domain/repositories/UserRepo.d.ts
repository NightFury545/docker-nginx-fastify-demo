import { Entities } from '../entities/interfaces/User';

declare namespace Repositories {
  interface IUserRepository {
    getById(id: string): Promise<Entities.User | null>;
    save(user: Entities.User): Promise<Entities.User>;
  }
}
