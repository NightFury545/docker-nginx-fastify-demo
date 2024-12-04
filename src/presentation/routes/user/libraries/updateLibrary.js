const updateLibrary = require("../../../../app/actions/library/updateLibrary");

module.exports = {
  method: "PUT",
  url: "/libraries/:libraryId",
  schema: {
    tags: ['Libraries'],
    summary: 'Update a library',
    description: 'Endpoint to update a library in the system',
    params: {
      type: "object",
      required: ["libraryId"],
      properties: {
        libraryId: { type: "string" },
      },
    },
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string", minLength: 2, maxLength: 24 },
      },
    },
  },
  handler: updateLibrary,
};
