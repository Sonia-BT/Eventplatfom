const { string } = require("joi");
const joi = require("joi");

module.exports = {
  postUser: {
    body: {
      username: joi.string().required(),
      password: joi.string().required(),
      email: joi.string().email().required(),
    },
  },
};
