const getLibraryByUser = require("../../../../app/actions/library/getLibraryByUser");

module.exports = {
  method: "GET",
  url: "/users/:userId/library",
  schema: {
    tags: ['Libraries'],
    summary: 'Get the library by user',
    description: 'Endpoint to get the library by user in the system',
    params: {
      type: "object",
      required: ["userId"],
      properties: {
        userId: { type: "string" },
      },
    },
  },
  handler: getLibraryByUser,
};
