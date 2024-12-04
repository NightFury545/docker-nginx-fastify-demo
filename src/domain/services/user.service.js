const { userRepository } = require('../../infra/repositories/user.repo.js');
const { User } = require('../entities');
const { generateUUID } = require('./util/uuidGenerator.js');

/**
 * Клас для роботи з користувачами.
 * @implements {Services.IUserService}
 */
class UserService {
  async createUser(username) {
    const user = new User({ id: generateUUID(), username });
    return await userRepository.save(user);
  }

  async getUserById(userId) {
    return await userRepository.getById(userId);
  }
}

module.exports = { userService: new UserService() };
