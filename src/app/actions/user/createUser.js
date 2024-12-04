const { userService } = require('../../../domain/services/user.service');

async function createUser(req, res) {
  try {
    const { username } = req.body;
    const newUser = await userService.createUser(username);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = createUser;
