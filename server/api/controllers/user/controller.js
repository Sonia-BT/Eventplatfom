const User = require("../../../models/user");
const bcrypt = require("bcrypt");

const addUser = async (req, res) => {
  const { username, userId, password, email } = req.body;
  //check if there is a user with the same username
  const foundUserName = await User.findOne({ username: username });
  if (foundUserName) {
    return res.status(403).json({ error: "Username is already in use" });
  }

  // Check if there is a user with the same email
  const foundUserEmail = await User.findOne({ email: email });
  if (foundUserEmail) {
    return res.status(403).json({ error: "Email is already in use" });
  }

  const user = new User({
    username,
    password,
    email,
  });
  await user.save();
  res.status(201).json({
    message: "Successfully added",
    data: user,
  });
};

module.exports = {
  addUser,
};
