const Event = require("../../../models/event");
const User = require("../../../models/user");

const addEvent = async (req, res) => {
  const {
    eventName,
    eventDescription,
    eventImage,
    category,
    format,
    eventDate,
    Online,
  } = req.body;

  const event = new Event({
    eventName,
    eventDescription,
    eventImage,
    category,
    format,
    eventDate,
    Online,
  });
  await event.save();
  res.status(201).json({
    message: "Successfully added",
    data: event,
  });
};

module.exports = {
  addEvent,
};
