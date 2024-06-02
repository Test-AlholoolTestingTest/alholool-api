// Models/userModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (inputPassword) {
  const bcrypt = require("bcryptjs");
  return await bcrypt.compare(inputPassword, this.password);
};

// Check if the model already exists before defining it
const User = mongoose.models.Users || mongoose.model("Users", userSchema);

module.exports = User;
