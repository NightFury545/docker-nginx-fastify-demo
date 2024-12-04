const { userService } = require('../../../domain/services/user.service');

async function getUser(req, res) {
  try {
    const { userId } = req.params;
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = getUser;
