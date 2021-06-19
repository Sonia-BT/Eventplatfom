const express = require("express");
const userController = require("./controller");
const userRouter = express.Router();

userRouter.post("/", userController.addUser);

module.exports = userRouter;
