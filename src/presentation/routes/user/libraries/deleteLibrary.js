const deleteLibrary = require("../../../../app/actions/library/deleteLibrary");

module.exports = {
  method: "DELETE",
  url: "/libraries/:userId",
  schema: {
    tags: ['Libraries'],
    summary: 'Delete the library',
    description: 'Endpoint to delete the library in the system',
    params: {
      type: "object",
      required: ["userId"],
      properties: {
        userId: { type: "string" },
      },
    },
  },
  handler: deleteLibrary,
};
