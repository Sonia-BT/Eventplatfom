const express = require("express");
const eventController = require("./controller");
const eventRouter = express.Router();

eventRouter.post("/", eventController.addEvent);
eventRouter.get("/", eventController.getEvents);
eventRouter.put("/:id", eventController.updateEvent);
eventRouter.delete("/:id", eventController.deleteEvent);

module.exports = eventRouter;
