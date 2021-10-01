const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventImage: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
    min: Date.now,
    max: "2024-12-31",
  },
  Online: {
    type: String,
    default: "No",
    required: false,
  },
  publicationDate: {
    type: Date,
    default: Date.now,
  },
  Creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

const event = mongoose.model("Event", eventSchema);
module.exports = event;
