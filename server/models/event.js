const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { Schema } = mongoose;

//Min DateTime
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = yyyy + "-" + mm + "-" + dd + " " + "T08:30";

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
    min: today,
    max: "2023-12-31 T00:00",
  },
  Online: {
    type: String,
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
    required: false,
  },
});

eventSchema.plugin(mongoosePaginate);

const event = mongoose.model("Event", eventSchema);
module.exports = event;
