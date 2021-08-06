const Event = require("../../../models/event");
const User = require("../../../models/user");

const addEvent = async (req, res) => {
  try {
    const {
      eventName,
      eventDescription,
      eventImage,
      category,
      format,
      eventDate,
      Online,
    } = req.body;

    //check if there is a event with the same eventName
    const foundEventName = await Event.findOne({ eventName });
    if (foundEventName) {
      return res.status(403).json({ error: "eventName is already used" });
    }

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
      message: "New event Successfully added",
      data: event,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(errors);
  }
};

module.exports = {
  addEvent,
};
