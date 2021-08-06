const { string } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please, enter a username"],
    lowercase: true,
    minlength: [4, "Minimum username length is 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please, enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Minimum password length is 6 characters"],
  },
  // validatePassword: {
  //   type: String,
  //   required: true,
  // },
  createdEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
});
/***------------------------------------------Hash_The_Password-----------------------------------------------***/
userSchema.pre("save", async function (next) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Generate a password hash (salt + hash) and Re-assign hashed version over original, plain text password
    this.password = await bcrypt.hash(this.password, salt);
    console.log("exited");
    next();
  } catch (error) {
    console.log("wrong password");
    next(error);
  }
});

/***------------------------------------------Validate_Password-----------------------------------------------***/

userSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const user = mongoose.model("User", userSchema);

module.exports = user;
