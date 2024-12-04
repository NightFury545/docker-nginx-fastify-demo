const getUser = require("../../../app/actions/user/getUser");

module.exports = {
  method: "GET",
  url: "/users/:userId",
  schema: {
    tags: ['Users'],
    summary: 'Get a new user',
    description: 'Endpoint to get a new user in the system',
    params: {
      type: "object",
      required: ["userId"],
      properties: {
        userId: { type: "string" },
      },
    },
  },
  handler: getUser,
};
