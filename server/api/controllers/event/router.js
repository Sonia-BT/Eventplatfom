const express = require("express");
const eventController = require("./controller");
const eventRouter = express.Router();

eventRouter.post(
  "/",
  /*don't forget to add a middleware*/ eventController.addEvent
);

module.exports = eventRouter;
