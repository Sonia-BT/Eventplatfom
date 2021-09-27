const express = require("express");
const eventController = require("./controller");
const eventRouter = express.Router();

eventRouter.post("/", eventController.addEvent);
/*don't forget to add a middleware*/
eventRouter.get("/CreateEvent", eventController.getEvents);

module.exports = eventRouter;
