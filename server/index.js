const express = require("express");
const expressFileUpload = require("express-fileupload");
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
app.use(expressFileUpload());

const PORT = process.env.PORT || 2000;

//routes
app.use("/user", userRouter);
app.use("/event", eventRouter);

//Upload Endoint
app.post("/upload", function (req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No file were uploaded");
  }

  const uploadedFile = req.files.eventImage;
  console.log(req.files.eventImage);

  uploadedFile.mv(
    `${__dirname}/client/public/uploads${uploadedFile.name}`,
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      }
      res.send(`File ${uploadedFile.name} was uploaded sucsessfully`);
    }
  );
});

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
