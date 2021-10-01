const User = require("../../../models/user");
const bcrypt = require("bcrypt");

//handel erros
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { username: "", email: "", password: "" };

  //Duplicate error code
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  //validation errors
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      console.log(properties);
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const signup_get = async (req, res) => {
  res.render("signup");
};

const login_get = async (req, res) => {
  res.render("login");
};

const signup_post = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    // //check if there is a user with the same username
    const foundUserName = await User.findOne({ username: username });
    if (foundUserName) {
      return res.status(403).json({ error: "Username is already in use" });
    }
    // // Check if there is a user with the same email
    // const foundUserEmail = await User.findOne({ email: email });
    // if (foundUserEmail) {
    //   return res.status(403).json({ error: "Email is already in use" });
    // }
    const user = new User({
      username,
      email,
      password,
    });
    await user.save();
    res.status(201).json({
      message: "Successfully added",
      data: user,
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).send(errors);
  }
};

const login_post = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const emailUser = await User.findOne({ email });
    const nameUser = await User.findOne({ username });
    if (!emailUser && !nameUser) {
      if (!emailUser) {
        return res.status(400).json({
          message: "email not found",
        });
      } else {
        return res.status(400).json({
          message: "username not found",
        });
      }
    }
    const isMatch = await User.isValidPassword(password);
    if (!isMatch) throw createError.Unauthorized("Username/password not valid");
    const token = jwt.sign({ email: User.email }, process.env.PRIVATE_KEY);
    if (!token) {
      return res.status(500).json({
        message: "Server error",
      });
    }
    return res.status(200).json({
      message: "login successful",
      data: {
        access_token: token,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  signup_get,
  login_get,
  signup_post,
  login_post,
};
