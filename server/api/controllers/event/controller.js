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
      Creator,
    } = req.body;

    // const { username } = req.body;

    //check if there is a event with the same eventName
    const foundEventName = await Event.findOne({ eventName });
    if (foundEventName) {
      return res.status(403).json({ error: "eventName is already used" });
    }

    /*Creator = await User.findOne({ username }); Pour avoir le username est t'elle une bonne méthode !! */

    const event = new Event({
      eventName,
      eventDescription,
      eventImage,
      category,
      format,
      eventDate,
      Online,
      Creator,
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

const getEvents = async (req, res) => {
  const events = await Event.find({});
  res.status(200).send({
    data: events,
  });
};

const getEventByID = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id);
  res.status(200).send({
    data: event,
  });
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      eventName,
      eventDescription,
      eventImage,
      category,
      format,
      eventDate,
      Online,
    } = req.body;

    const { event } = await Event.findById(id);
    if (!event) {
      return res.status(500).json({
        message: "event doesn't exist",
        data: {},
      });
    }
    const event2 = {};
    event2.eventName = eventName || event.eventName;
    event2.eventDescription = eventDescription || event.eventDescription;
    event2.eventImage = eventImage || event.eventImage;
    event2.category = category || event.category;
    event2.format = format || event.format;
    event2.eventDate = eventDate || event.eventDate;
    event2.Online = Online || event.Online;

    const newEvent = await Event.findByIdAndUpdate(id, event2, { new: true });
    if (!newEvent) {
      return res.status(500).json({
        message: "event failed to update",
        data: {},
      });
    }
    return res.status(200).json({
      message: "Updated successfully",
      data: newEvent,
    });
  } catch (error) {
    console.log("ERROR => ", error);
    return res.status(500).json({
      message: "ERROR on server",
      data: {},
    });
  }
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id);
  if (!event) {
    return res.status(500).json({
      message: "event doesn't exist",
      data: {},
    });
  }
  const deletedEvent = await Event.findByIdAndDelete(id);
  if (!deletedEvent) {
    return res.status(500).json({
      message: "event failed to delete",
      data: {},
    });
  }
  res.status(200).json({
    message: "Successfully deleted",
    data: deletedUrl,
  });
};

module.exports = {
  addEvent,
  getEvents,
  getEventByID,
  updateEvent,
  deleteEvent,
};
