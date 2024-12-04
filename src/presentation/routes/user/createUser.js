const createUser = require("../../../app/actions/user/createUser");

module.exports = {
  method: "POST",
  url: "/users",
  schema: {
    tags: ['Users'],
    summary: 'Create a new user',
    description: 'Endpoint to create a new user in the system',
    body: {
      type: "object",
      required: ["username"],
      properties: {
        username: { type: "string", minLength: 2, maxLength: 24 },
      },
    },
  },
  handler: createUser,
};
