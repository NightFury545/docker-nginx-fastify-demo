import { Entities } from '../../entities/interfaces/User';

declare namespace Services {
  interface IUserService {
    createUser(username: string): Promise<Entities.User>;
    getUserById(userId: string): Promise<Entities.User | null>;
  }
}
