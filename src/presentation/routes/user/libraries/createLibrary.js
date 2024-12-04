const createLibrary = require("../../../../app/actions/library/createLibrary");

module.exports = {
  method: "POST",
  url: "/libraries",
  schema: {
    tags: ['Libraries'],
    summary: 'Create the library',
    description: 'Endpoint to create the library in the system',
    body: {
      type: "object",
      required: ["name", "userId"],
      properties: {
        name: { type: "string", minLength: 2, maxLength: 24 },
        userId: { type: "string" },
      },
    },
  },
  handler: createLibrary,
};
