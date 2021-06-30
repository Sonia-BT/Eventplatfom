const express = require("express");
const eventController = require("./controller");
const eventRouter = express.Router();

eventRouter.post("/", eventController.addEvent);

module.exports = eventRouter;
