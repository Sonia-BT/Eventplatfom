const { string } = require("joi");
const joi = require("joi");

module.exports = {
  postEvent: {
    body: {
      eventName: joi.string().required(),
      eventDescription: joi.string.required(),
      eventImage: joi.string().required(),
      category: joi.string().required(),
      format: joi.string().required(),
      eventDate: joi.string().required(),
    },
  },
};
