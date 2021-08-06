const express = require("express");
const userController = require("./controller");
const userRouter = express.Router();

userRouter.get("/signup", userController.signup_get);
userRouter.post("/", userController.signup_post);
userRouter.get("/login", userController.login_get);
userRouter.post(
  "/login",
  userController.login_post
); /*Have to use a middleware*/

module.exports = userRouter;
