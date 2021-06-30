const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: false,
  },
  eventImage: {
    type: String,
    required: true,
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
    min: "2020-06-28",
    max: "2024-12-31",
  },
  Online: {
    type: Boolean,
    default: false,
    required: false,
  },
  publicationDate: {
    type: Date,
    default: Date.now,
  },
  Creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const event = mongoose.model("Event", eventSchema);
module.exports = event;
