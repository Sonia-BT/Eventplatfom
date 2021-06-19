const User = require("../../../models/user");

// const getUser = async (req, res) => {
//   const user = await User.find();
//   if (!user) {
//     return res.status(500).json({
//       message: "user doesn't exist",
//       data: {},
//     });
//   }
//   res.status(200).json({
//     message: "Fetched successfully",
//     data: user,
//   });
// };
const addUser = async (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  const { email } = req.body;

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
  // getUser,
};
