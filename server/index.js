const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const userRouter = require("./api/controllers/user/router");
const eventRouter = require("./api/controllers/event/router");

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once("open", () => console.log("DATABASE CONNECTED !!"));

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());
app.use(cors());

const PORT = process.env.PORT || 2000;

app.use("/user", userRouter);
app.use("/event", eventRouter);

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
